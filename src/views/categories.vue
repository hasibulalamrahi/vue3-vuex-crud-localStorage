<template>
  <div>
    <h3>This is the Category Page</h3>
        <!-- <button type="button" class = "btn btn-primary" @click="openModel"> Add New Category</button> -->
        <!-- <div class="clear"></div> -->

        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-primary" @click="openModel">Add Category</button>
           
        </div>
        
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Edit/Delete</th>
                </tr>
            </thead>
                <tbody>
                    <tr v-for="(category,index) in categories" :key="category.id">
                        <td>{{category.name}}</td>
                        <td>
                            <button type="button" class="btn btn-light mr-1" @click="openEdit(index)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                            </button>
                        
                            <button type="button" class="btn btn-light mr-1" @click="remove(index)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                            </button>
                        </td>
                        
                        
                    </tr>

                </tbody>   
            

        </table>
        <div>
            <div v-if="catModal">.
                <modal-window :dynamic-title="dynamicTitle" :add-button="addButton"  @close-modal="closeCatModal" :edit-button="editButton"  :edit-index="index"></modal-window>
            </div>
        </div>
  </div>
</template>

<script>
// export const STORAGE_KEY_1 = 'vue-categories';
import ModalWindow from '../components/category/categoryModal';
const STORAGE_KEY_1 = 'vue-categories';
// import STORAGE_KEY from '../store/store'
export default{
    name:'category',
     components:{
    'modal-window':ModalWindow
    },
    data(){
        return{
            dynamicTitle:'Add Data',
            addButton:false,
            catModal:false,
            catName:'',
            editButton:false,
            index:''
        }
    },
    created(){
        this.$store.state.categories = JSON.parse(localStorage.getItem(STORAGE_KEY_1)|| '[]');
    },
    computed:{
        categories(){
            return this.$store.getters.categories
        }
    },
    methods:{
            openModel(){
                this.dynamicTitle="Add New Category";
                this.catModal = true;
                this.addButton=true;
                this.editButton = false;
            },
            closeCatModal(){
                this.catModal = false;
            },
            openEdit(index){
                this.index=index;
                // console.log(index);
                this.catName = this.categories[index].name;
                // console.log(this.catName);
                this.catModal = true;
                this.dynamicTitle = "Edit Categories";
                this.editButton = true;
                this.addButton=false;
                
            },
            
            remove(index){
                
                //  console.log(index);
                this.$store.commit('removeCategory',index)
                localStorage.setItem(STORAGE_KEY_1,JSON.stringify(this.$store.state.categories));
            },
           
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
        *{
            margin : 5px;
            padding: 2px;
        }
        h3 {
        margin: 40px 0 0;
        }

         .modal-mask{
            position:fixed;
            z-index:9998;
            top:0;
            left:0;
            width:100%;
            height:100%;
            background-color: rgba(5,5,5,.5);
            display: table;
            transition:opacity .3s ease;
        }
        .modal-wrapper{
            display: table-cell;
            vertical-align: middle;
        }
         .buttons{
            float:right;
            margin:5px;
        }
</style>

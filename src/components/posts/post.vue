<template>
  <div>
    <h3>This is the post Page</h3>

       
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-primary" @click="openModel">Add List</button>
           
        </div>
        
        </div>
        </div>
        <div>
    
        <div class =""> 
        <!-- <div class="clear"></div> -->
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>View</th>
                    <th>Edit/Delete</th>
                </tr>
            </thead>
                <tbody>
                    <tr v-for="(post,index) in posts" :key="post.index" >
                        <td>{{post.title}}</td>
                        <td>
                            <button type="button" class="btn btn-light mr-1" @click="viewPostData(index)" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"/>
                            <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"/>
                            </svg></button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-light mr-1" @click="openEdit(post,index)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                            </button>
                             
                            <button type="button" class="btn btn-light mr-1" @click="removePost(index)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                            </button>
                        </td>
                        
                        
                    </tr>

                </tbody>   
            

        </table>
        <post-modal v-if="viewPost" :expTitle="expTitle" :expCategory="expCategory" :expPost="expPost" v-on:closeWindow="closeModal($event)"></post-modal>
        <div>
            <div v-if="myModel">.
               <modal-window :dynamic-title="dynamicTitle" :add-button="addButton" :edit-button="editButton" :categories="categories" :editId="editId" @close-modal="closePostModal"></modal-window>
            </div>
        </div>

        </div>
      
     

  </div>
</template>

<script>
  const STORAGE_KEY_2 = 'vue-posts';
import postModal from './postModal'
import viewPostModal from './viewPostModal'
export default{
    name:'home',
     components:{
     'modal-window':postModal,
    'post-modal':viewPostModal
    },
    data(){
        return{
        categories:[],
        // allPostData:'',
        dynamicTitle : '',
        myModel:false,
        addButton: false,
        // allData:'',
        // editData:'',
        // title:'',
        // category:'',
        postBody:'',
        editId:'',
        viewPost:false,
        expTitle:'',
        expCategory:'',
        expPost:''
        
        }
    },
    created(){
        this.$store.state.posts = JSON.parse(localStorage.getItem(STORAGE_KEY_2)|| '[]');
    },
    computed:{
        posts(){
            return this.$store.getters.posts
        }
    },
    methods:{
        openModel(){
            this.dynamicTitle = "Add New Data"
            this.myModel = true;
            this.addButton = true;
            this.editButton = false;
            this.categories = JSON.parse(localStorage.getItem('vue-categories'));
            // console.log(this.categories);
        },
        openEdit(post,index){
            this.dynamicTitle = "Edit Data",
            this.myModel = true;
            this.addButton = false;
            this.editButton = true;
            this.postBody= post.postBody;
            this.editId = index;
            // console.log(this.editId)
        },
        closePostModal(){
            this.myModel = false;
        },
       removePost(index){
                this.$store.commit('removePost',index)
                
                localStorage.setItem(STORAGE_KEY_2,JSON.stringify(this.$store.state.posts));
        },
        viewPostData(index){
            // console.log(index);
            this.expTitle =this.posts[index].title ;
            this.expCategory =this.posts[index].category ;
            this.expPost =this.posts[index].postBody ;
            // console.log(this.expTitle)
            this.viewPost = true;
        },
        closeModal(val){
            this.viewPost = val
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
        h3 {
          margin: 40px 0 0;
        }
         .buttons{
            float:right;
            margin:5px;
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

</style>

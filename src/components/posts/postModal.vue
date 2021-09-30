<template>
    <div>
         <transition name="model">
                    <div class="modal-mask">
                        <div class ="modal-wrapper">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" @click="closeModal"><span aria-hidden="true">&times;</span></button>
                                        <h4 class="modal-title">{{dynamicTitle}}</h4>

                                    </div>
                                        <div class="modal-body">
                                            <div class="form-group">
                                                <label>Title </label>
                                                <!-- <input type="text" class="form-control" v-model="allData" @keyup.enter="addData" /> -->
                                                <input type="text" class="form-control" v-model="title" /> <br>

                                                <label>Add Category</label>
                                                <select v-model="category">
                                                    <option v-for="cat in categories" :key="cat.id" >{{cat.name}}</option>

                                                </select> <br>
                                                <label>Post Body</label>
                                                <!-- <input type="text" class="form-control" v-model="allData" @keyup.enter="addData" /> -->
                                                <input type="text" class="form-control" v-model="postBody" />

                                            </div>
                                            <div align = "center">
                                                <!-- <input type="hidden" v-model="hiddenId"/> -->
                                                <div v-if="addButton">
                                                    <button class = "btn btn-secondary" v-bind="allPostData" @click="addPostData"> Add New Data</button>


                                                </div>
                                                <div v-if="editButton">
                                                    <button class = "btn btn-secondary" v-bind="EditData" @click="editPost"> Edit Data</button>


                                                </div>
                                                <!-- <input v-model="allData" @keyup.enter="addData"> -->
                                            </div>

                                        </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
    </div>

</template>

<script>
import STORAGE_KEY_2 from './post'
export default {
    props:[
        'dynamicTitle',
        'addButton',
        'editButton',
        'categories',
        'editId'
        
        
        
    ],
        emits:['close-modal'],
    data(){
        return{
            title:'',
            category:'',
            postBody:'',
            allPostData:'',
            EditData:''
        }
    },
    computed:{
        posts(){
            return this.$store.getters.posts
        }
    },
    methods:{
        closeModal(){
            this.$emit('close-modal')
        },
         addPostData(){
            if(this.title.trim().length == 0){
                alert("Fill up the title")
            }
            else if(this.postBody.trim().length == 0){
                alert("Fill up the Post body segment")
            }
            else{
                
                    this.$store.commit('addPosts',{
                    id:new Date().getSeconds(),
                    title:this.title,
                    category:this.category,
                    postBody:this.postBody
                })
                    localStorage.setItem(STORAGE_KEY_2,JSON.stringify(this.$store.state.posts));
                    this.closeModal()
                    this.title='';
                    this.postBody='';
                    this.category ='';
            }
                    
        },
        editPost(){
            if(this.title.trim().length ==0){
                return
            }
            else if(this.postBody.trim().length == 0){
                return 
            }
            else {
                
                this.$store.commit('editPosts',{
                    index:this.editId,
                    title:this.title,
                    category:this.category,
                    postBody:this.postBody
                })
                this.myModel = false;
                localStorage.setItem(STORAGE_KEY_2,JSON.stringify(this.$store.state.posts));
                this.title = '';
                this.postBody= '';
                this.closeModal()
                
                // localStorage.setItem(STORAGE_KEY,JSON.stringify(this.posts));
            }
        },
    }
}
</script>
<style>
</style>
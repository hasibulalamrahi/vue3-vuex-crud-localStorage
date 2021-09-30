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
                                                <label>{{dynamicTitle}}</label>
                                                <input type="text" class="form-control" v-model="addCategory" />

                                            </div>
                                            <div align = "center">
                                                <div v-if="addButton">
                                                    <button class = "btn btn-secondary" v-bind="allData" @click="addComponent(addCategory)"> Add New Category</button>


                                                </div>
                                                <div v-if="editButton">
                                                    <button class = "btn btn-secondary" v-bind="editCategory" @click="editData"> Edit Category</button>


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
import STORAGE_KEY_1 from './categories.vue'
export default{
    props:[
        'dynamicTitle',
        'addButton',
        'editButton',
        'editIndex',
        
        
    ],
    emits:['close-modal'],
    data(){
        return{
            addCategory:'',
            allData:'',
            editCategory:''
            
        }
    },
    methods:{
        addComponent(category){
            // console.log(category)
            if(category.trim().length ==0){
                return
            }
            else{
                this.$store.commit('addComponent',{
                    id:new Date().getSeconds(),
                    name:category
                })
                
                this.addCategory=''
                this.closeModal()
                localStorage.setItem(STORAGE_KEY_1,JSON.stringify(this.$store.state.categories));
                // // console.log(this.$store.state.categories)
            }
        },
        closeModal(){
            this.$emit('close-modal')
        },
        editData(){
            if(this.addCategory.trim().length ==0){
                return
            }
            else{
                this.$store.commit('editComponent',{
                    index:this.editIndex,
                    name:this.addCategory
                })
                
                this.addCategory =''
                this.closeModal()
                localStorage.setItem(STORAGE_KEY_1,JSON.stringify(this.$store.state.categories));
            }
        }
    }
}
</script>

<style>
</style>
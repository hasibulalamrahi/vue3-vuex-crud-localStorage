<template>
    <div>
        <transition name="model">
            <div class ="modal-mask">
                <div class ="modal-wrapper">
                    <div class = "modal-dialog">
                        <div class ="modal-content">
                            <div class ="modal-header">
                                <button type ="button" class="close" @click="closeModal"><span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title">{{dynamicHeader}}</h4> 
                                <hr> <br>
                             </div>

                                <div class="modal-body">
                                    <h5><strong>Title:</strong> {{ expTitle}}</h5> <br>
                                    <h7><strong>Designation/Category:</strong> {{expCategory}}</h7>
                                    <p><strong>Post Body:</strong> {{expPost}}</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default{

        name:'componentM',
        props:[
            'expTitle',
            'expCategory',
            'expPost'
        ],
        data(){
            return{
                myModal:false,
                dynamicHeader : "Data is Previewed Here"
            }
        },
        
        methods:{
            closeModal(){
                this.$emit('closeWindow',false)
            }
        }
}
</script>

<style>
        *{
            margin : 5px;
            padding: 2px;
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
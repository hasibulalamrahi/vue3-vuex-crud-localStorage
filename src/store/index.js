import { createStore } from 'vuex'
// import STORAGE_KEY_1 from '../views/categories'
// import STORAGE_KEY_2 from '../views/post'
let STORAGE_KEY_1 = 'vue-categories';
let STORAGE_KEY_2 = 'vue-posts';


export default createStore({
  state: {
    categories:[],
    posts:[]
  },
//   created(){
//         // this.state.categories = JSON.parse(localStorage.getItem(STORAGE_KEY_1)|| '[]');
//         this.state.categories = JSON.parse(localStorage.getItem(STORAGE_KEY_1));

//     },
  getters:{
    categories(state){
      return state.categories
  },
  posts(state){ 
      return state.posts
  }

  },

  mutations: {

    addComponent(state,categorie){
      state.categories.push({
          id:categorie.id,
          name:categorie.name
      })
    //   console.log(state.categories)
    localStorage.setItem(STORAGE_KEY_1,JSON.stringify(state.categories));
    //  this.addItem(state.categorie)

  },
  removeCategory(state,index){
      state.categories.splice(index,1)
      localStorage.setItem(STORAGE_KEY_1,JSON.stringify(state.categories));

  },
  editComponent(state,editedValue){
      // console.log(state.categories)
      // console.log(editedValue.index)
      // console.log(editedValue.name)
      state.categories[editedValue.index].name = editedValue.name;
      localStorage.setItem(STORAGE_KEY_1,JSON.stringify(state.categories));

      
  },
  addPosts(state,post){
      state.posts.push({
          id:post.id,
          title:post.title,
          category:post.category,
          postBody:post.postBody
      })
      localStorage.setItem(STORAGE_KEY_2,JSON.stringify(state.posts));

  },
  removePost(state,index){
      state.posts.splice(index,1)
      localStorage.setItem(STORAGE_KEY_2,JSON.stringify(state.posts));

  },
  editPosts(state,editPost){
      console.log(editPost.index)
      state.posts[editPost.index].title=editPost.title;
      state.posts[editPost.index].category=editPost.category;
      state.posts[editPost.index].postBody=editPost.postBody;
      localStorage.setItem(STORAGE_KEY_2,JSON.stringify(state.posts));



  }
  },
  actions: {
  },
  modules: {
  },
//   addItem(categorie){
//       let data = JSON.parse(localStorage.getItem('all-categories'))
//       if(!data){
//           data=[]
//       }
//       localStorage.setItem('data',JSON.stringify(data))
//   }
})

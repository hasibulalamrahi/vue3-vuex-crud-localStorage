import { createStore } from 'vuex'


export default createStore({
  state: {
    categories:[],
    posts:[]
  },
  getters:{
    categories(state){
      return state.categories
  },
  posts(state){ 
      return state.posts
  }

  },
  mutations: {

    addComponent(state,categories){
      state.categories.push({
          id:categories.id,
          name:categories.name
      })
      // console.log(state.categories)
      localStorage.setItem(STORAGE_KEY_1,JSON.stringify(state.categories));

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
  }
})

const {PostRepository} = require('../repository/index')

class PostService {

    constructor(){
        this.postRepository = new PostRepository();
    }

    async createPost(data){
       try {
        const post = await this.postRepository.createPost(data);
        return post;
       } catch (error) {
        console.log("Something went wrong at post service layer");
       }
    }

    async getPost(postId){
        try {
         const post = await this.postRepository.getPost(postId);
         return post;
        } catch (error) {
         console.log("Something went wrong at post service layer");
        }
     }

     async deletePost(postId){
        try {
         const response = await this.postRepository.deletePost(postId);
         return response;
        } catch (error) {
         console.log("Something went wrong at post service layer");
        }
     }

     async updatePost(postId){
        try {
         const post = await this.postRepository.updatePost(postId,data);
         return post;
        } catch (error) {
         console.log("Something went wrong at post service layer");
        }
     }


}


module.exports = PostService;
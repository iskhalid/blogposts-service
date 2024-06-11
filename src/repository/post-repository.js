
const { where } = require('sequelize');
const {BlogPost} = require('../models/index');

class PostRepository {
    async createPost({title,content,imageUrl,author}){
        try {
           const post =  await BlogPost.create({title,content,imageUrl,author})
           return post;
        } catch (error) {
            console.log("error at post-repository")
        }
    }

    async getPost(postId) {
        try {
            const post =  await BlogPost.findByPk(postId);
            return post;
         } catch (error) {
             console.log("error at post-repository")
         }
    }

    async deletePost(postId) {
        try {
             await BlogPost.destroy({
                where:{
                    id:postId
                }
            })
            return true;
         } catch (error) {
             console.log("error at post-repository")
         }
    }

    async updatePost(postId,data) {
        try {
            const post =  await BlogPost.update(data,{
                where:{
                    id:postId
                }
            })
            return post;
         } catch (error) {
             console.log("error at post-repository")
         }
    }



    
}



module.exports = PostRepository;
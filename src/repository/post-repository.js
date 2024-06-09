
const {BlogPost} = require('../models/index');

class PostRepository {
    async createPost({title,content,imageUrl,author}){
        try {
            await BlogPost.create({title,content,imageUrl,author})
        } catch (error) {
            console.log(error)
        }
    }
}



module.exports = PostRepository;
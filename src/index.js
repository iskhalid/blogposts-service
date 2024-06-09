const express = require('express');

const {PORT} = require('../src/config/serverConfig');
const PostRepository = require('./repository/post-repository')





const setUpAndStartServer = async() => {

    const app = express();
    app.listen(PORT,async()=>{
        console.log(`Server running at ${PORT}`);
        const repo = new PostRepository();
        await repo.createPost({title:"test",content:"testtesttesttest",imageUrl:"photo",author:"Khalid",})
    })
}


setUpAndStartServer();
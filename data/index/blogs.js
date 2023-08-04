const mongoose = require('mongoose');

const connectToMongoDB = require('./connet');

// Call the connectToMongoDB function to establish the connection
connectToMongoDB();

const blog = new mongoose.Schema({
    title: String,
    description: String,
    content: String,
    image: String,
    read_more_link: String
});


// const Blog = mongoose.model('Blog',blog)

// const newBlog = new Blog({
//     title: "Our Blog",
//     description: "Passages of Lorem Ipsum available, but the majority have suffered alteration",
//     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
//     image: "images/img-3.png",
//     read_more_link: "#"
// })

// newBlog.save();

module.exports= mongoose.model('Blog',blog);

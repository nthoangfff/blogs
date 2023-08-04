const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose');
const Product = require('./data/index/product');
const Slide = require('./data/index/slide');
const Blog = require('./data/index/blogs');

app.use(express.static('public'));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));



app.get('/index',async function(req, res){
    try {
        // Retrieve all products from the database.
        const products = await Product.find();
        const slides = await Slide.find();

      
        // Pass the products data to the index.ejs template for rendering.
        res.render('pages/index', { products,slides});
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error and render an error page if needed.
        res.render('pages/index', { error });
      }
    });

app.get('/product',async function(req,res){
  try{
    // Lấy giá trị id của sản phẩm từ tham số trên URL
    const productId = req.query.id;

    // Tìm sản phẩm có id tương ứng trong cơ sở dữ liệu
    const products = await Product.findById(productId);

    // Nếu không tìm thấy sản phẩm, trả về trang lỗi 404
    if (!products) {
      res.status(404).send('Không tìm thấy sản phẩm');
      return;
    }else{
    // Render trang "product.ejs" và truyền thông tin sản phẩm
    res.render('pages/product', { products });
    }
  }catch(err){
    console.log('err',err);
  };
});
  

 app.get('/about',function(req,res){
    res.render('pages/about')
 })

 app.get('/shop',async function(req,res){
  try{
    const shop = await Product.find();

    res.render('pages/shop',{shop})
  }catch(error){
    console.log('errr',error);
    res.render('err',{error})
  }
})

app.get('/blog',async function(req,res){
  try{
    const blogs =  await Blog.find();

  res.render('pages/blog',{blogs})
  }catch (error) {
        console.error('Error fetching data:', error);
        res.render('pages/blog',{error})

  }
})

app.get('/contact',function(req,res){
  res.render('pages/contact')
})

app.get('/vagetables',function(req,res){
  res.render('pages/vagetable')
})


app.listen(5000,()=>{
    console.log("Run sever 5000")
});
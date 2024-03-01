const express = require('express');
const Product = require('../models/Product');
const Review = require('../models/Review');
const router = express.Router()
const {validateProduct , isProductAuthor , isLoggedIn, isSeller} = require('../middleware')

router.get('/products' , async(req,res)=>{
    try{
        let products = await Product.find({});
        res.render('products/index' , {products});
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})

router.get('/product/new' , isLoggedIn , (req,res)=>{
    try{
        res.render('products/new');
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})

router.post('/products' , validateProduct , isLoggedIn , isSeller,   async(req,res)=>{
    try{
        let {name , img , price , desc} = req.body;
        await Product.create({name , img , price , desc , author:req.user._id});
        req.flash('success' , 'Product added successfully');
        res.redirect('/products');
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})

router.get('/products/:id' , isLoggedIn , async(req,res)=>{
    try{
        let {id} = req.params;
        let foundProduct = await Product.findById(id).populate('reviews');
        res.render('products/show' , {foundProduct , msg:req.flash('msg')})
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})

router.get('/products/:id/edit', isLoggedIn , async(req,res)=>{
    try{
        let {id} = req.params;
        let foundProduct = await Product.findById(id);
        res.render('products/edit' , {foundProduct})
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})

router.patch('/products/:id' , isLoggedIn , validateProduct ,  async(req,res)=>{
    try{
        let {id} = req.params;
        let {name , img , price , desc} = req.body;
        await Product.findByIdAndUpdate( id , {name , img , price , desc}  )
        req.flash('success' , 'Product edited successfully');
        res.redirect(`/products/${id}`);
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})

router.delete('/products/:id' , isLoggedIn , isProductAuthor , async(req,res)=>{
    try{
        let {id} = req.params;
        const product = await Product.findById(id);
        await Product.findByIdAndDelete(id);
        req.flash('success' , 'Product deleted successfully');
        res.redirect('/products');
    }
    catch(e){
        res.status(500).render('error' , {err : e.message});
    }
})

module.exports = router;
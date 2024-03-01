const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
    {
        name:"iPhone 14 pro",
        img:"https://images.unsplash.com/photo-1663408536081-7721bb837ec6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 129900,
        desc: "Apple" 
    },
    {
        name:"Macbook M2 Pro",
        img:"https://images.unsplash.com/photo-1675868375030-7f0811726dfe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 139990 , 
        desc: "Apple"
    },
    {
        name: "iWatch Ultra",
        img: "https://images.unsplash.com/photo-1698314439915-74ffb5a5770f?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 79900,
        desc: "Apple"
    },
    {
        name:"iPad Pro", 
        img: "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        price: 111900, 
        desc: "Apple"
    },
    {
        name:"Airpods Pro" , 
        img:"https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , 
        price: 24900 ,
        desc: "Apple"
    }
]

async function seedDB(){
    await Product.insertMany(products);
    console.log("Data Seeded Successfully");
}

module.exports = seedDB;
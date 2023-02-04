import express from "express";
import Product from '../db/models/productModel.js';


export const insertProduct = async (req, res) =>{
  
    try {
        const {
          name,
          description,
          stock,
          img,
          likes,
          comments,
          category,
          price,
          size
        } = req.body; 
        
        const newProduct = new Product({
          name,
          description,
          stock,
          img,
          likes,
          comments,
          category,
          price,
          size
        });
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}

export const getAllProduct = async (req, res) =>{
    try {
        const data = await Product.find({});
        res.send(data)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
}


export const deleteProduct = async (req, res) =>{
    try {
        const post = await Product.deleteOne({ _id: req.params.id });
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
}

export const getProduct = async (req, res) =>{
    try {
        const post = await Product.findById({ _id: req.params.id });
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
}

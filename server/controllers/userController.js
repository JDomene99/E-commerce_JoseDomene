import express from "express";
import User from '../db/models/userModel.js';


export const getAllUsers = async (req, res) =>{
    const data = await User.find({});
    res.send(data)
}

export const deleteUser = async (req, res) =>{
    try {
        const post = await User.deleteOne({ _id: req.params.id });
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
}

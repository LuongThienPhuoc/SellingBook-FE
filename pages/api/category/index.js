import dbConnect from '../../../utils/mongodb.js';
import mongoose from 'mongoose'
import User from '../../../models/users.js';
import { JWTAuthToken, AuthMiddleware } from '../../../helper/JWT.js';
import Receipt from '../../../models/receipt.js';
import Cart from '../../../models/cart.js';
import Category from '../../../models/category.js';

dbConnect();

const getCategory = async(req, res) => {
    console.log("req.body", req.body);
    res.status(200).send({
        run: true,
        ok: true,
        get: "OK"
    })
}

const categoryController = async (req, res, data) => {
    const { method } = req;
    // Refresh
    switch (method) {
        case 'GET':
            await getCategory(req, res);
            break;
        case 'DELETE':
            res.status(200).send({
                run: true,
                ok: true
            })
            break;
        case 'PUT':
            res.status(200).send({
                run: true,
                ok: true
            })
            break;
        default:
            return res.status(400).json({ success: false });
    }
}

export default AuthMiddleware(categoryController)
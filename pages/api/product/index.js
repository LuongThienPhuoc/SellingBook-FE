import dbConnect from '../../../utils/mongodb.js';
import mongoose from 'mongoose'
import User from '../../../models/users.js';
import { JWTAuthToken, AuthMiddleware } from '../../../helper/JWT.js';
import Receipt from '../../../models/receipt.js';
import Cart from '../../../models/cart.js';
import Category from '../../../models/category.js';
import Product from '../../../models/product.js';
dbConnect();

const getProduct = async(req, res) => {
    // console.log("req.body", req.body);
    var productList = [];
    await Product.find().exec()
        .then((data)=> {
            productList = data;
        })
        .catch((error) => {
            return res.status(200).send({
                success: false,
                message: error
            })
        })
    res.status(200).send({
        success: true,
        product: productList
    })
}

const addProduct = async(req, res) => {
    console.log("req.body", req.body);
    const product = new Product({
        author: req.body.author,
        title: req.body.title,
        introduction: req.body.introduction,
        price: req.body.sellPrice,
        historyPrice: [
            req.body.importPrice,
            req.body.sellPrice
        ],
        imgList: req.body.imgList,
        categoryID: req.body.categoryID,
        tagID: [],
        importDate: req.body.importDate,
        quantity: req.body.quantity,
        publisher: req.body.publisher,
        format: req.body.format,
        publishYear: req.body.publishYear,
        detailInfomation: req.body.detailInformation,
        pageAmount: req.body.pageAmount,
        size: req.body.size,
    })
    if (product) {
        product.save()
            .then(result => {
                return res.status(200).json({
                    success: true,
                    product: result,
                    message: "create product ok"
                })
            })
            .catch(err => {
                throw new Error("Create product fail");
            })
    } else {
        return res.status(200).json({
            success: false,
            status: 401,
            refresh: 'Create product success'
        })
    }
}



const productController = async (req, res, data) => {
    const { method } = req;
    // Refresh
    switch (method) {
        case 'GET':
            await getProduct(req, res);
            break;
        case 'POST':
            await addProduct(req, res);
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

export default AuthMiddleware(productController)
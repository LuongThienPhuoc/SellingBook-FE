import dbConnect from '../../../utils/mongodb.js';
import mongoose from 'mongoose'
import User from '../../../models/users.js';
import { JWTAuthToken, AuthMiddleware } from '../../../helper/JWT.js';
import Receipt from '../../../models/receipt.js';
import Cart from '../../../models/cart.js';

dbConnect();
const CreateNewReceipt = async (req, res, data) => {
    const { method } = req;
    // Refresh
    switch (method) {
        case 'POST':
            const user = mongoose.Types.ObjectId(req?.body?.User);
            try {
                if (user) {
                    const receipt = new Receipt({ ...req.body })
                    if (receipt) {
                        receipt.save()
                            .then(result => {
                                res.status(200).send(JSON.stringify({
                                    success: true,
                                    cart: result,
                                    message: 'Create receipt success'
                                }))
                            })
                            .catch(err => {
                                throw new Error("Create receipt fail");
                            })
                    } else {
                        res.status(200).send(JSON.stringify({
                            success: false,
                            status: 401,
                            refresh: 'Create receipt success'
                        }))
                    }
                }
            }
            catch (error) {
                throw new Error("Create receipt fail");
            }
            break;
        default:
            res.status(400).send(JSON.stringify({ success: false }));
    }
}


export default AuthMiddleware(CreateNewReceipt)
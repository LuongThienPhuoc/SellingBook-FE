import dbConnect from '../../../utils/mongodb.js';
import User from '../../../models/users.js';
import { JWTAuthToken, AuthMiddleware } from '../../../helper/JWT.js';
import Receipt from '../../../models/receipt'

dbConnect();
const GetAllReceipt = async (req, res, data) => {
    const { method } = req;
    switch (method) {
        case 'POST':
            try {
                const user = await User.findOne({username: data.username})
                if (user.role == 'admin') {
                    console.log(req.body)
                    const receipt = await Receipt.findById(req.body?.receipt?._id).exec()
                    receipt.deliveryStatus = req.body?.deliveryStatus
                    receipt.save()
                    .then(result => {
                        res.status(200).send(JSON.stringify({
                            isAdmin: true,
                            receipt: result
                        }))
                    })
                    .catch(err => {
                        res.status(401).send(JSON.stringify({
                            status: 401
                        }))
                    })
                } else {
                    res.status(200).send(JSON.stringify({
                        isAdmin: false,
                    }))
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

export default AuthMiddleware(GetAllReceipt)
import dbConnect from '../../../utils/mongodb.js';
import User from '../../../models/user.js';
import { JWTAuthToken, AuthMiddleware } from '../../../helper/JWT.js';

dbConnect();
const Refresh = async (req, res, data) => {
    const { method } = req;

    // Refresh
    switch (method) {
        case 'POST':
            try {
                console.log(data)
                console.log(data.username)
                const username = data.username;
                await User.findOne({username}).then(result => {
                    if(result) {
                        res.status(200).send(JSON.stringify({
                            success: true,
                            status: 1,
                            message: 'Refresh thành công',
                            data: result
                        }))
                    }
                })
                
            }
            catch (error) {
                console.log("error", error)
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(400).send(JSON.stringify({ success: false }));
    }
}


export default AuthMiddleware(Refresh)
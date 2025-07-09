import { Webhook } from 'svix'
import userModel from '../models/userModel.js';
// API Controller Function to manage Clerk User with database
// http://localhost:4000/api/user/webhooks

const clerkWebhooks = async (req, res) => {
    try {
        // create a svix event with clerk webhook secret
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        })

        const { data, type } = req.body;

        switch (type) {

            case "user.created": {

                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }

                await userModel.create(userData);
                res.json({
                    success: true,
                    msg: "User Created in database"
                })

                break;
            }

            case "user.updated": {

                const userData = {
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }

                await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
                res.json({
                    status: true,
                    msg: "Updated"
                })

                break;
            }

            case "user.deleted": {

                await userModel.findOneAndDelete({ clerkId: data.id });
                res.json({
                    status: true,
                    msg: "User Deleted."
                })

                break;
            }

            default:
                break;
        }


    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            msg: error.message
        })
    }
}

const userCredit = async(req,res) =>{

    try {
        
        const { clerkId } = req.body;
        const userData = await userModel.findOne({clerkId});
        
        res.json({
            success:true,
            credits:userData.creditBalance
        })

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            msg: error.message
        })
    }    

}

export { clerkWebhooks, userCredit }
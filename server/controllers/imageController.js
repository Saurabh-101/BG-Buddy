import axios from 'axios'
import fs from 'fs'
import FormData from 'form-data'

import userModel from '../models/userModel.js'
import { log } from 'console'

// Controller func to remove bg from image

const removeBgImage = async (req, res) => {

    try {

        const { clerkId } = req.body;
        const user = await userModel.findOne({ clerkId });

        if (!user) {
            return res.json({
                success: false,
                msg: "User not found."
            })
        }
        if (user.creditBalance === 0) {
            return res.json({
                success: false,
                msg: "Not enough credit.",
                creditBalance: user.creditBalance
            })
        }

        const imagePath = req.file.path;

        // Read the image file
        const imageFile = fs.createReadStream(imagePath);
        const formData = new FormData();
        formData.append('image_file', imageFile);

        const { data } = await axios.post('https://clipdrop-api.co/remove-background/v1', formData, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API
            },
            responseType: 'arraybuffer'
        })

        const base64Image = Buffer.from(data, 'binary').toString('base64')
        const resultImage = `data:${req.file.mimetype};base64,${base64Image}`;
        await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 });

        res.json({
            success:true,
            resultImage,
            creditBalance: user.creditBalance-1,
            msg:"Background Removed."
        })

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            msg: error.message
        })
    }

}

export { removeBgImage }
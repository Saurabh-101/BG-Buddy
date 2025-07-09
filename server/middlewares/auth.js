import jwt from 'jsonwebtoken'

// MIddleware function to decode jwttoken to get clerk id

const authUser = async (req,res,next) =>{
    try {
        req.body = {};
        const {token} = req.headers
        if(!token){
            return res.json({
                success:false,
                msg:"Not authorised, login again."
            })
        }

        const token_decode = jwt.decode(token);
        
        req.body.clerkId = token_decode.clerkId;
        
        next()

    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            msg:error.message,
        })
    }
}

export {authUser}
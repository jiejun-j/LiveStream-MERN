import User from "../../models/user.js";
import Channel from "../../models/Channel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const postRegister = async(req, res) => {
    try {
        const { username, email, password } = req.body;

        const userExists = await User.exists({ email });

        if (userExists) {
            return res.status(409).send("email already in use");
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const newChannel = await Channel.create({});

        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password: encryptedPassword,
            channel: newChannel._id,
        });

        // create jwt token
        const token = jwt.sign(
            // payload: data we want to send in token
            { 
                userId: user._id, 
                email,
            },
            // secret: key to encrypt the token
            process.env.TOKEN_SECRET,
            // additional config: when the token will expire
            { 
                expiresIn: "1d" ,
            }
        );
        
        // send success response back to user with user details and JWT token
        return res.status(201).json({
            userDetails: {
                email,
                username,
                token,
            },
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send("error occurred, please try again");
    }

    return res.send("user has been added to database");
}
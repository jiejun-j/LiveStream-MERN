import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const postLogin = async(req, res) => {
    try{
        const { email, password } = req.body;

        const user = await User.findOne({ email: email.toLowerCase(), });

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { userId: user._id, email },
                process.env.TOKEN_SECRET,
                { expiresIn: "1d" }
            );

            return res.status(200).json({
                userDetails: {
                    email: user.email,
                    username: user.username,
                    token,
                },
            });
        }

        return res.status(400).send("invalid email or password");
    } catch (err) {
        console.log(err);
        return res.status(500).send("error occurred, please try again");
    }
}
import User from "../../models/user.js";

export const postRegister = async(req, res) => {
    try {
        const { username, email, password } = req.body;

        const userExists = await User.exists({ email });

        if (userExists) {
            return res.status(409).send("email already in use");
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password: encryptedPassword,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send("error occurred, please try again");
    }

    return res.send("user has been added to database");
}
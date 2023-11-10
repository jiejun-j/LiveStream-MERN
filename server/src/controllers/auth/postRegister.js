import User from "../../models/user.js";

export const postRegister = async(req, res) => {
    
    const user = await User.create({
        username: "Mark",
        email: "test@123.com",
        password: "password",
    });

    return res.send("user has been created in the database");
}
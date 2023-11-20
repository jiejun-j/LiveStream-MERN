import bcrypt from "bcryptjs";
import User from "../../models/User.js";

export const patchChangePassword = async (req, res) => {
    try {
        const { userId } = req.user;

        const { password, newPassword } = req.body;

        const userData = await User.findById(userId, {
            password: 1,
        });

        const isPasswordCorrect = await bcrypt.compare(password, userData.password);

        if (!isPasswordCorrect) {
            return res.status(400).send("Old password is incorrect");
        }

        // encrypt new password
        const encryptPassword = await bcrypt.hash(newPassword, 10);

        // update user password
        await User.updateOne({ _id: userId }, { password: encryptPassword });

        return res.status(200).send("Password changed successfully");

    } catch (err) {
        return res.status(500).send("Error occurred, please try again");
    }
}
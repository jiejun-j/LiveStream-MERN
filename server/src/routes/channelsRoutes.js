import express from "express";
import ExpressValidation from "express-joi-validation";
import Joi from "joi";
import { getChannelDetails } from "../controllers/controllers.js";

const router = express.Router();

const channelDetailsSchema = Joi.object({
    channelId: Joi.string().required(),
});

const validator = ExpressValidation.createValidator({});

router.get(
    '/:channelId',
    validator.params(channelDetailsSchema),
    getChannelDetails,
);

export default router;
import Joi from "joi";


export const ChatSchema = Joi.object(
    {
        userid: Joi.string().required(),
    }
)
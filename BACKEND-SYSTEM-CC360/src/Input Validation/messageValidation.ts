import Joi from "joi";

export const MessageSchema = Joi.object(
    {
        chatid: Joi.string().required(),
        userid: Joi.string().required(),
        sender: Joi.string().required(),
        messagetext: Joi.string().required(),
    }
)
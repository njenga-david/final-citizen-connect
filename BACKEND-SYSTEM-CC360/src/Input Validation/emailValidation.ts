import Joi from "joi";


export const EmailSchema = Joi.object(
    {
        email: Joi.string().required().email(),
    }
)
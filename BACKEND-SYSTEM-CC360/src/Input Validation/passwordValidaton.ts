import Joi from "joi";


export const PasswordSchema = Joi.object(
    {
        password: Joi.string().required().pattern(new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)),
    }
)
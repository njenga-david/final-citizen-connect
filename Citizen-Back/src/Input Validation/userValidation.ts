import Joi from "joi";


export const RegisterSchema = Joi.object(
    {
        username: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required().pattern(new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)),
        role:Joi.string().required()

    }
)
import Joi from "joi";

export const ViewSchema = Joi.object(
    {
        title: Joi.string().required(),
        description: Joi.string().required()
    }
)
import Joi from "joi";


export const CommentSchema = Joi.object(
    {
        comment: Joi.string().required(),
        viewid: Joi.string().required(),
    }
)
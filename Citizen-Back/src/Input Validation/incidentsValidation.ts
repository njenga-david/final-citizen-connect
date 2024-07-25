import Joi from "joi";


export const IncidentsSchema = Joi.object(
    {
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        multimedia: Joi.string().required()
      
    }
)
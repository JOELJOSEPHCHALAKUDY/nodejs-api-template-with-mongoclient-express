const joi = require('joi');


module.exports =  {
    validateParams: (schema,name) =>    {
        return (req, res, next) =>   {
            const result = joi.validate({ param: req['params'][name]},schema) ;
            if(result.error)    {
                return res.status(400).json(result.error);
            }
            
            if(!req.value){ req.value = {};}

            if(!req.value['params']) { req.value['params'] = [];}
            
            req.value['params'][name] = result.value.param;
            next();
        }
    },
    validateBody: (schema) =>    {
        return (req, res, next) =>   {
            const result = joi.validate(req.body,schema) ;
            if(result.error) {
                return res.status(400).json(result.error);
            }
            if(!req.value){ req.value = {};}
            req.value['body'] = result.value;
            next();
        }
    },
    schemas:    {
        authSchema: joi.object().keys({
            email: joi.string().email().required(),
            password: joi.string().required()
        }),
        idSchema: joi.object().keys({
            param: joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
        }),
    }
}
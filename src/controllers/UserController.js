const User = require('../models/Users');
const { Op } = require("sequelize");

module.exports = {

    async index(req, res)
    {
            try{

                const users = await User.findAll({
                    where: { status: true}
                });
                return res.status(200).send(users);
            }
            catch(err)
            {
                return res.status(400).send({error : err});
            }
    },

    async store(req, res)
    {
        try{
        const { nome, email, crm, cre, status} = req.body;

        if(await User.findOne({
            where: {
              [Op.or]: [
                { email: email },
                { crm: crm },
                { cre: cre}
              ]
            }
        }))
        {
            return res.status(400).json({ error: 'Usuario ja cadastrado'});
        }
        
        const user = await User.create({ nome, email, crm, cre, status});

            return res.status(200).send(user);
    }
    catch(err)
    {
        return res.status(400).send({error : err});
    }
       
    },

    async alterar(req, res)
    {
        try{
            
        }
        catch(err)
        {
            
        }
    }

    
}
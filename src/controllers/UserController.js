const User = require('../models/Users');
const { Op } = require("sequelize");

module.exports = {

    async index(req, res)
    {
            try{

                const users = await User.findAll({
                    where: { status: true}
                });
                return res.status(200).json(users);
            }
            catch(err)
            {
                return res.status(400).send({error : err});
            }
    },

    async unico(req, res)
    {
        const { id } =  req.body;

        const usuario = await User.findByPk(id)

        if(!usuario)
        {
            return res.status(400).json({ error: 'Usuario nao encotrado'});
        }
            return res.status(200).json(usuario);
    },

    async store(req, res)
    {
        try{
        const { nome, email, crm, cre, nivel, status} = req.body;

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
        
        const user = await User.create({ nome, email, crm, cre, nivel, status});

            return res.status(200).json(user);
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
    },

    async excluirprovisorio(req, res)
    {

        const { id } = req.body

        const usuario = await User.findByPk(id)

        if(!usuario)
        {
            return res.status(400).json({ error: 'Usuario nao encotrado'});
        }
        
        usuario = await User.destroy(id);

        return res.status(200).json({ error: 'Usuario excluido com sucesso'});

    }

    
}
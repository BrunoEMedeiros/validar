const Nivel = require('../models/Nivel');

module.exports ={

    async store(req, res)
    {
        const { descricao } =  req.body;

        if(await Nivel.findOne({ where: {descricao : descricao}}))
        {
            return res.status(400).json({ error: 'Nivel ja cadastrado'})
        }

        console.log('aki');
        const nl = await Nivel.create({ descricao })

        return res.status(200).json(nl);
    },

    async index(req, res){

        //try{

            const nivel = await Nivel.findAll();
            return res.status(200).json(nivel);
        /*}
        catch(err)
        {
            return res.status(400).send({error : err});
        }
        */
    }

}
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
    }

}
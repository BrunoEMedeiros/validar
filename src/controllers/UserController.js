const User = require('../models/Users');

module.exports = {

    async store(req, res)
    {
        const { name, email } = req.body;

        if(await User.findOne({where: {email: email}})) 
        {
            return res.status(400).json({ error: 'Usuario ja cadastrado'});
        }
        
        const user = await User.create({ name, email});

        return res.json(user);
    }
}
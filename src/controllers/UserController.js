const User = require('../models/Users');
const axios = require('axios')

module.exports = {

    async store(req, res)
    {
        const { name, email } = req.body;

        if(await User.findOne({where: {email: email}})) 
        {
            return res.status(400).json({ error: 'Usuario ja cadastrado'});
        }
        
        const user = await User.create({ name, email});

        await axios.post('http://localhost:3000/posts', {
                name: name,
                email: email
            })
            .then(res => {
                console.log(`statusCode: ${res.statusCode}`)
                console.log(res)
            })
            .catch(error => {
                console.error(error)
            });

        return res.json(user);
    }
}
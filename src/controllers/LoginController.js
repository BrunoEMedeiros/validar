const Login = require('../models/Login');
const User = require('../models/Users');
const crypto = require("crypto");
const { Op } = require("sequelize");


const DADOS_CRIPTOGRAFAR = {
    algoritmo : process.env.ALGORITIMO,
    segredo : process.env.SEGREDO,
    tipo : process.env.TIPO
};

async function criptografar(senha) {
    const cipher = crypto.createCipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
    cipher.update(senha);
    return cipher.final(DADOS_CRIPTOGRAFAR.tipo);
};
 /*
async function descriptografar(senha) {
    const decipher = crypto.createDecipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
    decipher.update(senha, DADOS_CRIPTOGRAFAR.tipo);
    return decipher.final();
};
*/
module.exports = {

    async store(req, res)
    {
        try{
        const { usr_id } =  req.params;
        const { login} =  req.body;
        var { senha } = req.body;

        const user = await User.findByPk(usr_id);
        if(!user){
            return res.status(400).json({ error: 'Usuario nao encontrado'});
        }
        
        if(await Login.findOne({ where: {usr_id : usr_id}}))
        {
            return res.status(400).json({ error: 'Usuario ja possui um login'});
        }
        
        console.log(senha);
        senha = await criptografar(senha);
        //console.log(senha);

        const lg = await Login.create({ login, senha, usr_id});
        
        return res.status(200).json(lg);

        }
        catch(err)
        {
            return res.status(400).send({error : err});
        }
        
    },

    async logar(req, res)
    {
        const { login} =  req.body;
        var { senha } = req.body;
        senha = await criptografar(senha);

        const novo = await Login.findOne({
            where: {
              [Op.and]: [
                { login: login },
                { senha: senha },
              ]
            }
        });

        if(!novo)
        {
            return res.status(400).json({ error: 'Login ou senha estão incorretos'});
        }

        const user = await User.findByPk(novo.usr_id);

        if(!user){

            return res.status(400).json({ error: 'Usuario nao encontrado'});
        }

        return res.status(200).json(user);

    }
}
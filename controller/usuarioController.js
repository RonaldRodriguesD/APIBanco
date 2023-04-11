const modelUsuario = require('../model/usuario');

module.exports=
{
    async List(req,res)
    {
        try {
            const usuario = await modelUsuario.findAll();
            return res.json(usuario);
        } catch (error) {
            return console.error("erro ao consultar lista de usuarios", error);
        }
    },

    async Add(req,res)
    {
        try {
            const usuario = await modelUsuario.create(
                {
                    nome: req.body.nome
                    ,senha: req.body.senha
                    ,email: req.body.email
                    ,data_registro:req.body.data_registro
                }
            );
            return res.json(usuario);
        } catch (error){
            return console.error("Usuario cadastrado", error);
        }
    },

    async Update(req,res)
    {
        try{
            const usr = await modelUsuario.findByPk(req.body.id)
            if (usr){
                usr.nome=req.body.nome;
                usr.senha=req.body.senha;
                usr.email=req,body.email;

                await usr.save();
            }

            return res.json(usr);
        } catch (error){
            return console.error("Usuario cadastrado",error
            )
        }
    },

    async ListOne(req,res)
    {
        try{
            const usuario = await modelUsuario.findByPk(req.body.id);
            return res.json(usuario);
        } catch (error){
            return console.error("erro ao consultar lista de usuarios",error);
        }
    },

    async Delete(req,res)
    {
        try{
            const usuario = await modelUsuario.findByPk(req.body.id);
            await usuario.destroy();
            return res,json(usuario);
        } catch (error){
            return console.error("erro ao consultar a lista de usuarios",error);
        }
    }
}
'use strict';

const repository = require('../repositories/client-repository');

exports.get = async (_, res) => {
    try {
        let data = await repository.get();
        res.status(200).send(data);
    } catch {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.put = async (req, res, next) => {
    try {
         await repository.update(req.params.id, req.body);
         res.status(200).send({
            massege: 'Cliente atualizado com sucesso!' 
         });
    } catch (error) {
        res.status(500).send({
            massege: 'Falha ao processar sua requisição!'
        });
    }
}

exports.delete = async (req, res, next) => {
    try {
        await repository.delete(red.params.id);
        res.status(200).send({
            massege: 'Cliente deletado com sucesso!' 
        });
    } catch (error) {
        res.status(500).send({
            massege: 'Falha ao processar sua requisição!'
        });
    }
}
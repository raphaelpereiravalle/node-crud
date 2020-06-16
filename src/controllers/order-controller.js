'use strict';

const repository = require('../repositories/order-repository');

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

/* exports.port = async (req, res, next) => {
    try {
        await repository({
            number: req.body.number,
            status: req.body.status,
            items: req.body.items
        });
        res.status(201).send({
            massege: 'Produto cadastrado com sucesso!' 
        });
    } catch (error) {
        res.status(500).send({
            massege: 'Falha ao processar sua requisição'
        });
    }
} */

exports.put = async (req, res, next) => {
    try {
         await repository.update(req.params.id, req.body);
         res.status(200).send({
            massege: 'Produto atualizado com sucesso!' 
         });
    } catch (error) {
        res.status(500).send({
            massege: 'Falha ao processar sua requisição'
        });
    }
}

exports.delete = async (req, res, next) => {
    try {
        await repository.delete(red.params.id);
        res.status(200).send({
            massege: 'Produto deletado com sucesso!' 
        });
    } catch (error) {
        res.status(500).send({
            massege: 'Falha ao processar sua requisição'
        });
    }
}
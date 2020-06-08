'use strict';

const repository = require('../repositories/product-repository');
const guid = require('guid');

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
/* 
exports.getById = async (req, res, next) => {
    try {
        let data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.post = async (req, res, next) => {
    try {
        await repository.create(req.body);
        res.status(201).send({
            massege: 'Produto cadastrado com sucesso!' 
        });
    } catch (e) {
        res.status(500).send({
            massege: 'Falha ao processar sua requisição'
        });
    }
}

exports.put = async () => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            massege: 'Produto cadastrado com sucesso!' 
        });
    } catch (e) {
        res.status(500).send({
            massege: 'Falha ao processar sua requisição'
        });
    }
}

exports.delete = async () => {
    try {
        await repository.delete(req.params.id, req.body);
        res.status(200).send({
            massege: 'Produto cadastrado com sucesso!' 
        });
    } catch (e) {
        res.status(500).send({
            massege: 'Falha ao processar sua requisição'
        });
    }
} */
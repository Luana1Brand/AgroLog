const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


const create = async (req, res) => {
    // solução para a data (manu)
    let manu = req.body;

    manu.data = new Date(manu.data);

    let Manutencao = await prisma.Manutencao.create({
        data: manu
    });

    res.status(200).json(Manutencao).end();
}

const read = async (req, res) => {
    let Manutencoes = await prisma.manutencao.findMany();

    res.status(200).json(Manutencoes).end();
}


const readOne = async (req, res) => {
    let Manutencao = await prisma.Manutencao.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            data: true,
            id_carro: true,
            valor: true
        }
    });

    
    res.status(200).json(Manutencao).end();
}


const update = async (req, res) => {
    const Manutencao = await prisma.Manutencao.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })

    res.status(200).json(Manutencao).end();
}



const remove = async (req, res) => {
    const Manutencao = await prisma.Manutencao.delete({
        where: {
            id: Number(req.params.id)
        }
    })

    res.status(200).json(Manutencao).end();
}
module.exports = {
    create,
    read,
    readOne,
    update,
    remove
}
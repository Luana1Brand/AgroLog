const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


const create = async (req, res) => {
    let Frota = await prisma.Frota.create({
        data: req.body
    });

    res.status(200).json(Frota).end();
}



const read = async (req, res) => {
    let Frotas = await prisma.frota.findMany();

    res.status(200).json(Frotas).end();
}



const readOne = async (req, res) => {
    let Frota = await prisma.Frota.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            placa_carro: true,
            funcao: true,
            marca_carro: true
        }
    });


    res.status(200).json(Frota).end();
}


const update = async (req, res) => {
    const Frota = await prisma.Frota.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })

    res.status(200).json(Frota).end();
}



const remove = async (req, res) => {
    const Frota = await prisma.Frota.delete({
        where: {
            id: Number(req.params.id)
        }
    })

    res.status(200).json(Frota).end();
}

module.exports = {
    create,
    read,
    readOne,
    update,
    remove
}
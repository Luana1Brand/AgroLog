const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


const create = async (req, res) => {
    let Funcionarios = await prisma.funcionarios.create({
        data: req.body
    });

    res.status(200).json(Funcionarios).end();
}


const read = async (req, res) => {
    let Funcionarios = await prisma.funcionarios.findMany();

    res.status(200).json(Funcionarios).end();
}



const readOne = async (req, res) => {
    let Funcionarios = await prisma.Funcionarios.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            nome: true,
            cargo: true,
            cpf: true
        }
    });

    
    res.status(200).json(Funcionarios).end();
}


const update = async (req, res) => {
    const Funcionarios = await prisma.Funcionarios.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })

    res.status(200).json(Funcionarios).end();
}



const remove = async (req, res) => {
    const Funcionarios = await prisma.Funcionarios.delete({
        where: {
            id: Number(req.params.id)
        }
    })

    res.status(200).json(Funcionarios).end();
}

module.exports = {
    create,
    read,
    readOne,
    update,
    remove
}
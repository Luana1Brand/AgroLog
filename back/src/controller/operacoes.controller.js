const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


const create = async (req, res) => {
    // solução para a data (ope)
    let ope = req.body;

    ope.data = new Date(ope.data);
    console.log(ope);

    let Operacoes = await prisma.Operacoes.create({
        data: ope
    });

    res.status(200).json(Operacoes).end();
}


// const create = async (req, res) => {
//     // solução para a data (manu)
//     let manu = req.body;

//     manu.data = new Date(manu.data);

//     let Manutencao = await prisma.Manutencao.create({
//         data: manu
//     });

//     res.status(200).json(Manutencao).end();
// }




const read = async (req, res) => {
    let Operacoes = await prisma.operacoes.findMany();

    res.status(200).json(Operacoes).end();
}



const readOne = async (req, res) => {
    let Operacoes = await prisma.Operacoes.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            id: true,
            id_carro: true,
            id_responsavel: true
        }
    });

    
    res.status(200).json(Operacoes).end();
}


const update = async (req, res) => {
    const Operacoes = await prisma.Operacoes.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })

    res.status(200).json(Operacoes).end();
}


const remove = async (req, res) => {
    const Operacoes = await prisma.Operacoes.delete({
        where: {
            id: Number(req.params.id)
        }
    })

    res.status(200).json(Operacoes).end();
}

module.exports = {
    create,
    read,
    readOne,
    update,
    remove
}
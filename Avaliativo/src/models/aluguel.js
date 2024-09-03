const  control_livro = require('../controllers/livro.js')
const control_estudante =require('../controllers/estudante.js')

let db=[]
let nextId = 1

const model =(body, id = nextId++) =>{
    if(
    control_livro.show(body.livro_id) && control_estudante.show(body.estudante_id) &&
    body.data_aluguel !="" && body.data_aluguel != undefined && 
    body.data_devolucao !="" && body.data_devolucao != undefined 
    ) {
        body.id = id
        return{
            id,
            livro_id: body.livro_id,
            estudante_id: body.estudante_id,
            data_aluguel: body.data_aluguel, 
            data_devolucao: body.data_devolucao
        }

    }
}

module.exports = model
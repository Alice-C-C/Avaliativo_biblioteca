
let db=[]
let nextId = 1
const model =(body, id = nextId++) =>{
    if(body.nome !="" && body.nome != undefined && 
        body.matricula !="" && body.matricula != undefined
        && body.curso !="" && body.curso != undefined && 
        body.numero !="" && body.numero != undefined && !isNaN(body.numero)
    ){
        body.id = id
        return{
            id,
            nome: body.nome,
            matricula: body.matricula,
            curso: body.curso,
            ano: body.numero
        }

    }
}

module.exports = model
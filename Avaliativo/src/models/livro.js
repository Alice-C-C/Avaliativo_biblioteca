let db=[]
let nextId = 1

const model =(body, id = nextId++) =>{
    if(body.titulo !="" && body.titulo != undefined
        && body.autor !="" && body.autor != undefined && body.genero !="" && body.genero != undefined
        && body.ano !="" && body.ano != undefined && !isNaN(body.ano)
    ){
        body.id = id
        return{
            id,
            Titulo: body.titulo,
            Autor: body.autor,
            Ano: body.ano,
            Genero: body.genero
        }

    }
}

module.exports = model
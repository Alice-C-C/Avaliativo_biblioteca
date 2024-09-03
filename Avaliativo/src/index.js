const express = require("express")
const livro_router = require("./routers/livro.js")
const estudante_router = require("./routers/estudante.js")
const aluguel_router = require("./routers/aluguel.js")

const app = express()
const port = 3000

app.use(express.json())
// app.use(cep_endereco) // Middleware de uso global

app.use("/livro", livro_router)
app.use("/estudante", estudante_router)
app.use("/aluguel", aluguel_router)


app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})
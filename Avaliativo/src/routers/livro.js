const express = require("express");
const livro_control = require("../controllers/livro.js")
const router = express.Router();

router.get("/", (req, res) => {
    res.json(livro_control.index())
})

router.get("/:id", (req, res) => {
    res.json(livro_control.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = livro_control.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = livro_control.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    livro_control.destroy(req.params.id)
    res.json()
})

module.exports = router
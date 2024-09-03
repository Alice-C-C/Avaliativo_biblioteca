const express = require("express");
const aluguel_control = require("../controllers/aluguel.js")
const router = express.Router();

router.get("/", (req, res) => {
    res.json(aluguel_control.index())
})

router.get("/:id", (req, res) => {
    res.json(aluguel_control.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = aluguel_control.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = aluguel_control.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    aluguel_control.destroy(req.params.id)
    res.json()
})

module.exports = router
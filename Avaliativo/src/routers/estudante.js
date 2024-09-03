const express = require("express");
const est_control = require("../controllers/estudante.js")
const router = express.Router();

router.get("/", (req, res) => {
    res.json(est_control.index())
})

router.get("/:id", (req, res) => {
    res.json(est_control.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = est_control.store(req.body)
    res.status(code).json()
})

router.put("/:id",  (req, res) => {
    const code = est_control.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    est_control.destroy(req.params.id)
    res.json()
})

module.exports = router
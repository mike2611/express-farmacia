const express = require('express');
const router = express.Router();
const db = require('../database');

//GET todos los paises
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM tbl_municipio';
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});

//GET un pais por id
router.get('/:id', (req, res) => {
    const sql = 'SELECT * FROM tbl_municipio WHERE estado = ?';
    db.query(sql, req.params.id, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});

module.exports = router;
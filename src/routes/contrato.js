const express = require('express');
const router = express.Router();
const db = require('../database');

//GET todos los contratos
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM tbl_contrato';
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});

//GET un contrato por id
router.get('/:id', (req, res) => {
    const sql = 'SELECT * FROM tbl_contrato WHERE id = ?';
    db.query(sql, req.params.id, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
})

//Añadir un contrato
router.post('/', (req, res) => {
    let newContrato = req.body;

    const sql =  'INSERT INTO tbl_contrato SET ?';
    db.query(sql, newContrato, (err, result) => {
       if(err) throw err; 
       res.json(result);
    });
})

//Modificar un contrato por id
router.put('/:id', (req, res) => {
    let updateContrato = req.body;

    const sql =  'UPDATE tbl_contrato SET ? WHERE id = ?';
    db.query(sql, [updateContrato, req.params.id], (err, result) => {
       if(err) throw err; 
       res.json(result);
    });
})

//Eliminar un contrato por id
router.delete('/:id', (req, res) => {
    const sql =  'DELETE FROM tbl_contrato WHERE id = ?';
    db.query(sql, req.params.id, (err, result) => {
       if(err) throw err; 
       res.json(result);
    });
})

module.exports  = router;

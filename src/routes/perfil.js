const express = require('express');
const router = express.Router();
const db = require('../database');
const { restart } = require('nodemon');


//GET todos los perfiles
router.get('/', (req, res) => {
    let sql = 'SELECT * FROM tbl_perfil';
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.json(results);
    })
});

//Get un perfil por id
router.get('/:id', (req, res) => {
    let sql = `SELECT * FROM tbl_perfil WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});

//Eliminar un perfil
router.delete('/:id', (req, res) => {
    let sql = `DELETE FROM tbl_empleado WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});

//Añadir un perfil
router.post('/', (req,res) => {
    let newPerfil = req.body;

    if (Object.keys(newPerfil).length === 0) {
        res.status(400).json({ error: "Request body is empty"});
        return;
    }

    let sql = 'INSET INTO tbl_perfil SET ?';
    db.query(sql, newPerfil, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});
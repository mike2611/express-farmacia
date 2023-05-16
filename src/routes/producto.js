const express = require('express');
const router = express.Router();
const db = require('../database');

//GET todos los productos
router.get('/', (req, res) => {
    let sql = 'SELECt * FROM tbl_producto';
    db.query(sql, (err,results) => {
        if(err) throw err;
        res.json(results);
    })
});

//GET un producto por id
router.get('/:id', (req, res) => {
    let sql = `SELECT * FROM tbl_producto WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});

//Eliminar un producto
router.delete('/:id', (req, res) => {
    let sql = `DELETE FROM tbl_producto WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});

//Añadir un producto
router.post('/', (req, res) => {
    let newProducto = req.body;


    if (Object.keys(newProducto).length === 0) {
        res.status(400).json({ error: "El body esta vacio"});
        return;
    }

    let sql = 'INSERT INTO tbl_producto SET ?';
    db.query(sql, newProducto)

});
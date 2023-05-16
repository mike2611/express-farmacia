const express = require('express');
const router = express.Router();
const db = require('../database');

//GET todos los productos
router.get('/', (req, res) => {
    let sql = 'SELECt * FROM tbl_inventario';
    db.query(sql, (err,results) => {
        if(err) throw err;
        res.json(results);
    })
});

//GET un producto por id
router.get('/:id', (req, res) => {
    let sql = `SELECT * FROM tbl_inventario WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});

//Eliminar un producto
router.delete('/:id', (req, res) => {
    let sql = `DELETE FROM tbl_inventario WHERE id = ${req.params.id}`;
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

    let sql = 'INSERT INTO tbl_inventario SET ?';
    db.query(sql, newProducto, (err, result) => {
        if(err) throw err;
        res.json(result);
    });

});

//Modificar un producto por id
router.put('/:id', (req, res) => {
    let updateProducto = req.body;
    
    if(Object.keys(updateProducto).length === 0) {
        res.status(400).json({ error: "El body esta vacio"});
        return;
    }

    let sql = 'UPDATE tbl_inventario SET ? WHERE id = ?';
    db.query(sql, [updateProducto, req.params.id], (err, result) => {
        if(err) throw err;
        res.json(result);
    });
})

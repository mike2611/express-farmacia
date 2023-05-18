const express = require('express');
const router = express.Router();
const db = require('../database');

async function validacionAñadirActualizar(proveedor, res) {
    if (Object.keys(proveedor).length === 0) {
        res.status(400).json({ error: "El body esta vacio" });
        return false;
    }
    
    let contratoSql = `SELECT * FROM tbl_contrato WHERE id = ${proveedor.id_contrato}`;

    let [rows] = await db.promise().query(contratoSql);
    
    // Si el resultado está vacío, entonces el contrato no existe
    if(rows.length === 0){
      res.status(400).json({ error: "El contrato proporcionado no existe" });
      return false;
    }

    return true;
}


//GET todos los proveedores
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM tbl_proveedor';
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});

//GET un proveedor por id
router.get('/:id', (req, res) => {
    const sql = 'SELECT * FROM tbl_proveedor WHERE id = ?';
    db.query(sql, req.params.id, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
})

//Añadir un proveedor
router.post('/', async (req, res) => {
    let newProveedor = req.body;

    if(!await validacionAñadirActualizar(newProveedor, res)) return;

    const sql =  'INSERT INTO tbl_proveedor SET ?';
    db.query(sql, newProveedor, (err, result) => {
       if(err) throw err; 
       res.json(result);
    });
})

//Modificar un proveedor por id
router.put('/:id', async (req, res) => {
    let updateProveedor = req.body;

    if(!await validacionAñadirActualizar(updateProveedor, res)) return;

    const sql =  'UPDATE tbl_proveedor SET ? WHERE id = ?';
    db.query(sql, [updateProveedor, req.params.id], (err, result) => {
       if(err) throw err; 
       res.json(result);
    });
})

module.exports  = router;
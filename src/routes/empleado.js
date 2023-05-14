const express = require('express');
const router = express.Router();
const db = require('../database');

async function validacionAñadirActualizar(empleado, res) {
    if (Object.keys(empleado).length === 0) {
        res.status(400).json({ error: "Request body is empty" });
        return false;
    }
    
    let perfilSql = `SELECT * FROM tbl_perfil WHERE id = ${empleado.id_perfil}`;

    let [rows] = await db.promise().query(perfilSql);
    
    // Si el resultado está vacío, entonces el perfil no existe
    if(rows.length === 0){
      res.status(400).send('El perfil proporcionado no existe');
      return false;
    }

    return true;
}

//GET todos los empleados
router.get('/', (req, res) => {
    let sql = 'SELECT * FROM tbl_empleado';
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.json(results);
    })
});

//Get un empleado por id
router.get('/:id', (req, res) => {
    let sql = `SELECT * FROM tbl_empleado WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});

//Eliminar a un empleado
router.delete('/:id', (req, res) => {
    let sql = `DELETE FROM tbl_empleado WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});

//Añadir a un empleado
router.post('/', (req,res) => {
    let newEmpleado = req.body;

    if (!await validacionAñadirActualizar(newEmpleado, res)) return;

    let sql = 'INSERT INTO tbl_empleado SET ?';
    db.query(sql, newEmpleado, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});

//Editar a un empleado
router.put('/:id', (req, res) => {
    let updateEmpleado = req.body;

    if (!await validacionAñadirActualizar(updateEmpleado, res)) return;
    
    let sql = 'UPDATE tbl_empleado SET ? WHERE id = ?';
    db.query(sql, [updateEmpleado, req.params.id], (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});

module.exports = router;

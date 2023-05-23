const express = require('express');
const router = express.Router();
const db = require('../database');

// Obtener registros de modificaciones
router.get('/', async (req, res) => {
  try {
    await registrarModificacionesAdmins();
    const registros = await obtenerRegistrosModificaciones();
    res.json(registros);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los registros de modificaciones' });
  }
});

// Función para obtener registros de modificaciones
async function obtenerRegistrosModificaciones() {
  const sql = 'SELECT * FROM tbl_registro_modificaciones';
  const [result] = await db.promise().query(sql);
  return result;
}

// Función para registrar una modificación
async function registrarModificacion(idAdmin, tablaModificada, tipoModificacion, nombreModificacion) {
  const sql = 'INSERT INTO tbl_registro_modificaciones (id_admin, tabla_modificada, tipo_modificacion, nombre_modificacion) VALUES (?, ?, ?, ?)';
  await db.promise().query(sql, [idAdmin, tablaModificada, tipoModificacion, nombreModificacion]);
}

// Función para obtener administradores y registrar modificaciones
async function registrarModificacionesAdmins() {
  const sql = 'SELECT * FROM tbl_empleado WHERE id_perfil = 1';
  const [administradores] = await db.promise().query(sql);

  if (administradores.length === 0) {
    return;
  }

  for (const administrador of administradores) {
    const idAdmin = administrador.id;

    const contratosSql = 'SELECT * FROM tbl_contrato WHERE id_admin = ?';
    const [contratos] = await db.promise().query(contratosSql, idAdmin);
    if (contratos.length > 0) {
      contratos.forEach((contrato) => {
        const resultNombre = contrato.descripcion;
        registrarModificacion(idAdmin, 'tbl_contrato', 'modificacion', resultNombre);
      });
    }

    const empleadosSql = 'SELECT * FROM tbl_empleado WHERE id_admin = ?';
    const [empleados] = await db.promise().query(empleadosSql, idAdmin);
    if (empleados.length > 0) {
      empleados.forEach((empleado) => {
        const resultNombre = empleado.nombre;
        registrarModificacion(idAdmin, 'tbl_empleado', 'modificacion', resultNombre);
      });
    }

    const inventarioSql = 'SELECT * FROM tbl_inventario WHERE id_admin = ?';
    const [productos] = await db.promise().query(inventarioSql, idAdmin);
    if (productos.length > 0) {
      productos.forEach((producto) => {
        const resultNombre = producto.nombre;
        registrarModificacion(idAdmin, 'tbl_inventario', 'modificacion', resultNombre);
      });
    }

    const perfilesSql = 'SELECT * FROM tbl_perfil WHERE id_admin = ?';
    const [perfiles] = await db.promise().query(perfilesSql, idAdmin);
    if (perfiles.length > 0) {
      perfiles.forEach((perfil) => {
        const resultNombre = perfil.descripcion;
        registrarModificacion(idAdmin, 'tbl_perfil', 'modificacion', resultNombre);
      });
    }

    const proveedoresSql = 'SELECT * FROM tbl_proveedor WHERE id_admin = ?';
    const [proveedores] = await db.promise().query(proveedoresSql, idAdmin);
    if (proveedores.length > 0) {
      proveedores.forEach((proveedor) => {
        const resultNombre = proveedor.nombre;
        registrarModificacion(idAdmin, 'tbl_proveedor', 'modificacion', resultNombre);
      });
    }
  }
}

module.exports = router;

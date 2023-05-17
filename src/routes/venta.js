const express = require('express');
const router = express.Router();
const db = require('../database');

//TODO: agregar validacion por si la cantidad del producto supera las que hay en inventario

//Generar Venta
router.post('/', async (req, res) => {
    let {id_empleado, fecha_venta, productos } = req.body;


    //Crear venta (sin total de venta)
    let sql = 'INSERT INTO tbl_venta (id_empleado, fecha_venta) VALUES (?, ?)';
    let result = await db.promise().query(sql, [id_empleado, fecha_venta]);
    let id_venta = result[0].insertId;

    let total_venta = 0;

    //Para cada producto, agregar una entrada en la tabla de detalles de venta
    for(let producto of productos) {
        let { id_producto, cantidad } = producto;

        //Se obtiene el precio del producto
        sql = 'SELECT precio_venta FROM tbl_inventario WHERE id = ?';
        let result = await db.promise().query(sql, id_producto);
        let precio_venta = result[0][0].precio_venta;

        //Verificar si la cantidad del producto es 3 o más para aplicar el descuento
        let ap_descuento = cantidad >= 3 ? 1 : 0;

        //Obtener precio final
        let precio_final = ap_descuento ? precio_venta * 0.9 : precio_venta;

        total_venta += precio_final * cantidad;

        //Hacer insert a tbl_venta_detalle
        sql = 'INSERT INTO tbl_venta_detalle (id_venta, id_producto, cantidad, ap_descuento) VALUES (?,?,?,?)';
        await db.promise().query(sql, [id_venta, id_producto, cantidad, ap_descuento]);
    }

    //Se actualiza el total de la venta
    sql = 'UPDATE tbl_venta SET total_venta = ? WHERE id = ?';
    await db.promise().query(sql, [total_venta, id_venta]);

    res.json({message: "Se creo la venta"});
});

//GET Ventas
router.get('/', (req, res) => {
    let sql = 'SELECT * FROM tbl_venta';
    db.query(sql,(err, result) => {
        if(err) throw err;
        res.json(result);
    });
});

//GET Venta por Id donde se obtienen los detalles de la venta con
router.get('/:id', async (req,res) => {
    //Regresa una venta con un id en  especifico
    let idVenta = req.params.id;
    let sql = 'SELECT * FROM tbl_venta WHERE id  = ?';
    const [resultVentas] = await db.promise().query(sql, idVenta);

    //Regresa los productos donde se aplico la promocion si es que existen
    sql = 'SELECT * FROM tbl_venta_detalle WHERE ap_descuento = ? AND id_venta = ?';
    const [productosConDescuento] = await db.promise().query(sql, [1, idVenta]);


    //Regresa el resto de productos donde la promocion no se aplico
    sql = 'SELECT * FROM tbl_venta_detalle WHERE ap_descuento = ? AND id_venta = ?';
    const [productosSinDescuento] = await db.promise().query(sql, [0, idVenta]);


    res.json({
        venta: resultVentas[0], 
        productosConDescuento: productosConDescuento,
        productosSinDescuento: productosSinDescuento
    });
    
})

module.exports = router;
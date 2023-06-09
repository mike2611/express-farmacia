const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/empleados', routes.empleado);
app.use('/perfiles', routes.perfil);
app.use('/productos', routes.inventario);
app.use('/ventas', routes.venta);
app.use('/proveedores', routes.proveedor);
app.use('/contratos', routes.contrato);
app.use('/paises', routes.pais);
app.use('/estados', routes.estado);
app.use('/municipios', routes.municipio);
app.use('/registros', routes.registro);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

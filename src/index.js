const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/empleados', routes.empleado);
app.use('/perfiles', routes.perfil);
app.use('/productos', routes.inventario);
app.use('/venta', routes.venta);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

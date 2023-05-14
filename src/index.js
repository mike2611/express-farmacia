const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());

app.use('/empleados', routes.empleado);
app.use('/perfiles', routes.perfil);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const express = require('express');
const empleadoRoutes = require('./routes/empleado');

const app = express();
app.use(express.json());

app.use('/empleado', empleadoRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

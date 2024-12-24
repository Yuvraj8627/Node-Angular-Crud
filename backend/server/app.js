const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');

app.use(bodyParser.json());
app.use(cors());
app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);

app.listen(3000, () => console.log('Server is running on port 3000'));


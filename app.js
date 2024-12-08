const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const notesRoutes = require('./src/routes/notesRoutes');

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use('/api/notes', notesRoutes);

const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

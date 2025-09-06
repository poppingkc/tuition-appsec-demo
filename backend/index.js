require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Demo: No authentication for now
app.get('/api/secure', (req, res) => {
  res.json({ message: 'This is a secure message from the backend!' });
});

app.get('/', (req, res) => {
  res.send('Backend is running.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

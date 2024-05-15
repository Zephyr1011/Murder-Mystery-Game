
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
const clues = [
    { id: 1, text: 'The butler' },
    { id: 2, text: 'The knife' },
    { id: 3, text: 'In the library' }
];
app.get('/api/clues', (req, res) => {
    res.json(clues);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

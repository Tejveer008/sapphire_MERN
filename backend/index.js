import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;
app.get('/', (req, res) => {    
    res.send('Hello World!');
});

app.get('/about', (req, res) => {    
    res.send('About Page!');
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
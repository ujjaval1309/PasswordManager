import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 3010;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.post('/fetchData', (req, res) => {
    const frontendData = req.body;
    console.log('Data received from frontend:', frontendData);
    res.send('Data received successfully');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
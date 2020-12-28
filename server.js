const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet')

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.static('./public'))

app.get('/url/:id', (req, res) => {
	//TODO: GET A SHORT URL BY ID
})

app.get('/:id', (req, res) => {
	//TODO: REDIRECT TO URL
})

app.post('/url', (req, res) => {
	//TODO: CREATE A SHORT URL
})

const port = process.env.PORT || 5000;	

app.listen(port, () => {
	console.log(`listen http://localhost:${port}`);
})
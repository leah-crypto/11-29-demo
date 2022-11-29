const express = require('express');
const cors = require('cors');
const {getMovies, deleteMovie, updateMovie, createMovie} = require('./controler.js');
//const { application } = require('express');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/movies', getMovies);
app.delete('/api/movies/:id', deleteMovie);
app.put('/api/movies/:movieId', updateMovie);
app.post('/api/movies', createMovie);


app.listen(4004, () => console.log('Listening on port 4004...'));


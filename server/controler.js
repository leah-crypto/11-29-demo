const movies = require('./db.json');
let globalId = 11;

module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(movies);
    },
    deleteMovie: (req, res) =>{
        let {moveiId: id} = req.params;
        let movieIndex = movies.findIndex(elem => elem.id === +id);
        console.log('Movie Index:', movieIndex);
        console.log('Movie Id:', id);


        movies.splice(movieIndex, 1);
        res.status(200).send(movies);
    },
    updateMovie: (req, res) =>{
        let {movieId} = req.params; //maybe supposed to be id
        let {type} = req.body;
        let movieIndex = movies.findIndex(el => el.id === +movieId);

        let movie = movies[movieIndex];

        if(movie.rating === 5 && type === 'plus'){ //add a plus
           //console.log("hit");
            res.status(400).send('cannot go above 5');
        }else if(movie.rating === 0 && type === "minus"){
            res.status(400).send('cannot go below 0');
        }else if(type === "plus"){
            movie.rating++;
            res.status(200).send(movies);
        }else if(type === "minus"){
            movie.rating--;
            res.status(200).send(movies);
        }else{
            res.sendStatus(400);
        }

    },
    createMovie: (req, res) =>{
        let {title, rating, imageURL} = req.body;
        

        let newMovie = {
            id: globalId,
            title,
            rating,
            imageURL
        }

        movies.push(newMovie);

        res.status(200).send(movies);
        globalId++;
    },
};
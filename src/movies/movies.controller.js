const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function movieExists(req, res, next) {
  const movie = await moviesService.read(req.params.movieId);
  if (movie) {
    res.locals.movie = movie;
    return next();
  }
  next({ status: 404, message: "Movie cannot be found." });
};

async function read(req, res, next) {
  const movie = res.locals.movie.movie_id;
  res.json({ data: await moviesService.read(movie) });
};

async function readTheatersByMovie(req, res, next) {
  const movie = res.locals.movie.movie_id;
  res.json({ data: await moviesService.readTheatersByMovie(movie) });
};

async function readReviewsByMovie(req, res, next) {
  const movie = res.locals.movie.movie_id;
  res.json({ data: await moviesService.readReviewsByMovie(movie) });
};

async function list(req, res, next) {
  if (req.query) {
    req.query.is_showing === "true" && res.json({ data: await moviesService.listMoviesCurrentlyShowing() });
  }
  res.json({ data: await moviesService.list() });
};

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(movieExists), asyncErrorBoundary(read)],
  readTheatersByMovie: [
    asyncErrorBoundary(movieExists),
    asyncErrorBoundary(readTheatersByMovie),
  ],
  readReviewsByMovie: [
    asyncErrorBoundary(movieExists),
    asyncErrorBoundary(readReviewsByMovie),
  ],
};
**WeLoveMovies**
_________________________________________________

A comprehesive API for browsing movies, theaters and reviews. Follows RESTful API design principles.


**Tech Stack:**
_________________________________________________
- Node.js: server environment for backend.
- Express: library for API development.
- Knex: manages API queries and connections.
- PostgreSQL: SQL database.
- ElephantSQL: host of PostgreSQL instance.

API Calls
__________________________________________________

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/movies` | Returns all of the movies that exist in the database currently. |
| `GET` | `/movies:movieId` | Returns a single movie by ID. |
| `DELETE` | `/reviews/:reviewId` | Will delete a review by ID. If the ID is incorrect, a 404 error will return. |
| `PUT` | `/reviews/:reviewId` | Allows you to partially or fully update a review. If the ID is incorrect, a 404 error will return. |
| `GET` | `/theaters` | Returns a list of all theaters. |

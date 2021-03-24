## NODE CLEAN ARCHITECTURE - MOVIE API
Bob Martin's Clean architecture my (learning) implementation
Combined with https://omdbapi.com

----------

### Getting started
- Clone this repo and and go to movie-api directory
- `npm install`
- Fill the .env from .env.template (especially db)
- create Database local and run `node ./src/infrastructure/db/init`
- `npm start`
- `npm test`

----------

### Available endpoint:

#### Search


    http://localhost:3000/search

Query

| **required** 	|       **params**      |  **notess**   |
|---------------|--------------------|----------------------|
| Yes      	    | keyword         	 |          -         	|
| Optional      | page         	 |          -         	|

``` http://localhost:3000/search?keyword=tenet&page=1 ```

#### Detail

    http://localhost:3000/detail

Query

| **required** 	|       **params**      |  **notes**   |
|---------------|--------------------|----------------------|
| Yes      	    | id         	 |          imdbID         	|


``` http://localhost:3000/detail?id=tt6723592 ```

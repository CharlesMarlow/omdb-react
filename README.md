# OMDB-React

This project, written in node.js and React, fetches data from the Open Movie Data Base, stores it 
in a MongoDB collection and displays it as a web app, allowing the end-user to search the list of 
movies according to the movie's title, director and plot. 

## Installation

1. Clone this project with: 

```bash
https://github.com/CharlesMarlow/omdb-react.git
```

2. In order to run the server, when on root directory: 
 - cd server
 - run ```bash
  node index.js
 ```
 
3. In order to run the client, when on root directory:
  - cd client
  - run ```bash 
    npm start
  ```

4. In order to run the tests, when on root directory: 
  - cd server
  - run ```bash 
    npm test
  ```
  
5. Alterintavely, when on root directory, one can run both instances with: 

```bash
  ./init.sh
```

## Architecture & Approaches
1. Server

A decision was made to use MongoDB, as it allowed for a quick set up and monitoring while developing
(through Mongo Atlas), as well as providing some functionality as it came to researching the endpoint that
takes care of searching the list. This is a part I had wanted to perform server-side and not leave to the client,
as it shouldn't be aware of such info, nor hold a copy of the entire movie list and perform actions on it client-side.
This might be manageable as we're only fetching a specific number of movies, but as an approach it's not healthy,
as the client should remain only as smart as it has to be and avoid from handling operations that are best kept server-side.

In general, node.js has the advantage of handling I/O operations, as asynchronoous work is at its core and the single-thread 
architecture was designed exactly for such purposes like handling the manipulation of data within the back-end cycle, 
and delivering that back to the client, with as little work left for the client. 

2. Client

The above-mentioned also provides the reason for not handling the client with a state-management library. For this case, 
and as the vast majority of the functionality was kept in the back-end, I opted out from Redux and other similar solutions
to not be tempted into working in the client on something that can well reside in the server. 

Through initial research I drew up a number of components, one for displaying the list, another to display the movie itself 
as a standalone, the search input and ite accompanying submit button, the header compoennt for general orientation and so on. 
Due to this, I decided to bring in the Material-ui design library, to keep the CSS scoped for each component, yet still work 
with the same UI components the library provides, and mainly the same rules and styling attributes, so that the client will have 
a solidified and readable language. 
I find this to be crucial in the smallest of projects, due to bad experience in the past, when working on projects where each 
and every component turned into a mess that was hard to work with and add on to. 


## License
[MIT](https://choosealicense.com/licenses/mit/)

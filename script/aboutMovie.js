const movieId  = +new URLSearchParams(window.location.search).get("movieId")


const options = {
    method: "GET",
    headers: {
        accept: 'application/json',
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDM3MmUzZGNkNDhiOGI4OTdhYmJhMGU1YWJlNWFhZiIsInN1YiI6IjY1MDFlZTgzNTU0NWNhMDBmZWE3NmM3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qX2w4UqJL_l--HWaBDOAThofn8EWU92npTMbZv9tH1U"
    }
};
fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options)
.then(res => res.json())
.then(data => console.log(data))
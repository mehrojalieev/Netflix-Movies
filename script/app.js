const swapperWrapper = document.querySelector(".swiper-wrapper")
const options = {
    method: "GET",
    headers: {
        accept: 'application/json',
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDM3MmUzZGNkNDhiOGI4OTdhYmJhMGU1YWJlNWFhZiIsInN1YiI6IjY1MDFlZTgzNTU0NWNhMDBmZWE3NmM3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qX2w4UqJL_l--HWaBDOAThofn8EWU92npTMbZv9tH1U"
    }
};

const mainSwaper = document.querySelector(".swiper-wrapper")
fetch(`https://api.themoviedb.org/3/movie/top_rated?&with_networks=213`, options)
    .then(response => response.json())
    .then(data => render(data))

function render(data) {

    data.results.forEach(swiper => {
        const div = document.createElement("div")
        const img = document.createElement("img")
        div.className = "swiper-slide";
        div.style = "width: 1400px; height: 500px"
        img.src = "https://image.tmdb.org/t/p/original/" + swiper.backdrop_path
        div.appendChild(img)
        mainSwaper.appendChild(div)
    })
}
const mainSwaperOne = document.querySelector("#swiper-wrapperOne")
fetch("https://api.themoviedb.org/3/discover/tv", options)
    .then(response => response.json())
    .then(data => rowsrender(data))
function rowsrender(data) {
    data.results.forEach(rows => {
        let DivEl = document.createElement("div")
        let Imgel = document.createElement("img")
        Imgel.className = "aboutMovie"
        Imgel.style = "width: 250px; height: 180px"
        DivEl.className = "swiper-slide";
        Imgel.src = "https://image.tmdb.org/t/p/original/" + rows.backdrop_path
        DivEl.appendChild(Imgel)
        mainSwaperOne.appendChild(DivEl)
    })
}

const mainSwaperTwo = document.querySelector("#swiper-wrapperTwo")
fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=28", options)
    .then(response => response.json())
    .then(data => rowsrenderTwo(data))

function rowsrenderTwo(data) {
    data.results.forEach(rows => {
        let DivEl = document.createElement("div")
        let Imgel = document.createElement("img")
        Imgel.style = "width: 250px; height: 180px"
        DivEl.className = "swiper-slide";
        Imgel.src = "https://image.tmdb.org/t/p/original/" + rows.backdrop_path
        DivEl.appendChild(Imgel)
        mainSwaperTwo.appendChild(DivEl)
    })
}

const mainSwaperThree = document.querySelector("#swiper-wrapperThree")
fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=12", options)
    .then(response => response.json())
    .then(data => rowsrenderThree(data))

function rowsrenderThree(data) {
    data.results.forEach(rows => {
        let DivEl = document.createElement("div")
        let Imgel = document.createElement("img")
        Imgel.style = "width: 250px; height: 180px"
        DivEl.className = "swiper-slide";
        Imgel.src = "https://image.tmdb.org/t/p/original/" + rows.backdrop_path
        DivEl.appendChild(Imgel)
        mainSwaperThree.appendChild(DivEl)
    })
}

const mainSwaperFour = document.querySelector("#swiper-wrapperFour")
fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=878", options)
    .then(response => response.json())
    .then(data => rowsrenderFour(data))

function rowsrenderFour(data) {
    data.results.forEach(rows => {
        let DivEl = document.createElement("div")
        let Imgel = document.createElement("img")
        Imgel.style = "width: 250px; height: 180px"
        DivEl.className = "swiper-slide";
        Imgel.src = "https://image.tmdb.org/t/p/original/" + rows.backdrop_path
        DivEl.appendChild(Imgel)
        mainSwaperFour.appendChild(DivEl)
    })
}

const mainSwaperFive = document.querySelector("#swiper-wrapperFive")
fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=16", options)
    .then(response => response.json())
    .then(data => rowsrenderFive(data))
function rowsrenderFive(data) {
    data.results.forEach(rows => {
        let DivEl = document.createElement("div")
        let Imgel = document.createElement("img")
        Imgel.style = "width: 250px; height: 180px"
        DivEl.className = "swiper-slide";
        Imgel.src = "https://image.tmdb.org/t/p/original/" + rows.backdrop_path
        DivEl.appendChild(Imgel)
        mainSwaperFive.appendChild(DivEl)
    })
}



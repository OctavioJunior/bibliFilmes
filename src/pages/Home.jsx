import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"

import "./MoviesGrid.css"

const movieURL = import.meta.env.VITE_API
const apiKEY = import.meta.env.VITE_API_KEY

const Home = () => {
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)
    }

    useEffect(() => {
        const topRatedURL = `${movieURL}top_rated?${apiKEY}`

        getTopRatedMovies(topRatedURL)

    }, [])



    return (
    <div className="container">
        <h2 className="title">
            Melhores Filmes:
        </h2>
        <div className="moviesContainer">
            {topMovies.length === 0 && <p>Carregando...</p>}
            {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id}  movie={movie} />)}
        </div>
    </div>
    )
}

export default Home
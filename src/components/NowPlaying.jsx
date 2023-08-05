import { useEffect, useState } from "react"
import { getNowPlayingMovies } from "../api"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "swiper/css"
import 'swiper/css/autoplay'

export default function NowPlaying(){
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getMovies(){
            try {
                const data = await getNowPlayingMovies()
                setNowPlayingMovies(data)
                setIsLoading(false)

            } catch (err){
                console.error(err)
                setIsLoading(false)
            }
        }
        getMovies()
    }, [])

    const swiperSlides = nowPlayingMovies.map(movie => {
        return (
            <SwiperSlide key={movie.id}>
                <Link to={`/details/${movie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}` || "src/assets/no-image.jpg"} alt={movie.title} />
                </Link>
                <h4 className="swiper-rating">
                <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#f1c40f"}} /> {movie.vote_average} / 10
                </h4>
            </SwiperSlide>           
        )
    })

    if (isLoading) {
        return (
            <section className="now-playing">
                <h2>Now Playing</h2>
                <div className="swiper">
                    <div className="swiper-wrapper">
                    {/* <div class="swiper-slide">
                    <a href="movie-details.html?id=1">
                        <img src="./images/no-image.jpg" alt="Movie Title" />
                    </a>
                    <h4 class="swiper-rating">
                        <i class="fas fa-star text-secondary"></i> 8 / 10
                    </h4>
                    </div> */}
                    </div>
                </div>
            </section>
        )
    }

    return (        
        <section className="now-playing">
            <h2>Now Playing</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                loop={true}
                autoplay={{delay: 4000, disableOnInteraction: false}}
                breakpoints={{
                    500: {slidesPerView: 2},
                    700: {slidesPerView: 3},
                    1200: {slidesPerView: 4}}}
                direction="horizontal"
                pagination={{
                    clickable: true,
                  }}
                navigation={true}
                modules={[Autoplay, Navigation, Pagination]}
            >
                {swiperSlides}
            
            </Swiper>
        </section>
    )
}
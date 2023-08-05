import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function Error(){
    return (
        <>
        <Header></Header>
        <section className="container">
            <main>
                <h1>Sorry there was an error, click this button to get back to main page:</h1>
                <br></br>
                <Link to={"/"}><button className="btn">Get back to main page</button></Link>
                <br></br>
                <br></br>
                <section className="now-playing">
                <h2>Now Playing</h2>
                    <div className="swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src="src/assets/no-image.jpg" alt="Movie Title" />
                                <h4 className="swiper-rating">
                                    <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#f1c40f"}} /> 0 / 10
                                </h4>
                            </div> 
                        </div>
                    </div>
                </section>
            </main>
        </section>
        <Footer></Footer>
        </>
    )
}
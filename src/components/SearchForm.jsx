import { useState } from "react"
import {Form} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function SearchForm(){
    const [searchTerm, setSearchTerm] = useState("")
    const [radio, setRadio] = useState("")
    


    return (
        <>
        <section className="search">
            <div className="container">
            <div id="alert" />
            <Form className="search-form" action="/search" >
                {/* movies and shows radio box */}
                <div className="search-radio">
                <input
                    type="radio"
                    id="movie"
                    name="type"
                    defaultValue="movie"
                    onChange={(e) => setRadio(e.target.value)}
                />
                <label htmlFor="movies">Movies</label>
                <input 
                    type="radio" 
                    id="tv" 
                    name="type" 
                    defaultValue="tv" 
                    onChange={(e) => setRadio(e.target.value)}
                />
                <label htmlFor="shows">TV Shows</label>
                </div>
                <div className="search-flex">
                <input
                    type="text"
                    name="search-term"
                    id="search-term"
                    placeholder="Enter search term"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn" type="submit" disabled={!searchTerm.trim() || !radio}>
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="xl" />
                </button>
                </div>
            </Form>
            </div>
        </section>
        </>
    )
}
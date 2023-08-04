import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer(){
    return (
        <footer className="main-footer">
            <div className="container">
            <div className="logo">
                <span>FLIXX</span>
            </div>
            <div className="social-links" >
               <a href="https://www.linkedin.com/in/gabriel-armando-ferrales-ruedaflores-362649236/">
                <FontAwesomeIcon icon="fa-brands fa-linkedin"/>
               </a>
               <a href="https://github.com/Gabriel-Ferrales">
                <FontAwesomeIcon icon="fa-brands fa-github"/>
               </a>
            </div>
            </div>
        </footer>
    )
}
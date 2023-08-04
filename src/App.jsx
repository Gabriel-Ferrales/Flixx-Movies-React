import './App.css'
import "./style.css"
import Layout from "./components/Layout"
import Home, {loader as popularMoviesLoader}  from "./pages/Home"
import Details, {loader as detailsLoader} from "./pages/Details"
import Search, {loader as searchLoader} from "./pages/Search"
import Shows, {loader as showsLoader} from "./pages/Shows"
import ShowDetails, {loader as showDetailsLoader} from "./pages/ShowDetails"

// Fontawesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
// adding to library icons globally
library.add(faTwitter, faFacebook, faGithub, faLinkedin, faMagnifyingGlass)

import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Link
} from "react-router-dom"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route index element={<Home />} loader={popularMoviesLoader} />
      <Route path="details/:id" element={<Details />}  loader={detailsLoader}/>
      <Route path="/search" element={<Search />} loader={searchLoader} />
      <Route path="shows" element={<Shows />} loader={showsLoader} />
      <Route path="shows/:id" element={<ShowDetails/>} loader={showDetailsLoader} />
    </Route>
  ))

export default function App(){
    return (
        <RouterProvider router={router}/>
    )
}


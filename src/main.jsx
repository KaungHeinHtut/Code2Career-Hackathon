import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { Layout } from './Layout.jsx';
import Home from './Main-Content/Home.jsx';
import TVShows from './Main-Content/TVSeries.jsx';
import Movies from './Main-Content/Movies.jsx';
import Search from './Main-Content/search.jsx';
import DetailedMovieInfo from './Main-Content/DetailedMovieInfo.jsx';
import Favorites from './Main-Content/Favorites.jsx';
import { FavoritesProvider } from './useContext/FavoritesContext.jsx';
import { MovieProvider } from './useContext/MovieContext.jsx';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: 
      [
        {
          index: true,
          element: <App/>,
        },
        {
          path: '/home',
          element: <Home/>,
        },
        {
          path: '/TVShows',
          element: <TVShows/>,
        },
        {
          path: '/Movies',
          element: <Movies/>,
        },
        {
          path: '/search',
          element: <Search/>,
        },
        {
          path: '/info',
          element: <DetailedMovieInfo/>,
        },
        {
          path: '/favourite',
          element: <Favorites/>
        }
      ]
    },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <FavoritesProvider>
        <MovieProvider>
          <RouterProvider router={router}/>
        </MovieProvider> 
      </FavoritesProvider>
  </StrictMode>,
)

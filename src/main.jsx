import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Greeting, Person } from './Greeting.jsx';
import { FavouriteFood, SecondFavourite } from './FavouriteFood.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Person />
  </StrictMode>,
)

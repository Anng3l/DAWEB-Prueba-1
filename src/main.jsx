import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from "./components/navbar/Navigationbar.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navigationbar></Navigationbar>
  </StrictMode>
)

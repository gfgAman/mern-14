import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './WE-13/App'
// import './index.css'
// import { App1, App2, App3 } from './WE-13/App'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App1 />
    <App2 />
    <App3 /> */}
    <App/>
  </StrictMode>,
)

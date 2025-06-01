import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './WE-14/App'
// import Usememo from './WE-15/usememo/Usememo'
// import UseRef from './WE-15/useref/UseRef'
// import './index.css'
// import { App1, App2, App3 } from './WE-13/App'
import App from './WE-15/Routing/App'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App1 />
    <App2 />
    <App3 /> */}
    {/* <App/> */}
    {/* <App /> */}
    {/* <Usememo /> */}
    {/* <UseRef/> */}
    <App />
  </StrictMode>,
)

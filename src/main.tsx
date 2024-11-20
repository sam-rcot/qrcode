import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Clarity from "@microsoft/clarity";
import './index.scss'
import App from './App.tsx'

const projectId = "p1i02u0ezu"

Clarity.init(projectId);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

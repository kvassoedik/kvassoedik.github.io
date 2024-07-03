import ReactDOM from 'react-dom/client'
import './styles/main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './pages/Navigation.tsx'
import MainPage from './pages/MainPage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import PortfolioPage from './pages/PortfolioPage.tsx'
import ComicsPage from './pages/ComicsPage.tsx'

export default function Main() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Navigation />}>
    <Route index element={<MainPage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="portfolio" element={<PortfolioPage />} />
    <Route path="comics" element={<ComicsPage />} />
    </Route>
  </Routes>
 </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<Main />);
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Sobre from '../pages/sobre/Sobre'
import Portfolio from '../pages/portfolio/portfolio'
import Comentarios from '../pages/comentarios/Comentarios'
import Menu from '../components/menu/Menu'


// como criamos as rotas 
function ApplicationRoutes() {
    return(
        <BrowserRouter>
            <Menu/>
            <Routes>                
                <Route path="/" element={<Sobre/>}/>
                <Route path="portfolio" element={<Portfolio/>}/>
                <Route path="comentarios" element={<Comentarios/>}/>
            </Routes>            
        </BrowserRouter>

    )
}

export default ApplicationRoutes
import {index, route} from "@react-router/dev/routes"

export default [
    index('./routes/home.jsx'),
    route('detalles/:id', './routes/detalles.$id.jsx'),
    route('tendencias', './routes/tendencias.jsx'),
    route('contacto', './routes/contacto.jsx')
] 

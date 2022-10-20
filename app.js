//Importamos todo 
import express from 'express';
import cors from 'cors';
import db from "./database/db.js";
import blogRoutes from  './routes/routes.js'


const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)


try {
    await db.authenticate()
    console.log('Conexion exitosa')
} catch (error) {
    console.log(`El error de la base de datos es: ${error}`)
}

app.get('/',(req,res)=>{
    res.send('Hola Mundo')
})

app.listen(8000,()=>{
    console.log('Server levantado en http://localhost:8000/')
})
//importamos conexion a la base 
import db from "../database/db.js";

//Importamos sequelize
import { DataTypes } from "sequelize";

const BlogModel=  db.define('blogs',{
    title:{type:DataTypes.STRING},
    content:{type:DataTypes.STRING},
})


export default BlogModel
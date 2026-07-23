# Mongoose
• Moongose es una biblioteca de modelado de datos orientada a Objetos para MongoDB y node.js.
Actuando como una capa de abstraccion que permite definir esquemas con tipos de datos fuertemente tipificados, facilitando la validacion de datos y la estanderizacion de la estructura de las colecciones en una base de datos no relacional como MongoDb

• Un esquema define la estructura que deben tener los documentos de una coleccion de Mongodb:
- que campos existen
- que tipo de datos tienen
- cuales son obligatorios
- valores por defecto
- validaciones

• Si agregamos un campo que no esta definido en el esquema, mongooshe lo elimina antes de guardar

# Iniciar Mongoose
npm install mongoose

const mongoose = require('mongoose)

main().catch(err => console.log(err));

//nos conectamos a la base de datos
async function main(){
    await moongose.connect('mongodb://ruta/nombredelabasededatos');
}
# Creamos un esquema

import mongoose from 'mongoose'
const {Schema} = mongoose;

const userSchema = new Schema({
    name : {
        String,
        required : true,
    }
    year : {
        Number,
        default : 0
    }
    date:{
        type: Date,
        default : Date.now
    }
})

# Creamos un modelo
para utilizar nuestra definicion de esquema, necesitamos convertir nuestro userSchema a 'mongoose.model(modelName, schema)'

const User = mongoose.model('User', userSchema);

# Metodos de instancia
//dog es una instancia del modelo Animal, es decir, un documento individual

const dog = new Animal({type : 'dog'});

# Metodo de instancia
// es una funcion que pertenece a cada documento creado con el modelo

const animalSchema = new Schema(
  {
    name: String,
    type: String
  },
  {
    methods: {
      hacerRuido() {
        console.log(`${this.name} dice meow`);
      }
    }
  }
);
cada documento Animal tendrá un metodo llamado hacerRuido();

luego para usarlo es
dog.hacerRuido();

cb= callback, solo se usa cuando el metodo realiza una consulta a la base de datos

• Guardar datos en la DB
await dog.save();

• Podemos acceder a todos los documentos de Animal a traves de nuestro modelo Animal

const animales = await Animal.find()
console.log(animales);

• Podemos filtrar nuestros animales por nombre
await Animales.find({name:/^dog/});

await Animal.create({
    name : "kitty",
    type: "dog"
})
internamente create() hace:
const dog = new Animal(...);
await dog.save();

# Metodos de Modelo
Animal.find();
Animal.create();
Animal.findById();

# Estructura del proyecto

src/
│
├── config/
│   └── database.js
│
├── models/
│   ├── User.js
│   ├── Product.js
│   └── Order.js
│
├── controllers/
│   ├── userController.js
│   ├── productController.js
│   └── orderController.js
│
├── routes/
│   ├── userRoutes.js
│   ├── productRoutes.js
│   └── orderRoutes.js
│
├── services/
│   ├── userService.js
│   ├── productService.js
│   └── orderService.js
│
├── app.js
└── server.js


# Services
• services contiene la logica de negocio y las consultas a la base de datos

import User from "../models/User.js";

export async function getAllUsers() {
  return User.find();
}

# Controllers
• controllers reciben la peticion http y devuelven la respuesta

import { getAllUsers } from "../services/userService.js";

export async function getUsers(req, res) {
  const users = await getAllUsers();
  res.json(users);
}

# Routes
• Routes conectan las urls con los controladores
import { Router } from "express";
import { getUsers } from "../controllers/userController.js";

const router = Router();

router.get("/", getUsers);

export default router;

# App
• Configuracion Express

import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

export default app;

# Server
• Levantar el servidor(api) y hacemos la conexion con MongoDB

import mongoose from "mongoose";
import app from "./app.js";

await mongoose.connect(process.env.MONGO_URI);

app.listen(3000);
import express from 'express'
import path from 'path';
import handlebars from 'express-handlebars'

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express();
const PORT = 8080;


//midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.use(express.static(path.join(__dirname, '/views')))

// Configuracion para handlebars
app.engine("handlebars", handlebars.engine())
app.set("views", __dirname + '/views')
app.set("view engine", "handlebars")


//endpoint
app.get("/", (req,res) => {
    let user = {
        nombre: "coder",
        apellido: "House"
    }
    res.render('index', user)
})

app.listen(PORT, () => console.log(`server rinig on port ${PORT}`))



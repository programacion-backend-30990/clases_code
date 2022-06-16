import express from "express"
import { getTime } from "./lib/utils"
import Persona from "./Persona"

const p:Persona = new Persona("Dante", "Terranova")

const app = express()

app.get("/", (req, res) => {
    const admin = req.headers.admin
    console.log(admin)

    res.send({
        time: getTime(),
        name: p.getFullName()
    })
})

app.listen(8080, () => {
    console.log('listening 8080 ...')
})

// npx tsc --init
/*

curl --location --request GET '127.0.0.1:8080' \
--header 'admin: true'

*/

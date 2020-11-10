
const express = require('express')
const app = express()
const port = 3000

const sequelize = require('./models/index')
const Partner = require('./models/Partner')

async function boostrap() {

    await sequelize.authenticate();

    await Partner.sync()

    // сюда можно дописать методы
    // можете менять структуру проекта по своему усмотрению

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
}

boostrap()



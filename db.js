//Consultas desafio9

use ecommerce

const mensajes = [
    {
        email: "sdfds@mail.com",
        text: "Hola",
        time: "22/04/22 16:50:03"
    },
    {
        email: "juan@mail.com",
        text: "Buenos días",
        time: "22/04/22 16:51:03"
    },
    {
        email: "p.garcia@mail.com",
        text: "Buenas",
        time: "22/04/22 16:50:10"
    },
    {
        email: "g.antonio@mail.com",
        text: "hola",
        time: "22/04/22 16:53:03"
    },
    {
        email: "t.service@mail.com",
        text: "hello",
        time: "22/04/22 16:55:33"
    },
    {
        email: "gmail@mail.com",
        text: "hi",
        time: "22/04/22 16:58:03"
    },
    {
        email: "support@mail.com",
        text: "buenos días",
        time: "22/04/22 16:58:10"
    },
    {
        email: "tienda@mail.com",
        text: "buenas",
        time: "22/04/22 16:58:45"
    },
    {
        email: "pedro@mail.com",
        text: "qué tal?",
        time: "22/04/22 16:59:03"
    },
    {
        email: "uhu@mail.com",
        text: "Hola, qué tal?",
        time: "22/04/22 17:00:03"
    }
]

const productos = [
    {
        title: "Thor",
        price: 100,
        url: "/static/thor.png"
    },
    {
        title: "Spider-Man",
        price: 900,
        url: "/static/Spider-Man.png"
    },
    {
        title: "Hulk",
        price: 1550,
        url: "/static/Hulk.png"
    },
    {
        title: "Dr.Strange",
        price: 670,
        url: "/static/Strange.png"
    },
    {
        title: "Loki",
        price: 4578,
        url: "/static/Loki.png"
    },
    {
        title: "AntMan",
        price: 5000,
        url: "/static/AntMan.png"
    },
    {
        title: "CaptainAmareica",
        price: 158,
        url: "/static/CaptainAmareica.png"
    },
    {
        title: "Thanos",
        price: 4999,
        url: "/static/Thanos.png"
    },
    {
        title: "Odin",
        price: 2854,
        url: "/static/Odin.png"
    },
    {
        title: "StarLord",
        price: 1653,
        url: "/static/StarLord.png"
    }
]

db.mensajes.insertMany(mensajes)

db.productos.insertMany(productos)

db.mensajes.find()

db.productos.find()

db.mensajes.estimatedDocumentCount()

db.productos.estimatedDocumentCount()

db.productos.insertOne({ title: "BlackWidow", price: 5000, url: "/stats/blackWidow.png" })

db.productos.find({ price: { $lt: 1000 } })

db.productos.find({ $and: [{ price: { $gt: 1000 } }, { price: { $lt: 3000 } }] })

db.productos.find({ price: { $gt: 3000 } })

db.productos.find({}, { title: 1, _id: 0 }).sort({ price: 1 }).skip(2).limit(1)

db.productos.updateMany({}, { $set: { stock: 100 } })

db.productos.updateMany({ price: { $gt: 4000 } }, { $set: { stock: 0 } })

db.productos.deleteMany({ price: { $lt: 1000 } })

use admin

db.createUser({ user: "pepe", pwd: "asd456", roles: [{ role: "read", db: "ecommerce" }] })


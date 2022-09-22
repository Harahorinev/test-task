const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const bodyParser = require('body-parser');
const fs = require("fs")
const userdb = JSON.parse(fs.readFileSync("db.json", "utf-8"))

server.use(middlewares)
server.use(bodyParser.json())

function isAuthenticated({login, password}) {
    return (
        userdb.users.findIndex(
            (user) => user.login === login && user.password === password
        ) !== -1
    )
}

server.post("/api/auth/login", (request, response) => {
    const {login, password} = request.body
    if (!isAuthenticated({login, password})) {
        const status = 401
        const message = 'Incorrect login or password'
        response.status(status, message).json({status, message})
        return;
    }
    response.status(200).json()
})

server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running---------')
})

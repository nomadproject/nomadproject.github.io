const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const port = process.env.PORT || 3000
//const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev: false })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    createServer((req, res) => {
        handle(req, res)
    }).listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})
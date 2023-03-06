import http from "http";
const server = http.createServer(function (req, res) {
    const name = 'Thanh dep ';
    if (req.url == '/') {
        res.setHeader("Content-Type", "text/html")
        res.end(`
            <form action="/about" method="POST">
                <input type="text"  name="name"/>
                <button>Submit</button>
            </form>
        `)
    }
    if (req.url == '/about') {
        // const name = req.name.value
        res.end(`<h1>Hello ${name}</h1>`)
    }
});
server.listen(8080, function () {
    console.log('upload thanh cong')
})
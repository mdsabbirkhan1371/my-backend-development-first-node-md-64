const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')
app.use(cors())
app.use(express.json())

const users = [
    { id: 1, name: 'sabbirkhan', email: 'sabbir@gmail.com' },
    { id: 2, name: 'sagor', email: 'sagor@gmail.com' },
    { id: 3, name: 'salman', email: 'salman@gmail.com' },
    { id: 4, name: 'sinan', email: 'sinan@gmail.com' },
    { id: 5, name: 'sudep', email: 'sudep@gmail.com' },
    { id: 6, name: 'sonjoy', email: 'sonjoy@gmail.com' },
    { id: 7, name: 'sandep', email: 'sandep@gmail.com' },
]
app.get('/', (req, res) => {
    res.send("Hello World  Khan I am back wait please")
})

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(matched)
    }
    else {
        res.send(users)
    }


})
app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id)
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send([
        'mango', 'apple', 'jackfruits', 'orange', 'banana'
    ])
})
app.post('/user', (req, res) => {
    console.log("request", req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})
app.listen(port, () => {
    console.log("Listen To Port", port)
})
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.get('/', async (req, res) => {
    res.json({ msg: 'hello world' }).end()
  })

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`server.js listening on ${port}`)
})
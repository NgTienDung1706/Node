const express = require('express')
const app = express()
const port = 3000

app.get('/admin', (req, res) => {
    var a = 1
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
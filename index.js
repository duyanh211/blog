const express = require("express")
const app = express()
const port = 3000 

app.get('/mylife', (req, res) => {
    res.send('hellf go')
})

app.listen(port, ()=> {
    console.log("listennig on port 3000")
})
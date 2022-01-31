const express = require('express')

const app = express()

app.listen(9000, () => {
    console.log("server running", 'http:localhost:' + 9000)
})
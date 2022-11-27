const express = require('express');
var cors = require('cors');
const app = express()
app.use(cors());

const port = 8080

const jobs = {
    data: [{jobId: 1}, {jobId: 2}]
}

app.get('/jobs', (req, res) => {
    res.send(jobs);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port} and latest 123 version`)
})
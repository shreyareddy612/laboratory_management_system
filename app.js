const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello Charles!");
});

app.get('/api/user/:id', (req, res)=>{
    let id = req.params.id;
    res.send(
        `<html>
            <body>
                <h5>User id ${id}</h5>
            </body>
        </html>
        `
    );
})

const port = process.env.PORT || 3000;
app.listen(port);

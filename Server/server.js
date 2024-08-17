const express = require('express');

const app = express();

app.use(express.json());

port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('server Connected in port 5000');
});
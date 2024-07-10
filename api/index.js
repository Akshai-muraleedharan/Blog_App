const express = require('express');
const app = express();
const dotenv =require('dotenv');

dotenv.config()

const port = process.env.PORT || 4001

app.listen(port,()=> console.log(`server is connected on port: ${port}`))





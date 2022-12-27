const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.use(


    
)


app.get('/', (req,res)=>{
    res.send('Server is nunnign')
})

app.listen(port, ()=>{
    console.log(`Server is runnig port on ${port}`);
})


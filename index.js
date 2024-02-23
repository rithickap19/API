import express from 'express'
const app=express()
const port=3000

app.get('/api',(req,res)=>{
    try {
        res.send("Hello World")
    } catch (error) {
        res.send("Error")
    }
})
app.get('/',(req,res)=>{
    try {
        res.send("Hi World")
    } catch (error) {
        res.send("Error")
    }
})
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})

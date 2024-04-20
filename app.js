const express=require("express")
const app=express()
const PORT=3500

const userRoute=require('./routes/userRoute')

/*"set the view engine to EJS". it means that Express will look for files with the 
.ejs extension in your views directory when you render views using response.render().*/
app.set('view engine','ejs')

app.get('/',(request,response)=>{
    response.status(200).send({message: "server running"})
})

//It allows you to access the data/request sent by the client in JSON format.
app.use(express.json())

//when a POST request is made ,express.urlencoded() middleware parses the url and makes it available in request.body 
app.use(express.urlencoded({extended:true}))

app.use('/api/v1/users',userRoute)

app.listen(PORT,console.log(`server running at http://localhost:${PORT}`))


const dataEntryLogger=(request,response,next)=>{
    console.log("New data entered by the user")
    console.log(request.method)
    console.log(Date.now())
    console.log(request.originalUrl)
    next()
}

module.exports=dataEntryLogger


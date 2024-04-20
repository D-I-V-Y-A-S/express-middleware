var userData=require('../data/initialData')
const fs=require('fs')

const getAllUserData=(request,response)=>{
    response.status(200).send({userData})
}

// const getUserById=(request,response)=>{
//     const userId=request.params.id
//     //no pareseint as id is string and id received from request also string.
//     let expectedUserData;
//     userData.map((user)=>{
//         if(user.id === userId)
//         {
//             expectedUserData=user
//         }
//     })
//     if(expectedUserData)
//     {
//         return response.status(200).send(expectedUserData)
//     }
//     else{
//         return response.status(404).send(`${userId} is invalid`)
//     }
//     // response.status(200).send({message:`user data of id  ${userId}`})
// }

const getUserById=(request,response)=>{
    console.log(request.user)
//  response.status(200).send(request.user)
 let expectedUserData
 if (request.user)
 {
     expectedUserData = request.user
 }
}

const displayUserForm=(request,response)=>{
    response.status(200).render('userForm')
}
fs.readFile('./data/initialData.js', 'utf8', (error, data) => {
    if (error) {
        console.log(error);
        return;
    }})
const addUserData =(request,response)=>{   
    const formData=request.body;
    console.log(formData)
    fs.appendFile('./data/initialData.js',JSON.stringify(userData.push(formData)),(error)=>{
        if(error){
        console.log(error)
    }
})

response.status(200).redirect('/api/v1/users')
}

module.exports={getAllUserData,getUserById,displayUserForm,addUserData}
//Import Dependencies- CSJ
const express= require ("express")
const app= express()
const { faker } = require('@faker-js/faker');

//Configure Express
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//createUser
const createUser =()=> {
    const newUser= {
        _id:faker.datatype.uuid(),
        password:faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),

    }
    return newUser
}




//createCompnay
const createCompany=()=>{
    const newCompany = {
        _id:faker.datatype.uuid(),
        name:faker.company.name(),
        email: faker.internet.email(),
        address:{
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state (),
            zipCode: faker.location.zipCode (),
            country: faker.location.country (),
        }
    }
    return newCompany
}


const newFakeUser=createUser();
console.log(newFakeUser)

const newFakeCompany=createCompany();
console.log(newFakeCompany)





//-----------Routes

//Return a new user
app.get ("/api/users/new", (req, res)=>{
    res.json(newFakeUser)
})

//Return a new company
app.get ("/api/companies/new", (req,res)=>{
    res.json(newFakeCompany)
})



//Return a new user and a new company
app.get ("/api/user/company", (req,res)=>{

    res.json ({newFakeUser,newFakeCompany})
})



//Listen to port

app.listen(8000, ()=> console.log(`Listening to port:8000`))
const express= require('express');
const app = express();
const {countries}= require('countries-list');


app.get('/',(request,response)=>{
    response.status(200).send("si ingresa");
});

app.get('/country',(request,response)=>{
    response.json(countries.AD);
});

app.get('*',(request,response)=>{
    response.status(404).send("not found");
});


app.listen(4000,()=>{
    console.log('runing port 4000');
})

const express = require('express');
//const config = require('config');
//const mongoose = require('mongoose');

const app = express();

//app.use('/api/auth', require ('./routers/auth.routers'))

const  PORT = 3000;

/*async function start(){
    try {
        await  mongoose.connect("mongodb+srv://veresricsi116:<password>@cluster0.nni1i7y.mongodb.net/?retryWrites=true&w=majority"), {
            useNewUrlParser:true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
        app.listen(PORT, () => console.log(`Elindult a(z) ${PORT} on .....`))
    }catch (e){
        console.log('ServerHiba', e.message)
        process.exit(1)
    }
}

start()
*/
let i = 0
app.post("/post", (req, res) => {
    i++;
    console.log("Belépés megtagadva "+ i);
    res.redirect("/");

});

app.get("/createAccount", (req, res) => {


});


//../../post
app.listen(PORT, () => console.log(`Elindult a(z) ${PORT} on .....`))// ezt majd ki kell venni!





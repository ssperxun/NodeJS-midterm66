let express = require('express')

const app = express()

app.get('/status', function (req,res){
    res.send('Hello nodejs server erer ')
})

app.get('/hello/:name', function(req,res){
    console.log('hello - ' + req.params.name)
    res.send('say hello with ' + req.params.name)
})
//get user by id
app.get('/user/:userId', function (req,res){
    res.send('ดูข้อมูลผู้ใช้งาน')

})
app.get('/que2/:number',function (req,res){
    let number = req.params.number
    let fact    = 1
    for (let i=1; i <= number; i++){
        fact *= i;
    }
    res.send('number: ' + number +' ! = ' + fact)
})

let port = 8081
app.listen(port, function(){
    console.log('server runing on ' + port)
})  
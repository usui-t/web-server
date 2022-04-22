const express = require('express')
const path = require("path")
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

app.post('/api/v1/quiz', function (req, res) {
    const answer = req.body.answer;
    if( answer === "2" ){
        //res.send("<h1>正解</h1>")
        res.redirect("/correct.html")
    } else {
        res.redirect("/wrong.html")
        //res.send("<h1>フ正解</h1>")
    }
//    res.send(answer)
})

app.get('/', function (req, res) {
    res.send('')
})

app.get('/about', function (req, res) {
    res.send('Aboutページ')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, function(){
    console.log("I am running!")
});

console.log("最終行");
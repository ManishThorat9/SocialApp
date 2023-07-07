console.log(Math.PI)
const express = require('express')
const format = require('date-format')

const app = express()

const PORT = 4000  || process.env.PORT
app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
  res.status(200).sendFile(__dirname + "/index.html");
})


app.get("/api/v1/instagram/", (req, res) =>{
    const instaSocial ={
      username: "Manishthorat9",
      followers: 151,
      follows:350,
      date:format.asString("[dd][MM][yyyy] hh:mm:ss",new Date())
    }
    // res.send({token:req.params.token});
    res.status(200).json({instaSocial})
});

app.get("/api/v1/Facebook",(req, res )=>{
    const faceSocial ={
      username: "Manishthorat9",
      followers: 59,
      follows:39,
      date:format.asString("[dd][MM][yyyy] hh:mm:ss",new Date())
    }
    res.status(200).json(faceSocial)
});

app.get("/api/v1/Linkedin",(req, res )=>{
    const linkSocial ={
      username: "Manishthorat9",
      followers: 39,
      follows:69,
      date:format.asString("[dd][MM][yyyy] hh:mm:ss",new Date())
    }
    console.dir(req.params.name)
    //console.dir(req.protocol) returns the protocol used
    res.status(200).json(linkSocial)
});

// after the v1/: anything in url at token position is console.log
app.get("/api/v1/:token", (req, res) =>{
  console.log(req.params.token);
  res.status(200).json({params: {token:req.params.token}})
})


app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`)
});
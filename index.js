const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const config = require('./config/key');
const { User } = require("./models/User");

// 아래의 타입들의 데이터들을 받아오는 것
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// applicaiton/json
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected....'))
.catch(err => console.log(err));


app.get('/', (req, res) => res.send('Hello World! hi '))

app.post('/register',(req, res) => {
    // sign up => 필요한 정보들 client에서 가져오면
    // 그것들을 DB에 넣어준다.

    const user = new User(req.body);

    // mongoDB에 저장 in User
    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    });
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
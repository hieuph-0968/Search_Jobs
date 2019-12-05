//tạo require
const mongoose = require('mongoose');
//kết nối
mongoose.connect('mongodb://localhost:27017/Job');
//tạo Schema
const userSchema = new mongoose.Schema({
    email: String,
    pass: String
})
//tạo model(Collection trong Mongo)(bảng trong SQL)
var user = mongoose.model('user', userSchema);



var email1, pass1;
let str1;
function getText() {
    email1 = document.getElementById('emailLogin').value;
    pass1 = document.getElementById('passLogin').value;
    str1 = JSON.parse(email1);
}
// console.log(str1);



user.find().exec((err, user) => {
    user.forEach((element) => {
        console.log(element.pass);
    });
})


//CREATE:
    // user.create([
        // {email:"truyenle1",pass:"1234"},
        // {email:"truyenle2",pass: "1234"}
    // ])
// document.getElementById('login').addEventListener('click',getText);
//FIND
// user.find().exec((err,users)=>{
//     console.log(users);
// })
//UPDATE
// user.update({name:"truyen"},{name:"truyenEdit"}).exec((err,result)=>{
//         console.log(result);
//     })
//DELETE
// user.remove().exec((err,result)=>{
//     console.log(result);
// })
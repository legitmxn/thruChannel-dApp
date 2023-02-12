const express = require('express')
const mongoose = require('mongoose')
const app = express()
const UserModel = require('../models/user')

const uri = "mongodb+srv://finalyearproject:finalyearprojectpassword@fypcluster.89optaq.mongodb.net/?retryWrites=true&w=majority"
async function connect(){
  try{
    await mongoose.connect(uri);
    console.log("Connected to Mongodb");
  } catch(err){
    console.log(err);
  }
}

connect();

app.listen(3000, () => {
  console.log("Server started on port 3000");
})

app.get("/insertUser", (req, res) => {
  let userModel = new UserModel()
  userModel.name = "Mondeep Prakash"
  userModel.scholar_id = "1912064"
  userModel.votes_left = "1000"
  userModel.club = "MUN"
  userModel.position = "General Secretary"

  userModel.save((err, data) => {
    if(err){
      console.error(err)
    }else{
      res.status(200).send({"msg":"Inserted to DB"})
    }
  })
})

app.get("/getUsers", (req,res) => {
  UserModel.find((err,data) => {
    if(err){
      return res.status(500).send(err)
    }else{
      return res.status(200).json(data)
    }
  })
})

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

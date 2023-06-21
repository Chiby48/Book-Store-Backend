import mongoose from "mongoose"

const BookStoredbEndPoint = "mongodb://127.0.0.1:27017/database";


mongoose.connect(BookStoredbEndPoint)
mongoose.connection
.once("open", ()=>{
    console.log(`dataBase is connected${mongoose.connection.host}`)
}).on("error", (err) =>{
    console.log(`An error occured in connecting to dataBase`, err)
})

export default mongoose


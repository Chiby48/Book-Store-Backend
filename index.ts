import cors from "cors"
import express,{ Application, Request, Response }  from "express"
import router from "./router/bookRouter"

const port: number = 1908

const app: Application = express()

app.use(express.json()).use(cors())
.use("/api", router)
.get("/", (req: Request, res: Response)=>{
    try {
        return res.status(200).json({
            message: "You just click on a BookStore endpoint",
        })
    } catch (error) {
        return res.status(404).json({
            message: "error occured"
        })
    }
})

app.listen(port, ()=>{
    console.log(`Server is running on this port:`,port)
})
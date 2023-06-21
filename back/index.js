import  express  from "express";
//import postsRouter from "./routes/posts.js"
import authRouter from "./routes/auth.js"
//import cookieParser from "cookie-parser"

const app = express()
app.use(express.json())

app.use("/api/auth",authRouter )

app.listen(3001, ()=>{
    console.log("Connected!")
})
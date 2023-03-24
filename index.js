import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";
dotenv.config()

const app = express();
const PORT = process.env.PORT

app.use(cors())
app.use(bodyParser.json({limit: '30mb'}))
app.use('/', userRouter)


app.listen(PORT, () => console.log(`A porta de número ${PORT} está operando corretamente!`))
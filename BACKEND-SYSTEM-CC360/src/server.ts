import  express  from "express";
import authRouter from "./Routes/authRoutes";
import pollRouter from "./Routes/pollRoutes";
import incidentRouter from "./Routes/incidentRoutes";
import commentRoutes from "./Routes/commentRoutes";
import chatRoutes from "./Routes/chatRoutes";
import messageRoutes from "./Routes/messageRoutes";
import viewRouter from "./Routes/viewRoutes";
import cors from 'cors'


const app = express()

app.use(cors())
app.use(express.json())
app.use("/auth",authRouter)
app.use("/polls",pollRouter)
app.use("/views",viewRouter)
app.use("/incidents",incidentRouter)
app.use("/comments",commentRoutes)
app.use("/chats",chatRoutes)
app.use("/messages",messageRoutes)

const port = 1000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});








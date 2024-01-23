import express from 'express'
import dotenv from 'dotenv'
import connectDB from "./initializers/db.js";
import postRoutes from './routes/post.js'
import statisticRoutes from './routes/statistic.js'


dotenv.config();
const app = express();
app.use(express.json());
connectDB()
app.use('', postRoutes)
app.use('/statistics', statisticRoutes)


app.listen(process.env.PORT, () => {
    console.log("The server on port 3000");
});



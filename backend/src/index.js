import dotenv from "dotenv"
import db from './database/db.js';
import {app} from './app.js'
dotenv.config({
    path: './.env'
})

console.log(`${process.env.DB_NAME}`);


db()
.then(() => {
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
        console.log(`⚙️ Server is running at port : ${port}`);
    })
})
.catch((err) => {
    console.log(" mongodb connection failed !!! ", err);
})
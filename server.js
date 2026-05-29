import app from "./src/app.js";
import connectDB from "./src/config/db.js"

await connectDB()


let port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
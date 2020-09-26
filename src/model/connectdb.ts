// connect db
import mongoose from "mongoose"
// import {MONGO_KEY} from "../utils/secret"
const uriProduction = "mongodb+srv://joestack:joestack@cluster0.g7kh2.mongodb.net/project_1?retryWrites=true&w=majority"
export default mongoose.connect(uriProduction, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true, useUnifiedTopology: true}).catch((err) => {
    console.log(err)
})
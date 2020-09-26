// schema
import mongoose, { Schema } from "mongoose"
// import {SESSION_KEY} from "../utils/secret"

export type taskType =  mongoose.Document & {
    explanation: string
    creator: string
    explain: string
    task: string,
    fakeId: number
}
const TaskSchema: any = new mongoose.Schema({
    explanation: String,
    creator: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
    createdAt: String,
    fakeId: Number
})
// TaskSchema.virtual('creator', {
//     ref: "user",
//     localField: "taskId",
//     foreignField: "_id"
// })
const Task = mongoose.model<taskType>("task", TaskSchema)

export default Task
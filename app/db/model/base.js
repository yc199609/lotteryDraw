import mongoose from '../index'
const Schema = mongoose.Schema

const baseSchema = new Schema({
  code: { type: String, required: true },
  phone: { type: Number, required: true, unique: true, dropDups: true },
  isdel: Boolean
})

export default mongoose.model('Base', baseSchema)

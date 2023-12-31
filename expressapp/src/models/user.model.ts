import mongoose, { Schema, Document } from 'mongoose'

export interface User extends Document {
  email: string
  password: string
}

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

export default mongoose.model<User>('User', UserSchema)

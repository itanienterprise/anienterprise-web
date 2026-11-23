import mongoose from 'mongoose'

export const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/anienterprise'

  try {
    const conn = await mongoose.connect(mongoURI)
    console.log(` MongoDB Connected: ${conn.connection.host}/${conn.connection.name}`)
  } catch (error) {
    console.error(` MongoDB Connection Error: ${error.message}`)
    // Do not exit process so server can stay up and retry if needed
  }
}

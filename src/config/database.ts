import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI;

    if (!MONGO_URI) {
      throw new Error("MONGO_URI no esta definido en las variables de entorno");
    }

    await mongoose.connect(MONGO_URI);
    console.log("Conectado a la base de datos");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default connectDB;

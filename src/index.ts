import { app } from "./app.js";
import "dotenv/config";
import connectDB from "./config/database.js";

const initializeServer = async () => {
  try {
    await connectDB();

    app.listen(3000, () => {
      console.log("Server corriendo en el puerto 3000");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

initializeServer();

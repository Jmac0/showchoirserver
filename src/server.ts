import app from "./app";
import * as dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 8000;
// catch unhandled synchronous errors
process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("UNCAUGHT EXCEPTION 💥 shutting down...");
  process.exit(1);
});

const server = app.listen(port, () => {
  if (process.env.NODE_ENV === "dev") {
    console.log("Development Server Started");
  } else {
    console.log("Production Server Started");
  }
});

process.on("unhandledRejection", (err: { name: string; message: string }) => {
  console.log(err.name, err.message);

  console.log("UNHANDLED REJECTION 💥 Shutting down...");
  // shut down node app
  // gracefully shutdown
  server.close(() => {
    process.exit(1);
  });
});

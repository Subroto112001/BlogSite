const { connectDB } = require("./src/database/db");
const port = process.env.PORT;
const { app } = require("./src/app");
connectDB()
  .then(() => {
    app.listen(port || 5000, () => {
      console.log(
        `Server running on Port ${port} url: http://localhost:${port}`
      );
    });
  })
  .catch((error) => {
    console.log("database connection error", error);
  });

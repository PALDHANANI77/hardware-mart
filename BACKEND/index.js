const connectToMongo = require("./db");
const express = require("express"); 
const app = express();
var cors = require("cors");
app.use(express.json());
app.use(cors());
const port = 3030;
connectToMongo();
app.use("/api/auth", require("./routes/auth"));

app.listen(port, () => {
  console.log(`app listning at http://localhost:${port}`);
});

import express from "express";
import {} from "dotenv/config";

const app = express();

const router = express.Router();

app.use(express.static("public"));

router.route("/").get((req, res) => {
  res.sendFile("index.html", {});
});

app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});

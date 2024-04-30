import Express from "express";
import cors from "cors";

const app = Express();

app.use(cors());
app.use(Express.json());

app.get("/", (_, response) => response.json({ message: "Hello, World" }));

app.listen(3333, () =>
  console.log("🚀 Server started at http://localhost:3333"),
);

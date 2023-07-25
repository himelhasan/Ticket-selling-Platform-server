import express from "express";
import cors from "cors";
import locationRouter from "./app/modules/location/location.route";

const app = express();
app.use(cors());

// parsing data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/v1/locations", locationRouter);

app.get("/", (req, res) => {
  res.send("Hello Himel!");
});

export default app;

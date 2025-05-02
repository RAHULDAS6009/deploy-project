import express, { Request, Response } from "express";
import { client } from "@repo/db/client";
const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({
    msg: "Hello world 1",
  });
});

app.post("/signup", async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = parseInt(req.body.password);

  const newUser = await client.user.create({
    data: {
      username: username,
      password: password,
    },
  });

  res.json({
    msg: "user created successfully",
    id: newUser.id,
  });
});

app.listen(5000, () => {
  console.log("server is running at 5000");
});

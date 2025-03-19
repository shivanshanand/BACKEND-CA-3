import express from "express";

const app = express();

const users = [
  { name: "alice", age: 25, email: "alice@example.com" },
  { name: "bob", age: 30, email: "bob@example.com" },
  { name: "charlie", age: 28, email: "charlie@example.com" },
];

app.get("/", (req, res) => {
  res.send("Hi Kalvium!! My project is working fine");
});

app.get("/user", (req, res) => {
  try {
    const name = req.query.name;

    if (name === "") {
      return res.status(403).send("User parameter cannot be empty");
    }
    const user = users.find((user) => user.name === name);

    if (user) {
      return res.status(200).json({
        message: "User found",
        data: { name: user.name, age: user.age, email: xuser.email },
      });
    } else {
      return res.status(403).json({ message: "User not found" });
    }
  } catch (error) {
    console.log("error", error);
    return res.status(503).json({ error: error });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log("server running on port", port);
});

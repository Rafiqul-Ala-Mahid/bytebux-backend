const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 4000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");



//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Successfully server is running!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

const uri = `mongodb+srv://rafi_mahid_task:CfUxZVqZuc5bR2vM@cluster0.8d4trn7.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
    try {
        const taskCollection = client.db("taskdb").collection("tasks");
        app.get('/tasks', async(req, res) => {
            const query = {};
            const cursor = taskCollection.find(query);
            const tasks = await cursor.toArray();
            res.send(tasks);
        })
        app.get("/tasks/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            console.log(id);
            const task = await taskCollection.findOne(query);
            res.send(task);
        });
        app.post("/tasks", async (req, res) => {
          const task = req.body;
          const result = await taskCollection.insertOne(task);
          res.send(result);
          console.log(task);
        });

        app.put("/tasks/:id", async (req, res) => {
          const id = req.params.id;
          const filter = { _id: new ObjectId(id) };
          const task = req.body;
          console.log(task);
          const option = { upsert: true };
          const updateTask = {
            $set: {
              title: task.title,
              description: task.description,
              completed: task.completed
            },
          };
          const result = await taskCollection.updateOne(
            filter,
            updateTask,
            option
          );
            res.send(result);
        });

        app.delete("/tasks/:id", async (req, res) => {
          const id = req.params.id;
          const query = { _id: new ObjectId(id) };
          const result = await taskCollection.deleteOne(query);
          console.log(result);
          res.send(result);
        });
    }
    finally {
    
    }
}

run().catch((err) => {
  console.log(err);
});
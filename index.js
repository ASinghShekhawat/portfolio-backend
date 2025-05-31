const express = require("express");
const app = express();
const Database = require("./db.js");

const db = new Database();
app.get("/", async (req, res) => {
  try {
    const projects = await db.getAllProjects();
    const skills = await db.getAllSkills();
    return res.status(200).json({
      message: "Sucessfully fetched portfolio details",
      projects: projects,
      skills: skills
    });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to fetch projects"
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
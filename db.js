const supabase = require("./supabase.js");

class Database {
  constructor() {
    this.supabase = supabase;
  }

  async getAllProjects() {
    try {
      const { data } = await supabase.from("Projects").select("*");
      return data;
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw error;
    }
  }

  async getAllSkills() {
    try {
      const { data } = await supabase.from("Skills").select("*");
      return data;
    } catch (error) {
      console.error("Error fetching skills:", error);
      throw error;
    }
  }
}
module.exports = Database;

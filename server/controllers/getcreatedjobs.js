import Job from "../models/job.js";

const getcreatedjobs = async (req, res) => {
    try {
      const jobs = await Job.find({});
      res.status(200).json(jobs);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching jobs', error: error.message });
    }
  }

export default getcreatedjobs
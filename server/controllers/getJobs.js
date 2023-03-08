import Jobposting from "../models/jobposting.js";

const getJobs = async (req, res) => {
  const filters = req.query;
  try {
    const jobs = await Jobposting.find({Type: filters.Type, Location: { $in: filters.Location }, 
        Category: { $in: filters.Category}} );
    res.json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error getting job postings");
  }
};

export default getJobs;

import Jobposting from "../models/jobposting.js";

const searchJobs = async (req, res) => {
  const query = req.query.q; // get the search query from the request
  const jobs = await Jobposting.find({
    $or: [
      { Type: { $regex: query, $options: 'i' } },
      { Title: { $regex: query, $options: 'i' } },
      { Company: { $regex: query, $options: 'i' } },
      { Location: { $regex: query, $options: 'i' } }
    ]
  }); // find all jobs that match the search query

  res.json(jobs);
};

export default searchJobs;



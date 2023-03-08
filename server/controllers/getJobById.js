import Jobposting from "../models/jobposting.js";

export const getJobById = async (req, res) => {
  try {
    const job = await Jobposting.findById(req.query.jobId);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.json(job);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



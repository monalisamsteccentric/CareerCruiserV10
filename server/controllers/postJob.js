import Job from "../models/job.js";

const postJob = async (req, res) => {
    try {
      const newJob = new Job(req.body);
      await newJob.save();
      res.status(201).send({ message: 'Job created successfully!', job: newJob });
    } catch (error) {
      res.status(400).send(error);
    }
  }


  export default postJob
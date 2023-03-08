import ProfileEducation from "../models/profileEducation.js";
import ProfileGeneral from "../models/profileGeneral.js";
import ProfileJobPreferences from "../models/profileJobPreferences.js";
import ProfileProject from "../models/profileProject.js";
import ProfileSkills from "../models/profileSkills.js";
import ProfileWorkExperience from "../models/profileWorkExperience.js";

export const getEducation = async (req, res) => {
    try {
      const education = await ProfileEducation.find({ user: req.query.user });
      res.json(education);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }

  export const getGeneral = async (req, res) => {
    try {
      const general = await ProfileGeneral.find({ user: req.query.user });
      res.json(general);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }  

  export const getJobPreferences = async (req, res) => {
    try {
      const jobpreferences = await ProfileJobPreferences.find({ user: req.query.user });
      console.log(jobpreferences)
      res.json(jobpreferences);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }  

  export const getSkills = async (req, res) => {
    try {
      const skills = await ProfileSkills.find({ user: req.query.user });
      res.json(skills);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }  

  export const getProject = async (req, res) => {
    try {
      const projects = await ProfileProject.find({ user: req.query.user });
      res.json(projects);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }  

  export const getWorkExperience = async (req, res) => {
    try {
      const workexp = await ProfileWorkExperience.find({ user: req.query.user });
      res.json(workexp);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }  
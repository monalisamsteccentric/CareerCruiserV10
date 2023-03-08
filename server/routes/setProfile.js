import express from "express";
import { setJobPreferences, setProject, setSkill, setWorkExperience, setEducation, setGeneral } from "../controllers/setProfile.js";




let router = express.Router();

router.post('/education', setEducation);

router.post('/general', setGeneral);

router.post('/jobpreferences', setJobPreferences);

router.post('/projects', setProject);

router.post('/skills', setSkill);

router.post('/workexperiences', setWorkExperience);




export default router; 
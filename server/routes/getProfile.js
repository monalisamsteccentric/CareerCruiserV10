
import express from 'express';
import { getEducation, getGeneral, getJobPreferences, getProject, getSkills, getWorkExperience } from '../controllers/getProfile.js';



let router = express.Router();


router.get('/geteducations', getEducation);
router.get('/getprojects', getProject);
router.get('/getskills', getSkills);
router.get('/getgenerals', getGeneral);
router.get('/getjobpreferences', getJobPreferences);
router.get('/getworkexperiences', getWorkExperience);

  

export default router;
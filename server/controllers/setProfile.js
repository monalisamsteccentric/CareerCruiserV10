import ProfileJobPreferences from "../models/profileJobPreferences.js";
import ProfileProject from "../models/profileProject.js";
import ProfileSkills from "../models/profileSkills.js";
import ProfileWorkExperience from "../models/profileWorkExperience.js";
import ProfileEducation from "../models/profileEducation.js";
import ProfileGeneral from "../models/profileGeneral.js";

export const setJobPreferences = async (req, res) => {
  try {
    const { user, title, industry, location, salary, description } = req.body;

    // Create a new ProfileJobPreferences instance using the received data
    const profileJobPreferences = new ProfileJobPreferences({
      user,
      jobPreferences: {
        title,
        industry,
        location,
        salary,
        description,
      },
    });

    // Save the new instance to the database
    await profileJobPreferences.save();

    // Send a success response
    res.status(201).json({ message: 'Job preferences saved successfully' });
  } catch (error) {
    // Send an error response
    console.log(error.message)
    res.status(500).json({ error: 'Error saving job preferences' });
  }
};


export const setProject = (req, res) => {
  // Destructure projectData from request body
  const { user, name, description, role, startDate, endDate } = req.body;

  // Create new project object using projectData
  const newProject = {
    user,
    name,
    description,
    role,
    startDate,
    endDate
  };

  // Find profile for user and add new project
  ProfileProject.findOne({ user })
    .then(profile => {
      if (profile) {
        // Profile exists, add new project to projects array
        profile.projects.push(newProject);
        profile.save()
          .then(() => res.status(200).json({ success: true, message: 'Project added successfully.' }))
          .catch(error => res.status(400).json({ success: false, message: 'Error adding project.', error }));
      } else {
        // Profile does not exist, create new profile and add new project
        const newProfile = new ProfileProject({ user, projects: [newProject] });
        newProfile.save()
          .then(() => res.status(200).json({ success: true, message: 'Project added successfully.' }))
          .catch(error => res.status(400).json({ success: false, message: 'Error adding project.', error }));
      }
    })
    .catch(error => res.status(400).json({ success: false, message: 'Error finding profile.', error }));
};

export const setSkill = (req, res) => {
  const { user, name, proficiency } = req.body;
  
  const newSkill = {
    name,
    proficiency
  };

  ProfileSkills.findOne({ user: user })
    .then(profile => {
      if (!profile) {
        // If profile doesn't exist, create a new one and add the skill
        const newProfile = new ProfileSkills({
          user: user,
          skills: [newSkill]
        });
        newProfile.save()
          .then(() => res.json('Skill added successfully'))
          .catch(err => res.status(400).json('Error: ' + err));
      } else {
        // If profile exists, add the skill to the existing profile
        profile.skills.push(newSkill);
        profile.save()
          .then(() => res.json('Skill added successfully'))
          .catch(err => res.status(400).json('Error: ' + err));
      }
    })
    .catch(err => res.status(400).json('Error: ' + err));
}


export const setWorkExperience = async (req, res) => {
  try {
    const { user, title, company, startDate, endDate, description } = req.body;
    const workExperience = { title, company, startDate, endDate, description };
    const profile = await ProfileWorkExperience.findOneAndUpdate(
      { user },
      { $push: { workExperience } },
      { new: true, upsert: true }
    );
    res.status(200).json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export const setEducation =  async (req, res) => {
    try {
      const { user, degree, institution, startDate, endDate } = req.body;
      const educationData = { degree, institution, startDate, endDate };
      const profile = await ProfileEducation.findOne({ user });
      if (!profile) {
        // create a new profile if one doesn't exist
        const newProfile = new ProfileEducation({ user, education: [educationData] });
        await newProfile.save();
        return res.status(201).json(newProfile);
      }
      // add education to an existing profile
      profile.education.push(educationData);
      await profile.save();
      return res.status(200).json(profile);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
  };

  export const setGeneral = async (req, res) => {
    try {
      const { firstName, lastName, email, phone, address, user } = req.body;
      const generalData = new ProfileGeneral({
        firstName,
        lastName,
        email,
        phone,
        address,
        user,
      });
      const savedGeneralData = await generalData.save();
      res.json(savedGeneralData);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  };
  
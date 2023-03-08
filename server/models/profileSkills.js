import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  skills: [{
    name: {
      type: String,
      required: true
    },
    proficiency: {
      type: String,
      required: true
    }
  }],
  
});

const ProfileSkills = mongoose.model('Profileskill', ProfileSchema);

export default ProfileSkills;

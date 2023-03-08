import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  projects: [{
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    role: {
      type: String,
      required: true
    },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date
    }
  }],
  
});

const ProfileProject = mongoose.model('Profileproject', ProfileSchema);

export default ProfileProject;

import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    jobPreferences: {
        title: {
            type: String
        },
        industry: {
            type: String
        },
        location: {
            type: String
        },
        salary: {
            type: Number
        },
        description: {
            type: String
        }
    },

});

const ProfileJobPreferences = mongoose.model('Profilejobpreference', ProfileSchema);

export default ProfileJobPreferences;

import { Schema, model } from "mongoose";

const jobpostingSchema = new Schema({
  Type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  Title: {
    type: String,
    required: true,
  },
  Company: {
    type: String,
    required: true,
  },
  Eligibility: {
    type: String,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
  JobDescription: {
    type: String,
    required: true,
  },
  JobRequirment: {
    type: String,
    required: true,
  },
  RequiredQual: {
    type: String,
    required: true,
  },
  Salary: {
    type: String,
    required: true,
  },
  ApplicationP: {
    type: String,
    required: true,
  },
  Deadline: {
    type: String,
    required: true,
  },
  AboutC: {
    type: String,
    required: true,
  },
});

const Jobposting = model('Jobposting', jobpostingSchema);

export default Jobposting

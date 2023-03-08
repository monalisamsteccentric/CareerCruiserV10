import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import cors from 'cors';
import registerRoute from './routes/register.js';
import loginRoute from './routes/login.js'
import getUserRoute from './routes/getUser.js'
import getJobsRouter from './routes/getJobs.js'
import searchJobsRouter from './routes/searchJobs.js'
import sendMessageRouter from './routes/sendMessage.js';
import inboxMessageRouter from './routes/inboxMessage.js';
import sentmessageRouter from './routes/sentMessage.js';
import setProfileRouter from './routes/setProfile.js';
import getProfileRouter from './routes/getProfile.js'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import getJobByIdRouter  from './routes/getJobById.js';





dotenv.config();


const app = express();
app.use(cookieParser())
app.use(bodyParser.json());


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));

app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/users', getUserRoute)
app.use('/jobs', getJobsRouter)
app.use('/search', searchJobsRouter)
app.use('/messages', sendMessageRouter)
app.use('/inboxmessages', inboxMessageRouter)
app.use('/sentmessages', sentmessageRouter)
app.use('/profile', setProfileRouter)
app.use('/getprofile', getProfileRouter)
app.use('/jobsbyid', getJobByIdRouter)

mongoose.set('strictQuery', false);

mongoose.connect(process.env.mongoDB_url, (err)=>{
    if(err){
        console.log('db not connected');
    }else{
        console.log('db connected');
    }
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on ${process.env.PORT}`);
});

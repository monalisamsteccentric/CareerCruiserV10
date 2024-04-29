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
import postJob from './routes/postJob.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import getJobByIdRouter  from './routes/getJobById.js';
import history from 'connect-history-api-fallback';
import  getcreatedjobs  from './routes/getcreatedjobs.js';





dotenv.config();


const app = express();
app.use(cookieParser())
app.use(bodyParser.json());


app.use(history({
  disableDotRule: true,
  verbose: true
}));


app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello, world!');
  });
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
app.use('/postjob', postJob)
app.use('/getcreatedjobs', getcreatedjobs)

mongoose.set('strictQuery', false);

mongoose.connect(process.env.mongoDB_url, (err)=>{
    if(err){
        console.log('db not connected');
    }else{
        console.log('db connected');
    }
});

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});

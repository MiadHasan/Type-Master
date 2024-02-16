import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import signupRoutes from './routes/signup.js';
import loginRoutes from './routes/login.js';
import updateStates from './routes/updateStates.js';
import profileRoutes from './routes/profile.js';
import textRoutes from './routes/text.js';

const app = express();

app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/signup', signupRoutes);
app.use('/login', loginRoutes);
app.use('/update', updateStates);
app.use('/profile', profileRoutes);
app.use('/text', textRoutes);

const CONNECTION_URL = 'mongodb+srv://MiadHasan:1704118@cluster0.cxutk2y.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running in port: ${PORT}`)))
  .catch((error) => console.log(error));

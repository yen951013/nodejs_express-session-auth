import express from 'express';
import session from 'express-session';
import 'dotenv/config';
import { connectDB } from './database/connect.js';
import registerRoutes from './routes/index.js'
const app = express();

app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));

await connectDB();
registerRoutes(app);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  console.log(`=> http://localhost:${process.env.PORT}`);
});
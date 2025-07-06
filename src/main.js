import express from 'express';
import session from 'express-session';
import { connectDB } from './database/connect.js';
import registerRoutes from './routes/index.js'
const app = express();

app.use(express.json());
app.use(session({
	secret: 'your-secret-key',
	resave: false,
	saveUninitialized: true,
}));

await connectDB();
registerRoutes(app);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log('=> http://localhost:3000');
});
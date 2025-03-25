// server.js
import multer from 'multer';
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import markRoutes from './routes/markRoutes.js';
import { connectDB } from './db.js';

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
connectDB();

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => console.log('MongoDB Connected'))
//   .catch((err) => console.error('MongoDB Connection Error:', err));

// Routes
app.use('/api/marks', markRoutes);
// Serve static files from the public folder
app.use(express.static(path.join(process.cwd(), 'public')));

// Configure multer for PDF upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// PDF Upload Endpoint
app.post('/upload', upload.single('pdf'), (req, res) => {
  res.json({ message: 'File uploaded successfully', file: req.file });
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

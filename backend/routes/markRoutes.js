// routes/markRoutes.js
import express from 'express';
import Mark from '../models/Mark.js';

const router = express.Router();

// Save Marks
router.post('/save-marks', async (req, res) => {
  const { questionNo, mark } = req.body;

  try {
    const existingMark = await Mark.findOne({ questionNo });

    if (existingMark) {
      existingMark.mark = mark;
      await existingMark.save();
    } else {
      const newMark = new Mark({ questionNo, mark });
      await newMark.save();
    }

    res.status(200).json({ message: 'Marks saved successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetch Marks
router.get('/fetch-marks/:questionNo', async (req, res) => {
  const { questionNo } = req.params;

  try {
    const mark = await Mark.findOne({ questionNo });
    if (!mark) return res.status(404).json({ message: 'No marks found' });

    res.status(200).json({ questionNo: mark.questionNo, marks: mark.mark });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

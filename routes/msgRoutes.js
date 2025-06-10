import express from "express";
const router = express.Router();
import {
  sendMessage,
  scheduleMessage,
  retrieveMessage,
  editMessage,
  deleteMessage
} from '../controller/msgController.js';

// Send message
router.post('/send', sendMessage);

// Schedule message
router.post('/schedule', scheduleMessage);

// Retrieve message
router.get('/retrieve', retrieveMessage);

// Edit message
router.put('/edit', editMessage);

// Delete message
router.delete('/delete', deleteMessage);

export default router;

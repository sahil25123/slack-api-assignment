import express from "express";
const router = express.Router();
const {
  sendMessage,
  scheduleMessage,
  retrieveMessage,
  editMessage,
  deleteMessage
} = require('../controller/msgController.js');

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

module.exports = router;

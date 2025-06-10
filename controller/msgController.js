import { WebClient } from "@slack/web-api";
import dotenv from "dotenv";

dotenv.config();


const slack = new WebClient(process.env.SLACK_BOT_TOKEN);

// Send message
export const sendMessage = async (req, res) => {
  try {
    const { channel, text } = req.body;
    const result = await slack.chat.postMessage({ channel, text });
    res.json({ success: true, message: 'Message sent', data: result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Schedule message
export const scheduleMessage = async (req, res) => {
  try {
    const { channel, text, postAt } = req.body;
    const result = await slack.chat.scheduleMessage({
      channel,
      text,
      post_at: postAt
    });
    res.json({ success: true, message: 'Message scheduled', data: result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Retrieve message
export const retrieveMessage = async (req, res) => {
  try {
    const { channel, ts } = req.query;
    const result = await slack.conversations.history({
      channel,
      latest: ts,
      inclusive: true,
      limit: 1
    });
    res.json({ success: true, message: 'Message retrieved', data: result.messages[0] });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Edit message
export const editMessage = async (req, res) => {
  try {
    const { channel, ts, text } = req.body;
    const result = await slack.chat.update({ channel, ts, text });
    res.json({ success: true, message: 'Message updated', data: result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete message
export const deleteMessage = async (req, res) => {
  try {
    const { channel, ts } = req.body;
    const result = await slack.chat.delete({ channel, ts });
    res.json({ success: true, message: 'Message deleted', data: result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

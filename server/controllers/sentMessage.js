import Message from "../models/message.js";

const sentmessage = async (req, res) => {
    const { sender } = req.query;
    
    try {
      const messages = await Message.find({ sender }).populate('recipient', 'username');
      res.json(messages);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  }

  export default sentmessage;
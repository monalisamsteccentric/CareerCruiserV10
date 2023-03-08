import Message from "../models/message.js";

const inboxMessage = async (req, res) => {
    try {
      const recipient = req.query.recipient;
  
      const messages = await Message.find({ recipient })
        .populate('sender', 'username')
        .sort({ createdAt: 'desc' });
      res.json(messages);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  };

  export default inboxMessage;
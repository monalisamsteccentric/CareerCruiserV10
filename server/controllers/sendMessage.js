import User from "../models/user.js";
import Message from "../models/message.js";

const sendMessage = async (req, res) => {
    try {
      // Find the user by their username
      const sender = await User.findOne({ username: req.body.sender });
      const recipient = await User.findOne({ username: req.body.recipient });
  
      // Create a new message with the user IDs
      const message = new Message({
        message: req.body.message,
        sender: sender._id,
        recipient: recipient._id
      });
  
      // Save the message to the database
      const savedMessage = await message.save();
  
      res.status(201).json(savedMessage);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error sending message');
    }
  }

  export default sendMessage;
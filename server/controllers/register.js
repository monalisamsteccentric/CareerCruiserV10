import User from "../models/user.js";
import bcrypt from "bcrypt";

const register = async (req, res) => {
  const { username, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    username,
    email,
    password: hashedPassword
  });

  try {
    await user.save();
    res.send({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(400).send({ error: 'Failed to register user' });
  }
};

export default register;

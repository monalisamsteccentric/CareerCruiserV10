import jwt from 'jsonwebtoken';

const getUsername = (req, res) => {
  try {
    const decoded = jwt.verify(JSON.parse(req.body.token).token, process.env.JWT_SECRET);
    const { username, userId } = decoded;
    
    res.send({ username, userId });
  } catch (error) {
    res.status(401).send({ error: 'Unauthorized' });
  }
};

export default getUsername;

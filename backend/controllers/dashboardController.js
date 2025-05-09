const db = require('../models/db');

// Get all user data for the dashboard
exports.getAllUsers = (req, res) => {
    const { email } = req.query; // Get email from query parameters
  
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  const query = 'SELECT * FROM user where email=?';

  db.query(query, [email], (err, results) => {
    if (err) {
      console.error('Error fetching user:', err);
      return res.status(500).json({ error: 'Database error while fetching user data' });
    }
    if (results.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json(results[0]);
  });
};

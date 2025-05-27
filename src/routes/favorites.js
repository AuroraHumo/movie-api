import express from 'express';
import { db } from '../db.js';

const router = express.Router();

router.post('/', (req, res) => {
  const { userId, movieId, movieTitle } = req.body;
  if (!userId || !movieId || !movieTitle) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const sql = 'INSERT INTO favorites (user_id, movie_id, movie_title) VALUES (?, ?, ?)';
  db.query(sql, [userId, movieId, movieTitle], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Favorite added', favoriteId: results.insertId });
  });
});

router.get('/', (req, res) => {
  const { userId } = req.query;
  const sql = 'SELECT * FROM favorites WHERE user_id = ? ORDER BY added_at DESC';

  db.query(sql, [userId], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

export default router;
// This code defines an Express router for handling favorite movies. It includes two routes:
// 1. POST /favorites: Adds a movie to the user's favorites list. It expects a JSON body with userId, movieId, and movieTitle.
// 2. GET /favorites: Retrieves the list of favorite movies for a specific user, ordered by the date they were added.
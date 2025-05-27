import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import favoritesRoutes from './routes/favorites.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/favorites', favoritesRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ API running on http://localhost:${PORT}`));
// This code sets up an Express server with CORS and JSON parsing middleware. It imports the favorites routes and mounts them at the `/api/favorites` endpoint. The server listens on a specified port, defaulting to 4000 if not provided in the environment variables.
// The server logs a message indicating that it is running and the URL where it can be accessed.
// The server is configured to handle JSON requests and responses, making it suitable for a RESTful API.

app.get('/', (req, res) => {
  console.log("🌐 Root route hit");
  res.send("API is running");
});

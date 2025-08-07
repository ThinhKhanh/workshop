import express from 'express';
import { getRatingsByProductId, addRating, updateRating, deleteRating, getRatedUsers, updateRatedUsers } from '../controllers/ratingController.js';

const router = express.Router();

router.get('/product/:productId', getRatingsByProductId);
router.post('/', addRating);
router.put('/:id', updateRating);
router.delete('/:id', deleteRating);
router.get('/rated-users/:productId', getRatedUsers);
router.put('/rated-users/:productId', updateRatedUsers);

export default router;
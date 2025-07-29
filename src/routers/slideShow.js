import express from 'express';
import { createSlideshow, deleteSlideshow, getAllSlideshow } from '../controllers/slideShow.controller';

const slieShowRouter = express.Router();
slieShowRouter.get("/banners", getAllSlideshow);
slieShowRouter.post("/banners", createSlideshow);
slieShowRouter.delete("/banners/:id", deleteSlideshow);

export default slieShowRouter;
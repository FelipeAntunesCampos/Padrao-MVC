import express from "express";
import { getAllViloes, createViloes} from "../controllers/viloesController.js"

const router = express.Router();

// Rotas para heróis
router.get("/", getAllViloes);
router.post("/", createViloes);

export default router;
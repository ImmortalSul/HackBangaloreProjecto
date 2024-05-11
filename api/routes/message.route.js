import express from "express";
import{
    addMessage
} from "../controllers/message.controllers.js";

const router = express.Router();

router.post("/:chatId", verifyToken, addMessage);

export default router;
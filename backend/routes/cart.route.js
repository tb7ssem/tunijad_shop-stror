import express from "express";
import {
  addToCart,
  removeAllFromCart,
  updateQuantity,
  getCartProducts,
} from "../controllers/cart.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js"; // Correct the directory name here
const router = express.Router();

router.get("/", protectRoute, getCartProducts); // Corrected 'grt' to 'get'
router.post("/", protectRoute, addToCart);
router.delete("/", protectRoute, removeAllFromCart);
router.put("/:id", protectRoute, updateQuantity);

export default router;

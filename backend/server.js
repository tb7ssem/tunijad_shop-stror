import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import paymentRoutes from "./routes/payment.route.js";
import couponRoutes from "./routes/coupon.rout.js"; // Correct the file name here
import analyticsRoutes from "./routes/analytics.route.js";

import { connectDB } from "./lib/db.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);

  connectDB();
});

//YqlSvvUHpRP3srbg

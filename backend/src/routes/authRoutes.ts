import { Router } from "express";
import { login, requestSignupOtp, verifySignup } from "../controllers/authController";

const router = Router();

router.post("/login", login);
router.post("/request-signup-otp", requestSignupOtp);
router.post("/verify-signup", verifySignup);

export default router;

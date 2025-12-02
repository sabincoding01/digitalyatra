import { Request, Response } from "express";
import User from "../../../database/models/user.model";
import bcrypt from "bcrypt";

class AuthController {
  static async registerUser(req: Request, res: Response) {
    try {
      const { username, password, email, role } = req.body;

      if (!username || !password || !email) {
        return res.status(400).json({
          message: "Please provide username, password, email",
        });
      }

      // Check duplicate email
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(409).json({
          message: "Email already registered!",
        });
      }

      // Create and insert new user
      await User.create({
        username,
        password: bcrypt.hashSync(password, 12),
        email,
        role: role ?? "user", // optional role
      });

      return res.status(201).json({
        message: "User registered successfully",
      });

    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Server error",
        error: error,
      });
    }
  }
}

export default AuthController;

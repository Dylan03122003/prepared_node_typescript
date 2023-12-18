import express, { Request, Response } from "express";

const router = express.Router();

router.post("/create-user", (req: Request, res: Response) => {
  res.status(200).json({
    message: "OK",
  });
});

export default router;

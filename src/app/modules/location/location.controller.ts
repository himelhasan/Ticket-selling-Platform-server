import { Request, Response } from "express";
import { getAllLocations, postALocation } from "./location.service";

export const findLocations = async (req: Request, res: Response) => {
  const findCity = await getAllLocations();
  res.status(200).json({
    status: "success",
    data: findCity,
  });
};

export const createALocation = async (req: Request, res: Response) => {
  const data = req.body;
  const newLocation = await postALocation(data);

  res.status(200).json({
    status: "success",
    body: newLocation,
  });
};

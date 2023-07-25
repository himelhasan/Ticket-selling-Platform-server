import LocationModel from "./location.model";

export const getAllLocations = async (): Promise<ILocation[]> => {
  const locations = await LocationModel.find({});
  return locations;
};

export const postALocation = async (payload: ILocation): Promise<ILocation> => {
  const newLocation = new LocationModel(payload);
  await newLocation.save();
  return newLocation;
};

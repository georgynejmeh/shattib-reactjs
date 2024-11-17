import { useContext } from "react";
import { RkhamCustomMeasure } from "../context/RkhamCustomMeasureContext";

export const useRkhamCustomMeasure = () => {
  const context = useContext(RkhamCustomMeasure);
  if (!context) {
    throw new Error(
      "useRkhamCustomMeasure must be used within an EngineerRequestProvider"
    );
  }
  return context;
};

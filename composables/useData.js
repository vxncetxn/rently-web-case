import data from "~/data/data.json";

export const useData = () => {
  return useState("data", () => data);
};

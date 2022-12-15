import data from "~/data.json";

export const useData = () => {
  return useState("data", () => data);
};

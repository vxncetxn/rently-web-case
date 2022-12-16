export const useToastState = () => {
  return useState("toast-state", () => {
    return {
      isPresent: false,
      message: "",
      type: "",
    };
  });
};

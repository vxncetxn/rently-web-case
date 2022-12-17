export const useFormState = () => {
  return useState("form-state", () => {
    return {
      state: null,
      isTouched: false,
    };
  });
};

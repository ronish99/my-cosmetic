import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const formSlice = createSlice({
  name: "form",
  initialState: {
    formData: {
      title: "",
      body: "",
      userId: "",
    },
  },
  reducers: {
    updateFormData: (state, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value;

      axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        JSON.stringify({
          title: formData.title,
          body: formData.body,
          userId: formData.userId,
        })
      );
    },
  },
});
export const { updateFormData } = formSlice.actions;
export default formSlice.reducer;

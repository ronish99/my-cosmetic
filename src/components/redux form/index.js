import React from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { updateFormData, selectFormData } from "../../redux/slice/FormSlice";

const Form = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form?.formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`username: ${formData.username}`);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ field: name, value }));
  };

  console.log(formData);
  return (
    <form onSubmit={handleSubmit}>
      <label>
        id:
        <input
          type="text"
          value={formData?.title}
          name="title"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        title:
        <input
          type="text"
          value={formData?.body}
          name="body"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        userId:
        <input
          type="number"
          value={formData?.userId}
          name="userId"
          onChange={handleChange}
        />
      </label>
      <button type="submit">submit</button>
    </form>
  );
};

export default Form;

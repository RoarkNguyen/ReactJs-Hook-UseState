import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
  onSubmit: null,
};
function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");
  function handleValueChange(e) {
    // console.log(e.target.value);
    setValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!onSubmit) return;
    const formValues = {
      title: value,
    };
    onSubmit(formValues);
    setValue(""); //reset form
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleValueChange} />
    </form>
  );
}

export default TodoForm;

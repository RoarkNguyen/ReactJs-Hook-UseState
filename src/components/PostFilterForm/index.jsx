import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRef } from "react";

PostFilterForm.propTypes = {
  onSubmit: PropTypes.func,
};
PostFilterForm.defaultProps = {
  onSubmit: null,
};
//debounce
function PostFilterForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null); // debounce
  function handleSearchTermChange(e) {
    const value = e.target.value;
    setSearchTerm(value);
    if (!onSubmit) return;
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    /// if vẫn gõ không dừng trong 0.3s thì sẽ không submit. Sau 0.3 s mới submit
    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      };
      onSubmit(formValues);
    }, 300);

    // onSubmit("hi ne:", e.target.value);
  }
  return (
    <form>
      <input type="text" onChange={handleSearchTermChange} />
    </form>
  );
}

export default PostFilterForm;

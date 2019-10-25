import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string
};

function Input({ onChange, value, name }) {
  return <StyledInput onChange={onChange} value={value} name={name} />;
}

export default Input;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 17px;
  color: #333;
  border-radius: 6px;
  border: none;
`;

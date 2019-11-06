import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import OSK from "./OSK";
// import Input from "./Input";

class Form extends Component {
  static propTypes = {
    setActiveInput: PropTypes.func
  };

  state = {
    input: {
      firstName: "",
      lastName: "",
      email: ""
    }
  };

  handleSubmit = e => {
    const { firstName, lastName, email } = this.state.input;

    e.preventDefault();
    console.log("✅ submitted!");
    console.log("firstName:", firstName);
    console.log("lastName:", lastName);
    console.log("email:", email);
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <FieldRow>
          <FieldWrapper>
            <Label>First Name</Label>
            <StyledInput
              onFocus={() => this.props.setActiveInput("firstName")}
              value={this.state.input["firstName"] || ""}
              onChange={e => this.props.onChangeInput(e)}
            />
          </FieldWrapper>

          <FieldWrapper>
            <Label>Last Name</Label>
            <StyledInput
              onFocus={() => this.props.setActiveInput("lastName")}
              value={this.state.input["lastName"] || ""}
              onChange={e => this.props.onChangeInput(e)}
            />
          </FieldWrapper>
        </FieldRow>

        <FieldRow>
          <FieldWrapper>
            <Label>Email</Label>
            <StyledInput
              onFocus={() => this.props.setActiveInput("email")}
              value={this.state.input["email"] || ""}
              onChange={e => this.props.onChangeInput(e)}
            />
          </FieldWrapper>
        </FieldRow>

        <FieldRow>
          <Button type="submit">Submit</Button>
        </FieldRow>
      </StyledForm>
    );
  }
}

export default OSK(Form);

const StyledForm = styled.form`
  width: 600px;
  max-width: 96%;
  margin: 30px auto;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
`;

const FieldRow = styled.div`
  display: flex;
  padding: 0 5px;
`;

const FieldWrapper = styled.div`
  margin: 5px;
  flex: 1;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 17px;
  color: #333;
  border-radius: 6px;
  border: none;
`;

const Button = styled.button`
  background-color: #00f0ff;
  margin: 20px 5px 5px;
  width: 100%;
  display: block;
  font-size: 16px;
  font-weight: 700;
  color: #005672;
  height: 42px;
  border-radius: 6px;
  border: 1px solid #017d85;
`;

const Label = styled.label`
  display: block;
  font-weight: 700;
  font-size: 14px;
  color: white;
  opacity: 0.8;
  margin-bottom: 2px;
`;

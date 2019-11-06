import React, { Component } from "react";
import styled from "styled-components";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "./index.css";

class DemoForm extends Component {
  state = {
    keyboardOpen: false,
    layoutName: "default",
    inputName: "input1",
    input: {}
  };

  onChangeAll = inputObj => {
    this.setState({
      input: inputObj
    });

    console.log("Input changed", inputObj);
  };

  onKeyPress = button => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  handleShift = () => {
    let layoutName = this.state.layoutName;

    this.setState({
      layoutName: layoutName === "default" ? "shift" : "default"
    });
  };

  onChangeInput = event => {
    let inputVal = event.target.value;

    let updatedInputObj = {
      ...this.state.input,
      [this.state.inputName]: inputVal
    };

    this.setState(
      {
        input: updatedInputObj
      },
      () => {
        this.keyboard.setInput(inputVal);
      }
    );
  };

  setActiveInput = inputName => {
    this.setState(
      {
        inputName: inputName,
        keyboardOpen: true
      },
      () => {
        console.log("Active input", inputName);
      }
    );
  };

  hideKeyboard = () => {
    this.setState({ keyboardOpen: false });
  };

  handleSubmit = e => {
    const { input1, input2, input3 } = this.state.input;

    e.preventDefault();
    console.log("✅ submitted!");
    console.log("firstName:", input1);
    console.log("lastName:", input2);
    console.log("email:", input3);
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <FieldRow>
          <FieldWrapper>
            <Label>First Name</Label>
            <StyledInput
              onFocus={() => this.setActiveInput("input1")}
              value={this.state.input["input1"] || ""}
              placeholder={"Input 1"}
              onChange={e => this.onChangeInput(e)}
            />
          </FieldWrapper>

          <FieldWrapper>
            <Label>Last Name</Label>
            <StyledInput
              onFocus={() => this.setActiveInput("input2")}
              value={this.state.input["input2"] || ""}
              placeholder={"Input 2"}
              onChange={e => this.onChangeInput(e)}
            />
          </FieldWrapper>
        </FieldRow>

        <FieldRow>
          <FieldWrapper>
            <Label>Email</Label>
            <StyledInput
              onFocus={() => this.setActiveInput("input3")}
              value={this.state.input["input3"] || ""}
              placeholder={"Input 3"}
              onChange={e => this.onChangeInput(e)}
            />
          </FieldWrapper>
        </FieldRow>

        <FieldRow>
          <Button type="submit">Submit</Button>
        </FieldRow>

        <KeyboardOuterWrapper isOpen={this.state.keyboardOpen}>
          <KeyboardInnerWrapper>
            <HideButton type="button" onClick={this.hideKeyboard}>
              Close Keyboard
            </HideButton>
            <Keyboard
              keyboardRef={r => (this.keyboard = r)}
              inputName={this.state.inputName}
              layoutName={this.state.layoutName}
              onChangeAll={inputObj => this.onChangeAll(inputObj)}
              onKeyPress={button => this.onKeyPress(button)}
            />
          </KeyboardInnerWrapper>
        </KeyboardOuterWrapper>
      </StyledForm>
    );
  }
}

export default DemoForm;

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

const KeyboardOuterWrapper = styled.div`
  display: ${props => (props.isOpen ? "block" : "none")};
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

const KeyboardInnerWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const HideButton = styled.button`
  width: 100px;
  margin-left: auto;
`;

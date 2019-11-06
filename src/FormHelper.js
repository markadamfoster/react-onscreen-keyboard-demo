import React, { Component } from "react";
import styled from "styled-components";

import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

class FormHelper extends Component {
  state = {
    keyboardOpen: false,
    layoutName: "default",
    inputName: "",
    input: {}
  };

  componentDidUpdate(prevProps) {
    if (prevProps.initialValues !== this.props.initialValues) {
      const { initialValues } = this.props;

      this.setState({
        input: { ...initialValues }
      });

      Object.keys(initialValues).forEach(field => {
        this.keyboard.setInput(initialValues[field], field);
      });
    }
  }

  onChangeAll = inputObj => {
    this.setState({
      input: inputObj
    });
  };

  onKeyPress = button => {
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
    this.setState({
      inputName: inputName,
      keyboardOpen: true
    });
  };

  hideKeyboard = () => {
    this.setState({ keyboardOpen: false });
  };

  render() {
    const values = this.state.input;
    const { setActiveInput, onChangeInput } = this;

    return (
      <>
        {this.props.children({ values, setActiveInput, onChangeInput })}
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
      </>
    );
  }
}

export default FormHelper;

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

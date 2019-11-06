import React, { Component } from "react";
import Keyboard from "react-simple-keyboard";
// import PropTypes from "prop-types";
import styled from "styled-components";

// styles
import "react-simple-keyboard/build/css/index.css";
import "./onscreenkeyboardstyles.css";

export default function(ComposedComponent) {
  class OSK extends Component {
    static propTypes = {};

    state = {
      keyboardOpen: false,
      layoutName: "default",
      inputName: ""
    };

    onKeyPress = button => {
      // If you want to handle the shift and caps lock buttons
      if (button === "{shift}" || button === "{lock}") this.handleShift();
    };

    onChangeAll = inputObj => {
      this.setState({
        input: inputObj
      });
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
      console.log("setActiveInput():", inputName);
      this.setState({
        inputName: inputName,
        keyboardOpen: true
      });
    };

    hideKeyboard = () => {
      this.setState({ keyboardOpen: false });
    };

    render() {
      return (
        <Wrapper>
          <ComposedComponent
            {...this.props}
            setActiveInput={this.setActiveInput}
            onChangeInput={this.onChangeInput}
          />

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
                // theme={"hg-theme-default kc-osk"}
              />
            </KeyboardInnerWrapper>
          </KeyboardOuterWrapper>
        </Wrapper>
      );
    }
  }

  return OSK;
}

const Wrapper = styled.div``;

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

import React, { Component } from "react";
import styled from "styled-components";
import FormHelper from "./FormHelper";
import "./index.css";

class DemoForm extends Component {
  state = {
    dataLoaded: false,
    initialValues: {}
  };

  componentDidMount() {
    this.fetchFakeInitialValues();
  }

  fetchFakeInitialValues = () => {
    setTimeout(() => {
      this.setState({ dataLoaded: true });
      this.setState({
        initialValues: {
          firstName: "Mark",
          lastName: "Foster"
        }
      });
    }, 1000);
  };

  handleSubmit(e, values) {
    const { firstName, lastName, email } = values;

    e.preventDefault();
    console.log("✅ submitted!");
    console.log("firstName:", firstName);
    console.log("lastName:", lastName);
    console.log("email:", email);
  }

  render() {
    const { initialValues } = this.state;

    if (!this.state.dataLoaded) return <Loading>Loading...</Loading>;

    return (
      <FormHelper initialValues={initialValues}>
        {({ values, setActiveInput, onChangeInput }) => (
          <StyledForm onSubmit={e => this.handleSubmit(e, values)}>
            <FieldRow>
              <FieldWrapper>
                <Label>First Name</Label>
                <StyledInput
                  onFocus={() => setActiveInput("firstName")}
                  value={values.firstName || ""}
                  onChange={e => onChangeInput(e)}
                />
              </FieldWrapper>

              <FieldWrapper>
                <Label>Last Name</Label>
                <StyledInput
                  onFocus={() => setActiveInput("lastName")}
                  value={values.lastName || ""}
                  onChange={e => onChangeInput(e)}
                />
              </FieldWrapper>
            </FieldRow>

            <FieldRow>
              <FieldWrapper>
                <Label>Email</Label>
                <StyledInput
                  onFocus={() => setActiveInput("email")}
                  value={values.email || ""}
                  onChange={e => onChangeInput(e)}
                />
              </FieldWrapper>
            </FieldRow>

            <FieldRow>
              <Button type="submit">Submit</Button>
            </FieldRow>
          </StyledForm>
        )}
      </FormHelper>
    );
  }
}

export default DemoForm;

const Loading = styled.h3`
  margin-top: 100px;
  text-align: center;
  color: white;
`;

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
  border-radius: 4px;
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
  border-radius: 4px;
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

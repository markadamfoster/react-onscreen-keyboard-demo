import React, { useState } from "react";
import styled from "styled-components";

import Input from "./Input";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log("✅ submitted!");
    console.log("firstName:", firstName);
    console.log("lastName:", lastName);
    console.log("email:", email);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FieldRow>
        <FieldWrapper>
          <Label>First Name</Label>
          <Input
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </FieldWrapper>

        <FieldWrapper>
          <Label>Last Name</Label>
          <Input value={lastName} onChange={e => setLastName(e.target.value)} />
        </FieldWrapper>
      </FieldRow>

      <FieldRow>
        <FieldWrapper>
          <Label>Email</Label>
          <Input value={email} onChange={e => setEmail(e.target.value)} />
        </FieldWrapper>
      </FieldRow>

      <FieldRow>
        <Button type="submit">Submit</Button>
      </FieldRow>
    </StyledForm>
  );
}

export default Form;

const StyledForm = styled.form`
  width: 400px;
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

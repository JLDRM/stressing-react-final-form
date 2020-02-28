import React from "react";
import { Form, Field } from "react-final-form";
import { formValidation } from "../shared/form-validation";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

interface Values {
    email: string;
    password: string;
}

const onSubmit = async (values: Values) => {
    await sleep(300);
    window.alert(JSON.stringify(values, undefined, 2));
};

const LoginFinalForm: React.FC = () => {

return (
<Form
      onSubmit={onSubmit}
      initialValues={{
        email: '',
        password:''
      }}
      validate={values => formValidation.validateForm(values)}
      render={({ handleSubmit,submitting, values, form }) => (
        <form noValidate={true} onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <Field<string>
              name="email"
              component={EmailInput}
            />
          </div>
          <div>
            <label>Password</label>
            <Field<string>
              name="password"
              component={PasswordInput}
            />
          </div>
          <div>
            <button type="submit" disabled={submitting}>
              Submit
            </button>
          </div>
          <pre>{JSON.stringify(values, undefined, 2)}</pre>
        </form>
      )}
/>
)
}

export default LoginFinalForm;

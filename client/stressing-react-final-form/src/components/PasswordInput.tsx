import React from "react";
import { FieldRenderProps } from "react-final-form";

type Props = FieldRenderProps<string, any>;

const PasswordInput: React.FC<Props> = ({ input, meta }: Props) => (
  <div>
    <input type="password" {...input}/>
    {meta.touched && meta.error && <span>{meta.error}</span>}
  </div>
);

export default PasswordInput;

import React from "react";
import { FieldRenderProps } from "react-final-form";

type Props = FieldRenderProps<string, any>;

const EmailInput: React.FC<Props> = ({ input, meta }: Props) => (
    <div>
        <input type="email" {...input} placeholder="example@example.co"/>
        {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
)

export default EmailInput;

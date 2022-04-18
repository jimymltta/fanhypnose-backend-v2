import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ConsultantTitle } from "../consultant/ConsultantTitle";

export const FactureEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="consultant.id"
          reference="Consultant"
          label="Consultant"
        >
          <SelectInput optionText={ConsultantTitle} />
        </ReferenceInput>
        <TextInput label="File" source="file" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};

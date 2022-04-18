import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CONSULTANT_TITLE_FIELD } from "./ConsultantTitle";

export const ConsultantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <TextField label="Birth Date" source="birthDate" />
        <TextField label="ComeFrom" source="comeFrom" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Job" source="job" />
        <TextField label="Kids" source="kids" />
        <TextField label="Last Name" source="lastName" />
        <BooleanField label="Married" source="married" />
        <TextField label="Phone" source="phone" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="WhyTheyCome" source="whyTheyCome" />
        <ReferenceManyField
          reference="Anamnesis"
          target="ConsultantId"
          label="Anamneses"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Consultant"
              source="consultant.id"
              reference="Consultant"
            >
              <TextField source={CONSULTANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Text" source="text" />
            <TextField label="Titre" source="titre" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Facture"
          target="ConsultantId"
          label="Factures"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Consultant"
              source="consultant.id"
              reference="Consultant"
            >
              <TextField source={CONSULTANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="File" source="file" />
            <TextField label="ID" source="id" />
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Script"
          target="ConsultantId"
          label="Scripts"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Consultant"
              source="consultant.id"
              reference="Consultant"
            >
              <TextField source={CONSULTANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Text" source="text" />
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

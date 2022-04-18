import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateInput,
  BooleanInput,
  SelectInput,
} from "react-admin";

import { AnamnesisTitle } from "../anamnesis/AnamnesisTitle";
import { FactureTitle } from "../facture/FactureTitle";
import { ScriptTitle } from "../script/ScriptTitle";

export const ConsultantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <ReferenceArrayInput
          source="anamneses"
          reference="Anamnesis"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AnamnesisTitle} />
        </ReferenceArrayInput>
        <DateInput label="Birth Date" source="birthDate" />
        <TextInput label="ComeFrom" source="comeFrom" />
        <TextInput label="Email" source="email" type="email" />
        <ReferenceArrayInput
          source="factures"
          reference="Facture"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FactureTitle} />
        </ReferenceArrayInput>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Job" source="job" />
        <TextInput label="Kids" source="kids" />
        <TextInput label="Last Name" source="lastName" />
        <BooleanInput label="Married" source="married" />
        <TextInput label="Phone" source="phone" />
        <ReferenceArrayInput
          source="scripts"
          reference="Script"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScriptTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="whyTheyCome"
          label="WhyTheyCome"
          choices={[
            { label: "Hypno-relaxation", value: "HypnoRelaxation" },
            {
              label: "Liberation emotionnelle",
              value: "LiberationEmotionnelle",
            },
            {
              label: "Developpement personnel",
              value: "DeveloppementPersonnel",
            },
            { label: "Tabac", value: "Tabac" },
            { label: "Addiction", value: "Addiction" },
            { label: "Douleur", value: "Douleur" },
            { label: "TroubleSexuel", value: "TroubleSexuel" },
            { label: "Enfant", value: "Enfant" },
            { label: "PerformanceSportive", value: "PerformanceSportive" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};

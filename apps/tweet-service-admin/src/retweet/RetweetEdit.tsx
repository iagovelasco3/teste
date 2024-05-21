import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { TweetTitle } from "../tweet/TweetTitle";

export const RetweetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="tweet.id" reference="Tweet" label="Tweet">
          <SelectInput optionText={TweetTitle} />
        </ReferenceInput>
        <TextInput label="User" source="user" />
      </SimpleForm>
    </Edit>
  );
};

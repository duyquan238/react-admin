import { SimpleForm, TextInput, Edit } from "react-admin";
const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput name="name" source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="address.street" />
      <TextInput source="website" />
      <TextInput source="company.name" />
    </SimpleForm>
  </Edit>
);
export default UserEdit;

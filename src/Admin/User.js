import {
  Create,
  SimpleForm,
  List,
  Datagrid,
  TextField,
  EmailField,
  TextInput,
} from "react-admin";

export const UserList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      <TextField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput name="name" source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="address.street" />
      <TextInput source="phone" />
      <TextInput source="website" />
      <TextInput source="company.address" />
      <TextInput source="company.name" />
    </SimpleForm>
  </Create>
);

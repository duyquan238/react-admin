import { List, Datagrid, TextField, EmailField, TextInput } from "react-admin";

const UserList = () => {
  return (
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
};

export default UserList;

import { Create, SimpleForm, TextInput } from "react-admin";
import UserLanguageCreate from "./UserLanguageCreate";
import PostQuickCreateButton from "./PostQuickCreateButton";
import Button from "@mui/material/Button";
const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput name="name" source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="address.street" />
      {/* <TextInput source="phone" /> */}
      <TextInput source="website" />
      <TextInput source="company.address" />
      <TextInput source="company.name" />
      <UserLanguageCreate />
      {/* <PostQuickCreateButton /> */}
    </SimpleForm>
  </Create>
);
export default UserCreate;

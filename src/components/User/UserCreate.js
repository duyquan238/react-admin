import { Create, SimpleForm, TextInput } from "react-admin";
import UserLanguageCreate from "./UserLanguageCreate";
const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput name="name" source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="address.street" />
      <TextInput source="website" />
      <TextInput source="company.name" />
      <UserLanguageCreate />
    </SimpleForm>
  </Create>
);
export default UserCreate;

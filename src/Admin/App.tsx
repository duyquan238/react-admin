import React from "react";
import { Admin, Resource, ListGuesser, CustomRoutes } from "react-admin";
import dataProvider from "./dataProvider";
import user from "../components/User";

type Props = {};

const Ready = () => (
  <div>
    <h1>Admin ready</h1>
    <p>You can now add resources</p>
  </div>
);

const App = (props: Props) => {
  return (
    <Admin dataProvider={dataProvider} ready={Ready}>
      <Resource name="users" {...user} />
      {/* <Resource name="comments" list={ListGuesser} />
      <Resource name="users" list={ListGuesser} />
      <CustomRoutes noLayout>
      </CustomRoutes>
      <CustomRoutes noLayout>
        <Route path="/profile" element={<Profile />} />
      </CustomRoutes> */}
    </Admin>
  );
};

export default App;

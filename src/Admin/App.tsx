import React from "react";
import { Admin, Resource, ListGuesser, CustomRoutes } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import Setting from "./Setting";
import Profile from "./Profile";
import { Route } from "react-router-dom";
import dataProvider from "./dataProvider";

import { UserList, UserCreate } from "./User";
// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

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
      <Resource name="users" list={UserList} create={UserCreate} />
      {/* <Resource name="comments" list={ListGuesser} />
      <Resource name="users" list={ListGuesser} />
      <CustomRoutes noLayout>
        <Route path="/setting" element={<Setting />} />
      </CustomRoutes>
      <CustomRoutes noLayout>
        <Route path="/profile" element={<Profile />} />
      </CustomRoutes> */}
    </Admin>
  );
};

export default App;

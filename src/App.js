import * as React from "react";
import { Admin,Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from './view/Dashboard';
import authProvider from './provider/authProvider';

//const dataProvider = jsonServerProvider('http://localhost:8080');
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')
const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider}>
    <Resource name="users" list={ListGuesser} />
  </Admin>
);


export default App;
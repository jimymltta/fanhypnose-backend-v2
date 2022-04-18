import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ConsultantList } from "./consultant/ConsultantList";
import { ConsultantCreate } from "./consultant/ConsultantCreate";
import { ConsultantEdit } from "./consultant/ConsultantEdit";
import { ConsultantShow } from "./consultant/ConsultantShow";
import { ScriptList } from "./script/ScriptList";
import { ScriptCreate } from "./script/ScriptCreate";
import { ScriptEdit } from "./script/ScriptEdit";
import { ScriptShow } from "./script/ScriptShow";
import { FactureList } from "./facture/FactureList";
import { FactureCreate } from "./facture/FactureCreate";
import { FactureEdit } from "./facture/FactureEdit";
import { FactureShow } from "./facture/FactureShow";
import { AnamnesisList } from "./anamnesis/AnamnesisList";
import { AnamnesisCreate } from "./anamnesis/AnamnesisCreate";
import { AnamnesisEdit } from "./anamnesis/AnamnesisEdit";
import { AnamnesisShow } from "./anamnesis/AnamnesisShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FanHypnose Backend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Consultant"
          list={ConsultantList}
          edit={ConsultantEdit}
          create={ConsultantCreate}
          show={ConsultantShow}
        />
        <Resource
          name="Script"
          list={ScriptList}
          edit={ScriptEdit}
          create={ScriptCreate}
          show={ScriptShow}
        />
        <Resource
          name="Facture"
          list={FactureList}
          edit={FactureEdit}
          create={FactureCreate}
          show={FactureShow}
        />
        <Resource
          name="Anamnesis"
          list={AnamnesisList}
          edit={AnamnesisEdit}
          create={AnamnesisCreate}
          show={AnamnesisShow}
        />
      </Admin>
    </div>
  );
};

export default App;

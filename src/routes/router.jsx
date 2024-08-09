import Home from "../pages/Home";
import Login from "../pages/Login";
//----- Sealand panel -----
import SealandDashboard from "../pages/panels/Sealand/SealandDashboard";
import SealandDME from "../pages/panels/Sealand/SealandDME";
import SealandXanthanGum from "../pages/panels/Sealand/SealandXanthanGum";
import SealandOxygenScav from "../pages/panels/Sealand/SealandOxygenScav";
import SealandKwickSeal from "../pages/panels/Sealand/SealandKwickSeal";
//----- Mi panel -----
import MiDashboard from "../pages/panels/Mi/MiDashboard";
import MiStarchLv from "../pages/panels/Mi/MiStarchLv";
//----- Dana panel -----
import DanaDashboard from "../pages/panels/Dana/DanaDashboard";
import DanaCmc from "../pages/panels/Dana/DanaCmc";
import DanaLime from "../pages/panels/Dana/DanaLime";
import DanaPolyanionicCellulose from "../pages/panels/Dana/DanaPolyanionicCellulose";
import DanaSodaAsh from "../pages/panels/Dana/DanaSodaAsh";
import DanaStarchHt from "../pages/panels/Dana/DanaStarchHt";
import DanaStarchLv from "../pages/panels/Dana/DanaStarchLv";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/Login", element: <Login /> },

  //----- Sealand panel -----
  { path: "/sealand", element: <SealandDashboard /> },
  { path: "/sealand/dme", element: <SealandDME /> },
  { path: "/sealand/xanthanGum", element: <SealandXanthanGum /> },
  { path: "/sealand/oxygenScav", element: <SealandOxygenScav /> },
  { path: "/sealand/kwickSeal", element: <SealandKwickSeal /> },
  //----- Mi panel -----
  { path: "/mi", element: <MiDashboard /> },
  { path: "/mi/starchLv", element: <MiStarchLv /> },
  //----- Dana panel -----
  { path: "/dana", element: <DanaDashboard /> },
  { path: "/dana/cmc", element: <DanaCmc /> },
  { path: "/dana/lime", element: <DanaLime /> },
  { path: "/dana/polyanionicCellulose", element: <DanaPolyanionicCellulose /> },
  { path: "/dana/sodaAsh", element: <DanaSodaAsh /> },
  { path: "/dana/starchLv", element: <DanaStarchLv /> },
  { path: "/dana/starchHt", element: <DanaStarchHt /> },

  // ----- NotFound -----
  { path: "/*", element: <h1>Not Found</h1> },
];

export default routes;

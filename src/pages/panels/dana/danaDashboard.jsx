import PanelMenu from "../../../layouts/PanelMenu";
import PanelInfo from "../../../components/PanelInfo";
import MenuContent from "../../../db/panels/dana/menuContent/menuContent";

const DanaDashboard = () => {
  return (
    <div className="flex">
      <PanelMenu selectedKeys={["btnGroup1Item1"]} menuContent={MenuContent} />
      <div className="w-full h-screen ml-64">
        <PanelInfo
          profile="DE"
          name="Dana Energy"
          textColor="rgb(249, 103, 103)"
          textBackground="rgba(249, 103, 103, 0.3)"
        />
      </div>
    </div>
  );
};

export default DanaDashboard;

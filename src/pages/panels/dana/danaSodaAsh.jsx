import PanelMenu from "../../../layouts/PanelMenu";
import PanelInfo from "../../../components/PanelInfo";
import MenuContent from "../../../db/panels/dana/menuContent/menuContent";
import PanelTable from "../../../layouts/PanelTable";
import TableContent from "../../../db/panels/dana/tableContent/tableContent";

const DanaSodaAsh = () => {
  return (
    <div className="flex">
      <PanelMenu
        selectedKeys={["sub1Item4"]}
        openKeys={["menu1"]}
        menuContent={MenuContent}
      />
      <div className="w-full h-screen ml-64">
        <PanelInfo
          profile="DE"
          name="Dana Energy"
          textColor="rgb(249, 103, 103)"
          textBackground="rgba(249, 103, 103, 0.3)"
        />
        <PanelTable TableContentCategory={TableContent.SodaAsh} />;
      </div>
    </div>
  );
};

export default DanaSodaAsh;

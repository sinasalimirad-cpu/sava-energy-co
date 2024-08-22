import PanelMenu from "../../../layouts/PanelMenu";
import PanelInfo from "../../../components/PanelInfo";
import MenuContent from "../../../db/panels/sealand/menuContent/menuContent";
import PanelTable from "../../../layouts/PanelTable";
import TableContent from "../../../db/panels/sealand/tableContent/tableContent";

const SealandKwickSeal = () => {
  return (
    <div className="flex">
      <PanelMenu
        selectedKeys="sub5Item2"
        openKeys={["menu1", "sub5"]}
        menuContent={MenuContent}
      />
      <div className="w-full h-screen ml-64">
        <PanelInfo
          profile="S"
          name="Sealand"
          textColor="rgb(16, 59, 102)"
          textBackground="rgba(16, 59, 102, 0.3)"
        />
        <PanelTable TableContentCategory={TableContent.KwickSeal} />
      </div>
    </div>
  );
};

export default SealandKwickSeal;

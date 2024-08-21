import PanelMenu from "../../../layouts/PanelMenu";
import PanelInfo from "../../../components/PanelInfo";
import PanelTable from "../../../layouts/PanelTable";
import TableContent from "../../../db/panels/sealand/tableContent/tableContent";

const SealandPipeLaxW = () => {
  return (
    <div className="flex">
      <PanelMenu selectedKeys="sub3Item9" openKeys={["menu1", "sub3"]} />
      <div className="w-full h-screen ml-64">
        <PanelInfo
          profile="S"
          name="Sealand"
          textColor="rgb(16, 59, 102)"
          textBackground="rgba(16, 59, 102, 0.3)"
        />
        <PanelTable TableContentCategory={TableContent.PipeLaxW} />
      </div>
    </div>
  );
};

export default SealandPipeLaxW;

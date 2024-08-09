import { Menu, ConfigProvider } from "antd";
import { IconContext } from "react-icons/lib";
import { FaFilePdf } from "react-icons/fa6";
import { BiSolidDashboard } from "react-icons/bi";
import { AiFillExperiment } from "react-icons/ai";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import PanelInfo from "../../../components/panelInfo";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import styled from "styled-components";

import PDF1 from "../../../db/docs/sealand/Kwick Seal (F,M,C)/SE-KSF-030508112.pdf";
import PDF2 from "../../../db/docs/sealand/Kwick Seal (F,M,C)/SE-KSM-03050811.pdf";

const menuContent = [
  {
    key: "buttonGroup1",
    type: "group",
    children: [
      {
        key: "buttonGroup1Item1",
        label: <NavLink to="/sealand">Dashboard</NavLink>,
        icon: <BiSolidDashboard />,
      },
      // Devloper Note: add More links in this place
    ],
  },
  {
    type: "divider",
  },
  {
    key: "menu1",
    label: "QC Reports",
    icon: <FaFilePdf />,
    children: [
      {
        type: "divider",
      },
      {
        key: "sub1",
        label: "Mineral Material",
        children: [
          {
            key: "sub1Item1",
            label: "Barite 4.1 SG",
          },
          {
            key: "sub1Item2",
            label: "Barite 4.2 SG",
          },
          {
            key: "sub1Item3",
            label: "Bentonite",
          },
          {
            key: "sub1Item4",
            label: "CaCl2",
          },
          {
            key: "sub1Item5",
            label: "Hematite",
          },
          {
            key: "sub1Item6",
            label: "KCl",
          },
          {
            key: "sub1Item7",
            label: "Limestone",
          },
          {
            key: "sub1Item8",
            label: "Salt (Sodium Chloride)",
          },
        ],
      },
      {
        key: "sub2",
        label: "Polymers",
        children: [
          {
            key: "sub2Item1",
            label: "CMC H.V",
          },
          {
            key: "sub2Item2",
            label: "CMC L.V",
          },
          {
            key: "sub2Item3",
            label: "HT FLC",
          },
          {
            key: "sub2Item4",
            label: "Pac L.V",
          },
          {
            key: "sub2Item5",
            label: "Pac R",
          },
          {
            key: "sub2Item6",
            label: "PHPA",
          },
          {
            key: "sub2Item7",
            label: "Starch H.V",
          },
          {
            key: "sub2Item8",
            label: "Starch L.V",
          },
          {
            key: "sub2Item9",
            label: <NavLink to="/sealand/xanthanGum">Xanthan Gum</NavLink>,
          },
        ],
      },
      {
        key: "sub3",
        label: "Liquids",
        children: [
          {
            key: "sub3Item1",
            label: "Bio Cide",
          },
          {
            key: "sub3Item2",
            label: "Corrosion Inhibitor",
          },
          {
            key: "sub3Item3",
            label: <NavLink to="/sealand/dme">D.M.E</NavLink>,
          },
          {
            key: "sub3Item4",
            label: "Defomer",
          },
          {
            key: "sub3Item5",
            label: "Drilling Detergent",
          },
          {
            key: "sub3Item6",
            label: "Glycol MC",
          },
          {
            key: "sub3Item7",
            label: "H2S Scavenger Liquid",
          },
          {
            key: "sub3Item8",
            label: <NavLink to="/sealand/oxygenScav">Oxygen Scav</NavLink>,
          },
          {
            key: "sub3Item9",
            label: "Pipe Lax W",
          },
          {
            key: "sub3Item10",
            label: "Temperature Stabilizer",
          },
          {
            key: "sub3Item11",
            label: "Water Based Mud Liquid Lubricant",
          },
        ],
      },
      {
        key: "sub4",
        label: "Chemicals",
        children: [
          {
            key: "sub4Item1",
            label: "Caustic Soda",
          },
          {
            key: "sub4Item2",
            label: "Citric ACID",
          },
          {
            key: "sub4Item3",
            label: "H2S Scav.(Zinc Carbonate)",
          },
          {
            key: "sub4Item4",
            label: "H2S Scav.(Zinc Oxide)",
          },
          {
            key: "sub4Item5",
            label: "Lime",
          },
          {
            key: "sub4Item6",
            label: "Potassium hydroxide",
          },
          {
            key: "sub4Item7",
            label: "Soda Ash",
          },
          {
            key: "sub4Item8",
            label: "Sodium Bicarbonate",
          },
        ],
      },
      {
        key: "sub5",
        label: "LCM",
        children: [
          {
            key: "sub5Item1",
            label: "CaCo3 (F,M,C)",
          },
          {
            key: "sub5Item2",
            label: (
              <NavLink to="/sealand/kwickSeal">Kwick Seal (F,M,C)</NavLink>
            ),
          },
          {
            key: "sub5Item3",
            label: "Mica (F,M,C)",
          },
          {
            key: "sub5Item4",
            label: "Oyster-Shall (F,M,C)",
          },
          {
            key: "sub5Item5",
            label: "Walnut Shell",
          },
        ],
      },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "buttonGroup2",
    type: "group",
    children: [
      {
        key: "buttonGroup2Item1",
        label: "Equipments Inventory",
        icon: <AiFillExperiment />,
        disabled: true,
      },
      {
        key: "buttonGroup1Item2",
        label: <NavLink to="/">Exit</NavLink>,
        icon: <BsFillDoorOpenFill />,
      },
      // Devloper Note: add More links in this place
    ],
  },
];

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "rgb(219, 237, 236)",
  },
}));

function createData(id, batchNo, date, file) {
  return { id, batchNo, date, file };
}

const rows = [
  createData(
    1,
    "SE-KSF-030508112",
    "1403-05",
    <a href={PDF1}>
      <FaFilePdf style={{ fontSize: 24 }} />
    </a>
  ),
  createData(
    2,
    "SE-KSM-03050811",
    "1403-05",
    <a href={PDF2}>
      <FaFilePdf style={{ fontSize: 24 }} />
    </a>
  ),
];

export default function SealandKwickSeal() {
  return (
    <div className="flex">
      <IconContext.Provider value={{ style: { fontSize: 16 } }}>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "Roboto",
            },
            components: {
              Menu: {
                itemColor: "Black",
                itemDisabledColor: "rgba(80, 80, 80, 0.5)",
                itemHoverBg: "rgb(219, 237, 236)",
                itemHoverColor: "#505050",
                itemSelectedBg: "rgb(219, 237, 236)",
                itemSelectedColor: "#000",
                subMenuItemBg: "rgba(219, 237, 236, 0.7)",
              },
            },
          }}
        >
          <Menu
            className="min-w-64 max-w-64 h-screen overflow-auto bg-cyan"
            mode="inline"
            items={menuContent}
            theme="light"
            defaultSelectedKeys={["sub5Item2"]}
            defaultOpenKeys={["menu1", "sub5"]}
          />
        </ConfigProvider>
      </IconContext.Provider>
      <div id="layer" className="w-full">
        <PanelInfo profile="S" name="Sealand" kind="Administrator" />
        {/* Table */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Batch&nbsp;No</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>File</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.batchNo}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.file}</TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

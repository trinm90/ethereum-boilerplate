import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "17px",
        fontWeight: "500",
        width: "100%",
        justifyContent: "center",
      }}
      defaultSelectedKeys={[pathname]}
    >
      <Menu.Item key="/nftMarket">
        <NavLink to="/nftMarket">NFT Market</NavLink>
      </Menu.Item>
      <Menu.Item key="/nftBalance">
        <NavLink to="/nftBalance">Your collection</NavLink>
      </Menu.Item>
      <Menu.Item key="/transactions">
        <NavLink to="/transactions">Transactions</NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default MenuItems;

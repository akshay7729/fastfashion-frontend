import { HeatMapOutlined } from "@ant-design/icons";
const Logo = ({ size, color }) => {
  return (
    <HeatMapOutlined
      className={`${color ? `text-${color}` : ""}`}
      style={{ fontSize: size }}
    />
  );
};

export default Logo;

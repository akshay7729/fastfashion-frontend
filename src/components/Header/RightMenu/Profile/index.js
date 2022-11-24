import {
  UserOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import UserDropdown from "./UserDropdown";

const Profile = () => {
  return (
    <div className="flex gap-4">
      <UserDropdown />
      <div className="flex flex-col items-center gap-1 text-ffBlack">
        <div>
          <HeartOutlined style={{ fontSize: "20px" }} />
        </div>
        <div className="text-xs">Wishlist</div>
      </div>
      <div className="flex flex-col items-center gap-1 text-ffBlack">
        <div>
          <ShoppingCartOutlined style={{ fontSize: "20px" }} />
        </div>
        <div className="text-xs">Cart</div>
      </div>
    </div>
  );
};

export default Profile;

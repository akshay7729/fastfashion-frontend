import {
  InstagramFilled,
  TwitterOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
const RightMenu = () => {
  return (
    <div className="flex gap-3 items-center">
      <div>
        <InstagramFilled
          className="text-ffBlack"
          style={{ fontSize: "20px" }}
        />
      </div>
      <div>
        <TwitterOutlined
          className="text-ffBlack"
          style={{ fontSize: "22px" }}
        />
      </div>
      <div>
        <YoutubeFilled className="text-ffBlack" style={{ fontSize: "22px" }} />
      </div>
      <div className="ml-4">Hi! Akshay</div>
    </div>
  );
};

export default RightMenu;

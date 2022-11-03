import { MailOutlined, LockOutlined, HeatMapOutlined } from "@ant-design/icons";
import Logo from "../../../Logo";

const LoginSection = () => {
  return (
    <div className="px-8 py-10 flex flex-col justify-center h-full items-center gap-5">
      {/* <HeatMapOutlined className="text-ffPurple" style={{ fontSize: "35px" }} /> */}
      <Logo size="35px" color="ffPurple" />
      <p className="mb-10 text-xl text-ffPurple">Fast Fashion</p>
      <div className="w-full">
        <div className="absolute ml-3 mt-[7px]">
          <MailOutlined
            className="text-ffPurple"
            style={{ fontSize: "20px" }}
          />
        </div>
        <input
          type="email"
          placeholder="Enter email"
          className="form-control block w-full px-4 py-2 pl-10 font-normal text-gray-700 border-2 border-ffPurple rounded"
        />
      </div>
      <div className="w-full">
        <div className="absolute ml-3 mt-[7px]">
          <LockOutlined
            className="text-ffPurple"
            style={{ fontSize: "20px" }}
          />
        </div>
        <input
          type="password"
          placeholder="Enter password"
          className="form-control block w-full px-4 py-2 pl-10 font-normal text-gray-700 border-2 border-ffPurple rounded"
        />
      </div>
      <button className="border px-12 hover:px-14 py-2 cursor-pointer bg-ffPurple rounded-md text-white ease-in duration-300">
        Login
      </button>
    </div>
  );
};

export default LoginSection;

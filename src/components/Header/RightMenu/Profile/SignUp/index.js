import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import Logo from "../../../Logo";
import { v4 as uuidv4 } from "uuid";
import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";

const SignUpSection = () => {
  const GET_USER = gql`
    query {
      greeting(name: "Akshay")
      user(id: 2, phoneNumber: 7699496630) {
        id
        firstName
        lastName
        email
        phoneNumber
        userName
        password
      }
    }
  `;
  const { loading, data, error } = useQuery(GET_USER);
  const handleSignup = () => {
    console.log("loading", loading);
    console.log("data", data);
    console.log("error", error);
  };

  return (
    <div className="px-8 py-10 flex flex-col justify-center h-full items-center gap-5">
      <Logo size="35px" color="ffPrimaryColor" />
      <p className="mb-10 text-xl text-ffPrimaryColor">Create an account</p>
      <div className="w-full">
        <div className="absolute ml-3 mt-[7px]">
          <UserOutlined
            className="text-ffPrimaryColor"
            style={{ fontSize: "20px" }}
          />
        </div>
        <input
          type="string"
          placeholder="Enter Username"
          className="form-control block w-full px-4 py-2 pl-10 font-normal text-gray-700 border-2 border-ffPrimaryColor rounded"
        />
      </div>
      <div className="w-full">
        <div className="absolute ml-3 mt-[7px]">
          <UserOutlined
            className="text-ffPrimaryColor"
            style={{ fontSize: "20px" }}
          />
        </div>
        <input
          type="string"
          placeholder="Enter Firstname"
          className="form-control block w-full px-4 py-2 pl-10 font-normal text-gray-700 border-2 border-ffPrimaryColor rounded"
        />
      </div>
      <div className="w-full">
        <div className="absolute ml-3 mt-[7px]">
          <UserOutlined
            className="text-ffPrimaryColor"
            style={{ fontSize: "20px" }}
          />
        </div>
        <input
          type="string"
          placeholder="Enter Lastname"
          className="form-control block w-full px-4 py-2 pl-10 font-normal text-gray-700 border-2 border-ffPrimaryColor rounded"
        />
      </div>
      <div className="w-full">
        <div className="absolute ml-3 mt-[7px]">
          <MailOutlined
            className="text-ffPrimaryColor"
            style={{ fontSize: "20px" }}
          />
        </div>
        <input
          type="email"
          placeholder="Enter email"
          className="form-control block w-full px-4 py-2 pl-10 font-normal text-gray-700 border-2 border-ffPrimaryColor rounded"
        />
      </div>
      <div className="w-full">
        <div className="absolute ml-3 mt-[7px]">
          <LockOutlined
            className="text-ffPrimaryColor"
            style={{ fontSize: "20px" }}
          />
        </div>
        <input
          type="password"
          placeholder="Enter password"
          className="form-control block w-full px-4 py-2 pl-10 font-normal text-gray-700 border-2 border-ffPrimaryColor rounded"
        />
      </div>
      <button
        className="border px-12 hover:px-14 py-2 cursor-pointer bg-ffPrimaryColor rounded-md text-white ease-in duration-300"
        onClick={() => handleSignup()}
      >
        Sign Up
      </button>
      <br />
      <br />
      <p>
        Already have an Account?{" "}
        <button className="text-ffPrimaryColor">Log in</button>
      </p>
    </div>
  );
};

export default SignUpSection;

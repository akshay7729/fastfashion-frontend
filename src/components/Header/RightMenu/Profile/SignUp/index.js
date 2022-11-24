import {
  MailOutlined,
  LockOutlined,
  UserOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import Logo from "../../../Logo";
import { v4 as uuidv4 } from "uuid";
import { gql, useQuery, useLazyQuery } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";
import _debounce from "lodash/debounce";

const SignUpSection = () => {
  const [username, setUsername] = useState([]);
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [password, setPassword] = useState([]);
  const GET_USER = gql`
    query GET_USER($name: String, $phoneNumber: Float, $getId: Float) {
      greeting(name: $name)
      user(id: $getId, phoneNumber: $phoneNumber) {
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

  // const getUsername = useCallback(_debounce(setSignUpdate(["hello"])), []);

  const handleSignup = () => {
    if (username && firstName && lastName && email && password && phone) {
      const emailRegex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      if (emailRegex.test(email)) {
        const userDetails = {
          username,
          firstName,
          lastName,
          email,
          phone,
          password,
        };
        console.log("userDetails", userDetails);
        submitSignup();
      } else {
        console.log("email is not valid");
      }
    } else {
      console.log("Some error occurred");
    }
  };

  const [submitSignup, { called, loading, data }] = useLazyQuery(GET_USER, {
    variables: { name: "Akshay", phoneNumber: 7699496630, getId: 2 },
  });

  if (called && loading) return console.log("Loading");

  if (data) {
    console.log("data 1", data);
  }

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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
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
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="form-control block w-full px-4 py-2 pl-10 font-normal text-gray-700 border-2 border-ffPrimaryColor rounded"
        />
      </div>
      <div className="w-full">
        <div className="absolute ml-3 mt-[7px]">
          <MobileOutlined
            className="text-ffPrimaryColor"
            style={{ fontSize: "20px" }}
          />
        </div>
        <input
          type="string"
          placeholder="Mobile"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

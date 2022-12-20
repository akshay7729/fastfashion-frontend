import { MailOutlined, LockOutlined, HeatMapOutlined } from "@ant-design/icons";
import { useState } from "react";
import Logo from "../../../Logo";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import FacebookLogin from "react-facebook-login";

const LoginSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { data: session } = useSession();

  console.log("login session", session);

  const handleLogin = () => {
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!email.length) {
      alert("Please enter email");
      return setError("Please enter email");
    }

    if (emailRegex.test(email)) {
      if (!password.length) {
        alert("Please enter password");
        return setError("Please enter email");
      }

      if (!email || !password) {
        alert("Email or password is incorrect");
        return setError("Email or password is incorrect");
      }

      // api call
      submitLogin(email, password);
    } else {
      alert("Please enter a valid email");
      return setError("Please enter a valid email");
    }
  };

  const submitLogin = (email, password) => {
    console.log("email", email);
    console.log("password", password);
  };

  const responseFacebook = (response) => {
    console.log("fb response".response);
  };

  const componentClicked = () => {
    console.log("component clicked");
  };

  return (
    <div className="px-8 py-10 flex flex-col justify-center h-full items-center gap-5">
      {/* <HeatMapOutlined className="text-ffBlack" style={{ fontSize: "35px" }} /> */}
      <Logo size="35px" color="ffBlack" />
      <p className="mb-10 text-xl text-ffBlack">Fast Fashion</p>
      <div className="w-full">
        <div className="absolute ml-3 mt-[7px]">
          <MailOutlined className="text-ffBlack" style={{ fontSize: "20px" }} />
        </div>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control block w-full px-4 py-2 pl-10 font-normal text-gray-700 border-2 border-ffBlack rounded"
        />
      </div>
      <div className="w-full">
        <div className="absolute ml-3 mt-[7px]">
          <LockOutlined className="text-ffBlack" style={{ fontSize: "20px" }} />
        </div>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control block w-full px-4 py-2 pl-10 font-normal text-gray-700 border-2 border-ffBlack rounded"
        />
      </div>
      <button
        className="border px-12 hover:px-14 py-2 cursor-pointer bg-ffBlack rounded-md text-white ease-in duration-300"
        onClick={() => handleLogin()}
      >
        Login
      </button>
      {session ? "" : <p>OR</p>}
      {session ? "" : <p>Sign In using following</p>}
      <div className="flex gap-4 text-center">
        <div>
          {session ? (
            <button onClick={() => signOut()}>Sign Out</button>
          ) : (
            <button onClick={() => signIn()}>
              <Image
                className="w-[50px] h-full"
                width={100}
                height={100}
                src="/img/logos/google.png"
                alt="Login from Google"
              />
            </button>
          )}
        </div>
        {/* <div>
          <FacebookLogin
            appId="715038016512592"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook}
          />
        </div> */}
      </div>
    </div>
  );
};

export default LoginSection;

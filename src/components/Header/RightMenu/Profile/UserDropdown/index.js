import { UserOutlined, DownOutlined, LogoutOutlined } from "@ant-design/icons";
import { Fragment, useState } from "react";
import LoginSection from "../Login";
import Image from "next/image";
import SignUpSection from "../SignUp";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const UserDropdown = () => {
  const { data: session } = useSession();

  if (session) {
    console.log("session", session);
  }

  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      {session ? (
        <div className="group cursor-pointer">
          <div className="grid justify-items-center gap-1">
            <img
              className="rounded-full"
              width="25"
              src={session.user.image}
              alt="Profile Img"
            />
            <div className="text-ffBlack text-xs">
              Hi {session.user.name.split(" ")[0]}
            </div>
          </div>
          <div className="absolute hidden group-hover:block bg-white z-100 text-ffBlack p-6 gap-4">
            <ul>
              <li>Orders</li>
              <li>Wishlist</li>
              <li>Gift Cards</li>
              <li>Contact Us</li>
              <li>
                <button onClick={() => signOut()}>Log Out</button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <button
          className="flex flex-col items-center gap-1 text-ffBlack"
          onClick={() => setShowModal(true)}
        >
          <UserOutlined style={{ fontSize: "20px" }} />
          <div className="text-xs">Log In</div>
        </button>
      )}
      {/* <button
        className="flex flex-col items-center gap-1 text-ffBlack"
        onClick={() => setShowModal(true)}
      >
        <div>
          {session ? (
            <img
              className="rounded-full"
              width="25"
              src={session.user.image}
              alt="Profile Img"
            />
          ) : (
            <UserOutlined style={{ fontSize: "20px" }} />
          )}
        </div>
        <div className="text-xs">
          {session ? `Hi ${session.user.name.split(" ")[0]}` : "Log In"}
        </div>
      </button> */}

      {/* if not logged in */}
      <div
        id="modal"
        aria-hidden="true"
        className={`${
          showModal ? "" : "hidden"
        } fixed bg-[rgba(31,32,41,.85)] top-0 bottom-0 left-0 right-0
                  overflow-x-hidden overflow-y-auto flex items-center justify-center z-10     
                `}
      >
        <div
          className={`relative flex w-full bg-white items-center text-ffBlack max-w-[50%] rounded-lg`}
        >
          {/* Modal Header */}
          <button
            type="button"
            className="absolute cursor-pointer right-0 top-0 text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center z-40"
            data-modal-toggle="defaultModal"
            onClick={() => setShowModal(false)}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          {/* modal body */}
          <div className="relative flex w-full min-h-[200px]">
            <div className="flex-1">
              <div className="bg-[rgba(0,0,0,0.5)] h-full absolute -z-50"></div>
              <Image
                className="w-full h-full"
                width={500}
                height={500}
                src="/img/10.jpg"
                alt="Profile"
              />
            </div>
            {/* Login Section */}
            <div className="flex-1">
              <LoginSection />
              {/* <SignUpSection /> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserDropdown;

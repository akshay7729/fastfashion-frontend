import { UserOutlined } from "@ant-design/icons";
import { Fragment, useState } from "react";

const UserDropdown = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <button
        className="flex flex-col items-center gap-1"
        onClick={() => setShowModal(true)}
      >
        <div>
          <UserOutlined style={{ fontSize: "20px" }} />
        </div>
        <div className="text-xs">Profile</div>
      </button>

      {/* if not logged in */}
      <div
        id="modal"
        aria-hidden="true"
        className={`${
          showModal ? "" : "hidden"
        } fixed bg-[rgba(31,32,41,.85)] top-0 bottom-0 left-0 right-0
                  overflow-x-hidden overflow-y-auto flex items-center justify-center     
                `}
      >
        <div
          className={`relative flex w-full bg-white items-center text-black max-w-[50%] rounded-lg`}
        >
          {/* Modal Header */}
          <button
            type="button"
            className="absolute right-0 top-0 text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
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
              <div className="bg-[rgba(0,0,0,0.5)] w-[50%] h-full absolute"></div>
              <img src="./img/8.jpg" />
            </div>
            <div className="flex-1">2</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserDropdown;
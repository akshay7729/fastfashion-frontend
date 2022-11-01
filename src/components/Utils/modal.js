import { useState, useEffect } from "react";

const Modal = ({ active }) => {
  const [closeModal, setCloseModal] = useState(false);
  return (
    <div
      id="modal"
      aria-hidden="true"
      className={`${
        closeModal || !active ? "hidden" : ""
      } fixed bg-[rgba(31,32,41,.75)] top-0 bottom-0 left-0 right-0
                  overflow-x-hidden overflow-y-auto flex items-center justify-center     
                `}
    >
      <div
        className={`relative flex w-full bg-white items-center text-black max-w-[50%] rounded-lg min-h-[20%]`}
      >
        {/* Modal Header */}
        <button
          type="button"
          className="absolute right-0 top-0 text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          data-modal-toggle="defaultModal"
          onClick={() => setCloseModal(true)}
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
      </div>
    </div>
  );
};

export default Modal;

import React from "react";

const View = (props) => {
  return (
    <>
      <h3 className="text-xl mt-6">
        Temperature (T): <b>{props.stefan_temp} K </b>
      </h3>
      <button
        className="border border-blue-700 text-md px-4  p-1 rounded-md mt-2"
        type="button"
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </>
  );
};

export default View;

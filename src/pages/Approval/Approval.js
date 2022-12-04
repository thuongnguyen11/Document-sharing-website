import React, { useEffect, useState } from "react";
import {
  Link
} from "react-router-dom";

import './Approval.css';
import { documents } from "../../Data"

function Approval() {


  const renderDocToBeApproved = () => {
    return documents?.map((doc, index) => {
      return (
        <li key={index} className="flex justify-between border-2 mb-5 pl-0 ">
          <div className="flex w-3/4 ">
            <div className="w-1/5  mr-7 img-item" 
            style={{
              backgroundImage: `url(${(doc.img)})`
            }}>
            </div>
            <div className="text-gray-900 flex-start py-7">
              <div className="flex text-xl font-bold">
                <h1 className="">{doc.fileName}</h1>
                <h1 className=" px-2"> - </h1>
                <h1 className="">Lập trình ứng dụng web</h1>
              </div>
              <div className="text-gray-500 text-sm">{"Người đăng: " + doc.user}</div>
              <div className="text-gray-500 text-sm">{"Ngày đăng: " + doc.uploadDate}</div>
              <Link className="text-detail">Xem chi tiết</Link>


            </div>
          </div>
          <div className="flex flex-col justify-center">
            <button className="btn-approval">Chấp nhận</button>
            <button className="btn-approval">Từ chối</button>
          </div>



        </li>

      )
    });
  };
  return (
    <div className="px-40 mt-20">{renderDocToBeApproved()}</div>
  );
}
export default Approval;
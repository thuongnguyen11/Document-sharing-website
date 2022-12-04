import React, { useEffect, useState } from "react";
import {
  Link
} from "react-router-dom";
import logo from '../../assets/logo.png';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

import './Footer.css';

function Footer() {
  return (
    <div className="bg-green-800 mt-10 py-8 flex flex-col">
      <div className=" flex justify-around">
        <div className="w-1/2">
          <div className="text-white font-extrabold flex items-center ml-5">
            <Link to="/" className="text-xl flex items-center ">
              KH <img src={logo} alt="logo" width={28} height={28} className="mr-1" /> TÀI LIỆU UIT</Link>
          </div>
          <div className="flex text-white items-center">
            <AutoStoriesIcon sx={{ fontSize: 100, marginRight: 2 }} />
            <div className="title-footer">KHO TÀI LIỆU UIT được phát triển bởi nhóm 7. Là một website tổng hợp tài liệu một cách khách quan, đáng tin cậy cho sinh viên UIT. Mọi bài viết đều miễn phí và sẽ mãi là như vậy</div>
          </div>
        </div>
        <ul className="flex flex-col justify-between ">
          <li className="infor-footer">
            <LocationOnIcon />
            <div className="title-item">Đại học công nghệ thông tin</div>
          </li>
          <li className="infor-footer">
            <LocalPhoneIcon />
            <div className="title-item">0978827442</div>
          </li>
          <li className="infor-footer">
            <EmailIcon />
            <div className="title-item">khotailieuUIT@uit.edu.vn</div>
          </li>
          <li className="infor-footer">
            <LanguageIcon />
            <div className="title-item">khotailieuUIT.com.vn</div>
          </li>
        </ul>
      </div>
      <div className="text-center italic text-white font-thin text-xs">Copyright © 2022 by Nhom 7</div>

    </div>

  );
}
export default Footer;
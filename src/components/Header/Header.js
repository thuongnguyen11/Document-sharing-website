import React, { useEffect, useState } from "react";
import {
    Link
} from "react-router-dom";

import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import './Header.css';
import logo from '../../assets/logo.png'
export default function Header() {
    return (
        <nav className="bg-header nav shadow-md ">
            <div className="text-white font-extrabold flex items-center">
                <Link to="/" className="text-xl flex items-center">
                    KH <img src={logo} alt="logo" width={28} height={28} className="mr-1" /> TÀI LIỆU UIT</Link>

            </div>
            <ul className="flex items-center">
                <li>
                    <Link to="/notification">
                        <NotificationsActiveIcon />
                    </Link>
                </li>
                <li>
                    <Link to="/upload">
                        <button className="upload">Tải lên
                            <FileUploadIcon sx={{ fontSize: 20 }} /></button>
                    </Link>

                </li>
                <li>
                    <Link to="/sign-in">Đăng nhập</Link>
                </li>
                <li className="border-l-2">
                    <Link to="/sign-up">Đăng ký</Link>
                </li>
            </ul>
        </nav>
    );
}
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {departments} from '../../Data';
import './SideBar.css';

function SideBar() {
    const listDepartment = departments.map((department, index) => {
        return (
            <li key={index} className="item">
                <Link to={`/departments/${department.id}`}>{department.name}</Link>
            </li>
        )
    });

    return (
        <div className="side-bar">
            <div className="text-xl font-bold mb-4">Danh mục</div>
            <ul className="list">{listDepartment}</ul>
        </div>
    );
}
export default SideBar;
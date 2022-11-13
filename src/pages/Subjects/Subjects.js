import { Search } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import { subjects } from "../../Data";
import { toLowerCaseNonAccentVietnamese } from "../../helper";

import FolderIcon from '@mui/icons-material/Folder';

import './Subjects.css';
import SearchBar from "../../components/SearchBar/SearchBar";

function Subjects() {
    let location = useLocation();
    let { departmentId } = useParams();
    const listSubject = subjects.filter((subject) => subject.departmentId === departmentId);
    useEffect(() => {
        const category = location.pathname.split('/').reverse()[0];
        const subject = subjects.filter((subject) => subject.departmentId === category);
        setDisplaySubjects(subject);

    }, [location]);


    const [displaySubjects, setDisplaySubjects] = useState(listSubject);
    const [search, setSearch] = useState('');

    const onSearchChange = (e) => {
        setSearch(e);
        const unsigned = toLowerCaseNonAccentVietnamese(e);
        filterSubject(unsigned);
    }

    const filterSubject = (text) => {
        const searchSubject = listSubject.filter(s => toLowerCaseNonAccentVietnamese(s.name).includes(text));
        setDisplaySubjects(searchSubject)
    }


    const renderSubjects = () => {
        return displaySubjects.map((subject, index) => {
            return (
                <li key={index} className="container">
                    <Link to={`./subjects/${subject.id}`} >
                        <div className="subject-item">
                            <img
                                className="image"
                                src={subject.img}
                                alt="subject"
                            />
                            <div className="item-bg"></div>
                            <div className="z-40 text-white">{subject.name}</div>
                            <FolderIcon className="absolute bottom-2 left-4 text-white" />
                        </div>
                    </Link>
                </li>

            )
        });
    };

    return (
        <div>
            <div className="background-header">
                <div className="background"></div>
                <div className="slogan">Khám phá, chia sẻ, học hỏi</div>
                <SearchBar onChange={onSearchChange} />
            </div>
            <section className="flex" >
                <SideBar />
                <div className="article">
                    <div className="new-doc">Môn học</div>
                    <ul className="flex flex-wrap w-full">{renderSubjects()}</ul>
                </div>
            </section>
        </div>

    );
}
export default Subjects;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import { documents } from "../../Data";
import './Home.css';

import FolderIcon from '@mui/icons-material/Folder';


function Home() {

  const [search, setSearch] = useState('');

  const abc = (e) => {
    setSearch(e);
  }
  const renderNewDocuments = () => {
    return documents.map((doc, index) => {
      return (
        <li key={index} className="new-doc-container">
          <Link to={``} >
            <div className="new-doc-item">
              <img
                className="image"
                src={doc.img}
                alt="new-doc"
              />
              <div className="item-bg"></div>
              <div className="z-40 text-white text-xl font-semibold">{doc.fileName}</div>
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
        <SearchBar onChange={abc} />
      </div>

      <section className="flex" >
        <SideBar />
        <div className="article">
          {search}
          <div className="new-doc">Tài liệu mới nhất</div>
          <ul className="flex flex-wrap w-full">{renderNewDocuments()}</ul>

        </div>
      </section>
    </div>

  );
}
export default Home;
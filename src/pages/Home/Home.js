import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import './Home.css';

function Home() {

    const [search, setSearch] = useState('');

  const latest_document = [
    { fileName: 'Tài liệu ôn tập giữa kỳ', size: '80.12KB', type: 'word' },
    { fileName: 'Tài liệu ôn tập giữa kỳ', size: '80.12KB', type: 'word' },
    { fileName: 'Tài liệu ôn tập giữa kỳ', size: '80.12KB', type: 'word' },
    { fileName: 'Tài liệu ôn tập giữa kỳ', size: '80.12KB', type: 'word' },

  ];

  const abc = (e) => {
    setSearch(e);
  }

  return (
    <div>
      <div className="background-header">
        <div className="background"></div>
        <div className="slogan">Khám phá, chia sẻ, học hỏi</div>
        <SearchBar onChange={abc}/>
      </div>

      <section className="flex" >
        <SideBar />
        <div className="article">
          {search}
          <div className="new-doc">Tài liệu mới nhất</div>
        </div>
      </section>
    </div>

  );
}
export default Home;
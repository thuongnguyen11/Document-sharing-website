import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import SideBar from "../../components/SideBar/SideBar";
import './Documents.css';
import { documentTypes } from "../../Data";
import { documents } from "../../Data";
import { useLocation } from "react-router-dom";

import * as _ from 'lodash';

function Documents() {
    let location = useLocation();
    let { subjectId } = useParams();

    const listDocument = documents.filter((document) => document.subjectId === subjectId);

    useEffect(() => {
        const subject_id = location.pathname.split('/').reverse()[0];
        const document = documents.filter((document) => document.subjectId === subject_id);
        setDisplayDocuments(document);
        console.log(displayDocuments);


    }, [location]);

    const [displayDocuments, setDisplayDocuments] = useState(listDocument);

    const doc_groups = _.groupBy(displayDocuments, 'type');

    const listGroup = Object.entries(doc_groups).map((group, index) => {
        const typeName = documentTypes.find(d => d.id === group[0]).name;
        return <div key={index}>
            <h3>{typeName}</h3>
            <ul>
                {group[1].map(doc => <li key={doc.id}>{doc.fileName} - {doc.id}</li>)}
            </ul>
        </div>
    });


    return (
        <div>
            <div className="background-header-subject">
                <div className="background-subject"></div>
                <div className="title">
                    <div className="subject-title">Khám phá, chia sẻ, học hỏi</div>
                </div>
            </div>

            <section className="flex" >
                <SideBar />
                <div className="article">
                    <div className="new-doc"></div>
                    {listGroup}
                </div>
            </section>
        </div>
    );
}
export default Documents;
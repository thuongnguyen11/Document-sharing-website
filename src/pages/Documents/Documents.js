import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import SideBar from "../../components/SideBar/SideBar";
import './Documents.css';
import { documentTypes } from "../../Data";
import { documents } from "../../Data";
import { subjects } from "../../Data";
import { useLocation } from "react-router-dom";

import * as _ from 'lodash';

function Documents() {
    let location = useLocation();
    let { subjectId } = useParams();

    const [subject, setSubject] = useState([]);

    const listDocument = documents.filter((document) => document.subjectId === subjectId);

    useEffect(() => {
        const subject_id = location.pathname.split('/').reverse()[0];
        const document = documents.filter((document) => document.subjectId === subject_id);
        setDisplayDocuments(document);

        const subj = subjects.filter((subject) => subject.id === subject_id);
        setSubject(subj[0]);


    }, [location]);

    const [displayDocuments, setDisplayDocuments] = useState(listDocument);

    const doc_groups = _.groupBy(displayDocuments, 'type');

    const listGroup = Object.entries(doc_groups).map((group, index) => {
        const typeName = documentTypes.find(d => d.id === group[0]).name;
        return (
            <div key={index} className="doc-items">
                <h3 className=" text-xl font-medium">{typeName}</h3>
                <ul>
                    {group[1].map(doc => {
                        return (
                                <li className="doc-item" key={doc.id}>
                                    <div>{doc.fileName + " - " + doc.size}</div>
                                    <div>{doc.uploadDate}</div>
                                    
                                </li>

                        )
                    })}
                </ul>
            </div>
        )

    });


    return (
        <div>
            <div className="bg-subject">
                <img
                    className="bg-subj"
                    src={subject.img}
                    alt="subject"
                />
                <div className="bg-subject-blur"></div>
                <div className="z-40 text-white text-4xl">{subject.name}</div>
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
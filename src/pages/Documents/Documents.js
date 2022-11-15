// Libraries
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as _ from 'lodash';
// Components
import SideBar from "../../components/SideBar/SideBar";
import './Documents.css';
// Data
import { subjects } from "../../Data";
import { documentType } from "../../data/document";

// ---------- MAIN ----------
function Documents() {
    //  Fetch Data
    useEffect(() => {
        const fetchDataDocument = async () => {
            const response = await fetch('http://103.75.185.190:4444/documents/');
            const data = await response.json()

            const docs = data.filter(doc => doc.subjectID == subjectId);
            setDocuments(docs);
        };
        fetchDataDocument();
    }, []);

    const [documents, setDocuments] = useState([]);
    let { subjectId } = useParams();
    const [subject, setSubject] = useState([]);

    useEffect(() => {
        const subj = subjects.find((subject) => subject.id === subjectId);
        setSubject(subj);
    }, []);

    const renderDocs = () => {
        return documentType.map((type, index) => {
            const filtered = documents.filter(doc => type.id == doc.type);
            {
                return filtered.length > 0
                    ? <div key={index} className="doc-items">
                        <h3 className="text-xl font-medium">{type.name}</h3>
                        <ul>
                            {filtered.map((doc) => {
                                return (
                                    <li className="doc-item" key={doc.id}>
                                        <div>{doc.name + " - " + doc.size}</div>
                                        <div>{doc.date}</div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    : <></>
            }
        })
    }

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
                    {renderDocs()}

                </div>
            </section>
        </div>
    );
}
export default Documents;


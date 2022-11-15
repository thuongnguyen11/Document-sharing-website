// Libraries
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify';
import FileUploadIcon from '@mui/icons-material/FileUpload';
// Components
//Data
import { subjects } from "../../Data";
import { documentTypes } from "../../Data";
import './Upload.css';
import { documentType } from "../../data/document";
import axios from "axios";
import { UploadFile } from "@mui/icons-material";


class Thumb extends React.Component {
    state = {
        loading: false,
        thumb: undefined,
    };

    componentWillReceiveProps(nextProps) {
        if (!nextProps.file) { return; }

        this.setState({ loading: true }, () => {
            let reader = new FileReader();

            reader.onloadend = () => {
                this.setState({ loading: false, thumb: reader.result });
            };

            reader.readAsDataURL(nextProps.file);
        });
    }

    render() {
        const { file } = this.props;
        const { loading, thumb } = this.state;

        if (!file) { return null; }

        if (loading) { return <p>loading...</p>; }

        return (<img src={thumb}
            alt={file.name}
            className="img-thumbnail mt-2"
            height="auto"
            width={"100%"} />);
    }
}

function Upload() {
    const formik = useFormik({
        initialValues: {
            name: '',
            type: '',
            subjectID: '',
            category: '',
            file: null
        },
        validationSchema: Yup.object().shape({
            name: Yup.string()
                .required("Bắt buộc!"),
            type: Yup.string()
                .required("Bắt buộc!"),
            subjectID: Yup.string()
                .required("Bắt buộc!"),
            category: Yup.string()
                .required("Bắt buộc!"),
            file: Yup.mixed()
                .required("Bắt buộc!")
        }),
        onSubmit: values => {
            //   setLoading(true)
            const { category, file, ...UploadFile } = values;
            const UploadDoc = { ...UploadFile, description: 'none', link: 'https://google.com', date: new Date() , size: '999Kb', userID: 1, status: 1, imgUrl: 'https://phothongcaodang.fpt.edu.vn/wp-content/uploads/1-15.png' };
            console.log(UploadDoc);
            axios
                .post(`${process.env.REACT_APP_API_URL}/document/`, UploadDoc)
                .then((res) => {
                    console.log('ok roi ne')
                    console.log(res)
                })
                .catch(err => {
                    console.log('err')
                    console.log(err)
                })
                ;
            toast.success('Chờ phê duyệt!');

            formik.resetForm();
        }
    });



    //  Fetch Data
    const [bioSubject, setBioSubject] = useState([]);
    useEffect(() => {
        const fetchDataSubject = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/subjects/`);
            const data = await response.json()
            setBioSubject(data);
        };
        fetchDataSubject();
    }, []);
    const [bioMajor, setBioMajor] = useState([]);
    useEffect(() => {
        const fetchDataMajor = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/majors/`);
            const data = await response.json()
            setBioMajor(data);
        };
        fetchDataMajor();
    }, []);


    //
    useEffect(() => {
        const selectedSubject = bioSubject?.find(s => s.id == formik.values.subjectID);
        if (selectedSubject) {
            const selectedMajors = bioMajor?.find(m => m.id == selectedSubject.majorID)
            formik.setFieldValue('category', selectedMajors.name)
        }
    }, [formik.values.subjectID])

    return (
        <div>
            <form className="upload-file"
                onSubmit={formik.handleSubmit}
            // onSubmit={(e) => {
            //     e.preventDefault();
            //     let params = {}
            //     params.name = document.getElementById('txtTenTaiLieu').value;
            //     params.description = 'none';
            //     params.link = 'https://google.com';
            //     params.date = '28/10/2022';
            //     params.size = '999Kb';
            //     params.subjectID = document.getElementById('slt_Subject').value;
            //     params.userID = 1;
            //     params.status = 1;
            //     params.type = document.getElementById('sltLoaiTaiLieu').value;
            //     params.imgUrl = 'https://phothongcaodang.fpt.edu.vn/wp-content/uploads/1-15.png'
            //     console.log(params)
            //     axios
            //         .post(`${process.env.REACT_APP_API_URL}/document/`, params)
            //         .then((res) => {
            //             console.log('ok roi ne')
            //             console.log(res)
            //         })
            //         .catch(err => {
            //             console.log('err')
            //             console.log(err)
            //         })
            //         ;
            // return false
            // axios
            //     .post(`${process.env.REACT_APP_API_URL}/majors/`, item)
            //     .then((res) => this.refreshList());
            // }}
            // onChange={() => { document.getElementById('majorList').value = bioMajor[bioSubject[document.getElementById('slt_Subject').value - 1]?.majorID - 1]?.name; }}
            >
                <label className="upload_label">
                    Tên tài liệu
                </label>
                <input
                    className="upload_input"
                    name="name"
                    onChange={formik.handleChange}
                    type="text"
                    id='txtTenTaiLieu'
                    onBlur={formik.handleBlur}
                    placeholder="Lập trình ứng dụng web"
                />
                {formik.touched.name && formik.errors.name && (
                    <div className="text-error">{formik.errors.name}</div>
                )}

                <label className="upload_label">
                    Loại tài liệu
                </label>
                <select defaultValue={null} className="upload_input" name="type" id='sltLoaiTaiLieu'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}>
                    <option value={''}>Chọn loại tài liệu</option>

                    {
                        documentType ? documentType.map(doc_type => {
                            return (
                                <option value={doc_type.id} key={doc_type.id}>{doc_type.name}</option>
                            )

                        }) : <></>
                    }
                </select>
                {formik.touched.type && formik.errors.type && (
                    <div className="text-error">{formik.errors.type}</div>
                )}

                <label className="upload_label">
                    Môn học
                </label>
                <select defaultValue={null} className="upload_input" name="subjectID" id="slt_Subject"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}>
                    <option value={''}>Chọn môn học</option>

                    {
                        // subjects ? subjects.map(subject => {
                        //     return (
                        //         <option value={subject.id} key={subject.id}>{subject.name}</option>
                        //     )

                        // }) : <></>

                        bioSubject ? bioSubject.map(subject => {
                            return (
                                <option value={subject.id} key={subject.id}>{subject.name}</option>
                            )

                        }) : <></>
                    }
                </select>
                {formik.touched.subjectID && formik.errors.subjectID && (
                    <div className="text-error">{formik.errors.subjectID}</div>
                )}
                <label className="upload_label">
                    Danh mục
                </label>
                <input
                    type="text"
                    name="category"
                    className="upload_input"
                    id="majorList"
                    readOnly
                    placeholder="Hệ thống thông tin"
                    onChange={formik.handleChange}
                    value={formik.values.category}
                />

                <label className="custom-file-upload">
                    <input
                        id="file"
                        name="file"
                        type="file"
                        multiple
                        onChange={(event) => {
                            console.log(event);
                            formik.setFieldValue("file", event.currentTarget.files[0]);
                        }}
                        className="upload"
                    />

                    <div className="border-dotted">
                        <FileUploadIcon className="text-gray-400" />
                        <div className="text-gray-400">Kéo thả tập tin vào đây</div>
                    </div>
                </label>
                <Thumb file={formik.values.file} />


                {formik.errors.file && (
                    <div className="text-error">{formik.errors.file}</div>
                )}

                <div className="flex justify-end mt-4">
                    <button
                        disabled={!(formik.isValid && formik.dirty)}
                        className="upload_btn"
                        type="submit"
                    >
                        Lưu
                    </button>
                    <button
                        className="upload_btn"
                        type="reset"
                        onClick={e => formik.resetForm()}
                    >
                        Huỷ bỏ
                    </button>
                </div>
            </form>
            {/* <button
                onClick={() => {
                    let params = {}
                    params.name = document.getElementById('txtTenTaiLieu').value;
                    params.description = 'none';
                    params.link = 'https://google.com';
                    params.date = '28/10/2022';
                    params.size = '999Kb';
                    params.subjectID = document.getElementById('slt_Subject').value;
                    params.userID = 1;
                    params.status = 1;
                    params.type = document.getElementById('sltLoaiTaiLieu').value;
                    params.imgUrl = 'https://phothongcaodang.fpt.edu.vn/wp-content/uploads/1-15.png'
                    console.log(params)
                    axios
                        .post(`${process.env.REACT_APP_API_URL}/document/`, params)
                        .then((res) => {
                            console.log('ok roi ne')
                            console.log(res)
                        })
                        .catch(err => {
                            console.log('err')
                            console.log(err)
                        })
                        ;
                }}
            >

            </button> */}
        </div>
    );
};


export default Upload;

import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUserAction, editUserAction, quanLyUserAction } from '../../redux/actions/type/quanLyUserAction';

export default function AdminUser () {
    const arrUser = useSelector(rootReducer => rootReducer.quanLyUserReducer.arrUser);
    const editUser = useSelector(rootReducer => rootReducer.editUserReducer);
    const dispatch = useDispatch();
    const [task, setTask] = useState({  id: '', name: '', email: '', image: '', buildingId: '', status: '' ,roleId: '' ,phone: '',gender:''  });
    const handleChangeInput = (e) => {
        let { name, value } = e.target;
        setTask({
            ...task,
            [name]: value,
        })
    }

    useEffect(() => {
        const action = dispatch(quanLyUserAction);
        dispatch(action);
    })

    const inputUserId = useRef(null);
    const inputUserName = useRef(null);
    const inputUserGender = useRef(null);
    const inputUserEmail = useRef(null);
    const inputUserImage = useRef(null);
    const inputUserBuildingId = useRef(null);
    const inputUserStatus = useRef(null);
    const inputUserRoleId = useRef(null);
    const inputUserPhone = useRef(null);

    const handleSubmit =(e) =>{
        e.preventDefault();
        let userID= inputUserId.current.value;
        let userName= inputUserName.current.value;
        let userEmail= inputUserEmail.current.value;
        let userImage= inputUserImage.current.value;
        let userBuildingId= inputUserBuildingId.current.value;
        let userStatus= inputUserStatus.current.value;
        let userRole= inputUserRoleId.current.value;
        let userPhone= inputUserPhone.current.value;
        let userGender= inputUserPhone.current.value;
        task.id=userID;
        task.buildingId=userBuildingId;
        task.roleId=userRole;
        if (userName === '') {
            task.name = inputUserName.current.placeholder;
        } else {
            task.name = userName;
        }
        if (userEmail === '') {
            task.email = inputUserEmail.current.placeholder;
        } else {
            task.email = userEmail;
        }
        if (userImage === '') {
            task.image = inputUserImage.current.placeholder;
        } else {
            task.image = userImage;
        }
        if (userStatus === '') {
            task.status = inputUserStatus.current.placeholder;
        } else {
            task.status = userStatus;
        }
        if (userPhone === '') {
            task.phone = inputUserPhone.current.placeholder;
        } else {
            task.phone = userPhone;
        }
        if (userGender === '') {
            task.gender = inputUserGender.current.placeholder;
        } else {
            task.gender = userGender;
        }
        console.log(task);
        const action = editUserAction(task);
        dispatch(action)
    }

    return (
        <div>
            <div className="theme-layout">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="sidemenu">
                                <i>
                                    <svg
                                        id="side-menu"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={26}
                                        height={26}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-menu"
                                    >
                                        <line x1={3} y1={12} x2={21} y2={12} />
                                        <line x1={3} y1={6} x2={21} y2={6} />
                                        <line x1={3} y1={18} x2={21} y2={18} />
                                    </svg>
                                </i>
                            </div>
                            <div className="panel-content">
                                <div className='row merged20 mb-4'>
                                    <div className='col-lg-12'>
                                        <div className='d-widget'>
                                            <div className='d-widget-title'>
                                                <h5>All User</h5>
                                            </div>
                                            <table className='table table-default all-events table-striped table-responsive-lg'>
                                                <thead>
                                                    <tr>
                                                        <th>Number</th>
                                                        <th>User Name</th>
                                                        <th>Full Name</th>
                                                        <th>Phone</th>
                                                        <th>Email</th>
                                                        <th>Building</th>
                                                        <th>Action</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {arrUser.filter(sp => sp.roleName === 'RESIDENT').map((task, index) => {
                                                        return <tr key={index}>
                                                            <td>{index++}</td>
                                                            <td>{task.userName}</td>
                                                            <td>{task.fullName}</td>
                                                            <td>{task.phone}</td>
                                                            <td>{task.email}</td>
                                                            <td>{task.buildingName}</td>
                                                            <td>{task.status}</td>
                                                            <td>
                                                                <button className="button soft-danger"><i className="icofont-trash" onClick={() => {
                                                                    const action = deleteUserAction(task.id);
                                                                    dispatch(action);
                                                                    alert('Delete User Thành Công');
                                                                }}></i></button>
                                                                {/* <div className="button soft-primary"><i className="icofont-pen-alt-1"></i></div> */}
                                                                <button className='btn  btn-outline-success' data-toggle="modal" data-target="#modelId"><i className="icofont-pen-alt-1" onClick={() => {
                                                                    const action = {
                                                                        type: 'XEM_CHI_TIET_USER',
                                                                        sanPhamClick: task,
                                                                    }
                                                                    dispatch(action);
                                                                }}></i></button>
                                                            </td>
                                                        </tr>
                                                    })}

                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )

}

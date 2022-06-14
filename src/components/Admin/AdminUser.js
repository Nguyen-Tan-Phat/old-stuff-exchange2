import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUserAction, quanLyUserAction } from '../../redux/actions/type/quanLyUserAction';

export default function AdminUser () {
    const arrUser = useSelector(rootReducer => rootReducer.quanLyUserReducer.arrUser);
    const dispatch = useDispatch();

    useEffect(() => {
        const action = dispatch(quanLyUserAction);
        dispatch(action);
    })
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
                                                        <th>ID#</th>
                                                        <th>User Name</th>
                                                        <th>Full Name</th>
                                                        <th>Phone</th>
                                                        <th>Email</th>
                                                        <th>Building</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {arrUser.filter(sp => sp.roleName === 'RESIDENT').map((task, index) => {
                                                        return <tr key={index}>
                                                            <td>{index++}</td>
                                                            <td>{task.id}</td>
                                                            <td>{task.userName}</td>
                                                            <td>{task.fullName}</td>
                                                            <td>{task.phone}</td>
                                                            <td>{task.email}</td>
                                                            <td>{task.buildingName}</td>
                                                            <td>
                                                                <button className="button soft-danger"><i className="icofont-trash" onClick={() => {
                                                                    const action = deleteUserAction(task.id);
                                                                    dispatch(action);
                                                                    console.log(action);
                                                                }}></i></button>
                                                                <div className="button soft-primary"><i className="icofont-pen-alt-1"></i></div>
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

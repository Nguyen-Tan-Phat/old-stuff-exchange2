import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBuildingAction, layDanhSachBudingAction } from '../../redux/actions/type/quanLYBuildingAction';
export default function AdminBuilDing () {
    const arrBuilding = useSelector(rootReducer => rootReducer.quanLyBuildingReducer.arrBuilding);
    const dispatch = useDispatch();

    useEffect(() => {
        const action = dispatch(layDanhSachBudingAction);
        dispatch(action);
    }, [])


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
                                                <h5>All BuilDing</h5>
                                            </div>
                                            <table className='table table-default all-events table-striped table-responsive-lg'>
                                                <thead>
                                                    <tr>
                                                        <th>Number</th>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Number Floor</th>
                                                        <th>Number Room</th>
                                                        <th>Description</th>
                                                        <th>AparmentID</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {arrBuilding.map((task, index) => {
                                                        return <tr key={index}>
                                                            <td>{index++}</td>
                                                            <td>{task.id}</td>
                                                            <td>{task.name}</td>
                                                            <td>{task.numberFloor}</td>
                                                            <td>{task.numberRoom}</td>
                                                            <td>{task.description}</td>
                                                            <td>{task.apartmentId}</td>
                                                            <td>
                                                                <button className="button soft-danger"><i className="icofont-trash" onClick={() => {
                                                                    const action = deleteBuildingAction(task.id);
                                                                    dispatch(action);
                                                                    alert('Delete Building Thành Công')
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

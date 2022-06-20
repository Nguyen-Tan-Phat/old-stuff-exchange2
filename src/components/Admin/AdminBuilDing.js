import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBuildingAction, editBuildingAction, layDanhSachBudingAction } from '../../redux/actions/type/quanLYBuildingAction';
export default function AdminBuilDing (props) {
    const arrBuilding = useSelector(rootReducer => rootReducer.quanLyBuildingReducer.arrBuilding);
    const editBuilding = useSelector(rootReducer => rootReducer.aditBuidingReducer);
    const dispatch = useDispatch();
    const [task, setTask] = useState({ id: '', name: '', numberFloor: 0, numberRoom: 0, description: '', apartmentId: '' });
    const handleChangeInput = (e) => {
        let { name, value } = e.target;
        setTask({
            ...task,
            [name]: value,
        })
    }

    useEffect(() => {
        const action = dispatch(layDanhSachBudingAction);
        dispatch(action);
    }, [])

    const inputUserId = useRef(null);
    const inputUserName = useRef(null);
    const inputUserNumberFloor = useRef(0);
    const inputUsernumberRoom = useRef(0);
    const inputUserDescription = useRef(null);
    const inputUserApartmentId = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        let userId = inputUserId.current.value;
        let userName = inputUserName.current.value;
        let userNumberFloor = inputUserNumberFloor.current.value;
        let usernumberRoom = inputUsernumberRoom.current.value;
        let userDescription = inputUserDescription.current.value;
        let userApartmentId = inputUserApartmentId.current.value;
        task.id = userId;
        if (userName === '') {
            task.name = inputUserName.current.placeholder;
        } else {
            task.name = userName;
        }
        if (userNumberFloor === '') {
            task.numberFloor = inputUserNumberFloor.current.placeholder;
        } else {
            task.numberFloor = userNumberFloor;
        }
        if (usernumberRoom === '') {
            task.numberRoom = inputUsernumberRoom.current.placeholder;
        } else {
            task.numberRoom = usernumberRoom;
        }
        if (userDescription === '') {
            task.description = inputUserDescription.current.placeholder;
        } else {
            task.description = userDescription;
        }
        task.apartmentId = userApartmentId;
        console.log(task);
        const action = editBuildingAction(task);
        dispatch(action)
    }

    console.log(task);
    return (
        <div>
            <div className="theme-layout">
                {/* <EditBuilding handleChangeInput={handleChangeInput} /> */}

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
                                                            <td>{task.name}</td>
                                                            <td>{task.numberFloor}</td>
                                                            <td>{task.numberRoom}</td>
                                                            <td>{task.description}</td>
                                                            <td>{task.apartmentId}</td>
                                                            <td>
                                                                <button className="button soft-danger"><i className="icofont-trash" onClick={() => {
                                                                    const action = deleteBuildingAction(task.id);
                                                                    dispatch(action);
                                                                    alert('Delete Building Thành Công');
                                                                }}></i></button>

                                                                <button className='btn  btn-outline-success' data-toggle="modal" data-target="#modelId"><i className="icofont-pen-alt-1" onClick={() => {
                                                                    const action = {
                                                                        type: 'XEM_CHI_TIET_BUILDING',
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
            <div>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title"> Edit</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <h3 className='text-center mb-3'>Edit Building</h3>
                                    <form className=" mb-3" onSubmit={handleSubmit}>
                                        <div className='form-group'>
                                            <h5>ID:</h5>
                                            <input ref={inputUserId} onChange={handleChangeInput} id='id' name='id' className="form-control" placeholder={editBuilding.id} value={editBuilding.id} disabled />
                                        </div>
                                        <div className='form-group'>
                                            <h5>Name:</h5>
                                            <input ref={inputUserName} onChange={handleChangeInput} id='name' name='name' className="form-control" placeholder={editBuilding.name} />
                                        </div>
                                        <div className='form-group'>
                                            <h5>Number Floor:</h5>
                                            <input ref={inputUserNumberFloor} onChange={handleChangeInput} id='numberFloor' name='numberFloor' type="number" className="form-control" min={1} placeholder={editBuilding.numberFloor} />
                                        </div>
                                        <div className='form-group'>
                                            <h5>Number Room:</h5>
                                            <input ref={inputUsernumberRoom} onChange={handleChangeInput} id='numberRoom' name='numberRoom' type="number" className="form-control" min={1} placeholder={editBuilding.numberRoom} />
                                        </div>
                                        <div className='form-group'>
                                            <h5>Description:</h5>
                                            <input ref={inputUserDescription} onChange={handleChangeInput} id='description' name='description' className="form-control" placeholder={editBuilding.description} />
                                        </div>
                                        <div className='form-group'>
                                            <h5>Aparment ID:</h5>
                                            <input ref={inputUserApartmentId} onChange={handleChangeInput} id='apartmentId' name='apartmentId' type="text" className="form-control" placeholder={editBuilding.apartmentId} value={editBuilding.apartmentId} disabled />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Save</button>
                                    </form>


                                </div>
                            </div>
                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}




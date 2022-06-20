import React from 'react'
import { useSelector } from 'react-redux';
export default function EditUser (props) {

    const editUser = useSelector(rootReducer => rootReducer.editUserReducer);
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
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
                                        <input onInput={props.handleChangeInput} name='id' type="text" className="form-control" value={editUser.id} />
                                    </div>
                                    <div className='form-group'>
                                        <h5>Name:</h5>
                                        <input onChange={props.handleChangeInput} name='name' type="text" className="form-control" placeholder={editUser.name} />
                                    </div>
                                    <div className='form-group'>
                                        <h5>Email:</h5>
                                        <input onChange={props.handleChangeInput} name='email' type="text" className="form-control" placeholder={editUser.email} />
                                    </div>
                                    <div className='form-group'>
                                        <h5>image:</h5>
                                        <input onChange={props.handleChangeInput} name='image' type="text" className="form-control" placeholder={editUser.image} />
                                    </div>
                                    <div className='form-group'>
                                        <h5>BuildingID:</h5>
                                        <input onInput={props.handleChangeInput} name='buildingId' type="text" className="form-control" placeholder={editUser.buildingId} />
                                    </div>
                                    <div className='form-group'>
                                        <h5>Status:</h5>
                                        <input onChange={props.handleChangeInput} name='status' type="text" className="form-control" placeholder={editUser.status} />
                                    </div>
                                    <div className='form-group'>
                                        <h5>RoleID:</h5>
                                        <input onInput={props.handleChangeInput} name='role' type="text" className="form-control" placeholder={editUser.roleId} />
                                    </div>
                                    <div className='form-group'>
                                        <h5>Phone:</h5>
                                        <input onChange={props.handleChangeInput} name='phone' type="number" className="form-control" value={editUser.phone} />
                                    </div>
                                    <div className='form-group'>
                                        <h5>Gender:</h5>
                                        <input onChange={props.handleChangeInput} name='gender' type="text" className="form-control" value={editUser.gender} disabled />
                                    </div>
                                </form>


                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        // < div className='container mt-5' >
        //     <div className='d-flex justify-content-center align-items-center'>
        //         <div>
        //             <h3 className='text-center mb-3'>Edit Building</h3>
        //             <form className=" mb-3">
        //                 <div className='form-group'>
        //                     <h5>ID:</h5>
        //                     <input onChange={handleChangeInput} name='id' type="text" className="form-control" value="" disabled />
        //                 </div>
        //                 <div className='form-group'>
        //                     <h5>Name:</h5>
        //                     <input onChange={handleChangeInput} name='name' type="text" className="form-control" placeholder="task name" />
        //                 </div>
        //                 <div className='form-group'>
        //                     <h5>Number Floor:</h5>
        //                     <input onChange={handleChangeInput} name='numberFloor' type="number" className="form-control" placeholder="task name" />
        //                 </div>
        //                 <div className='form-group'>
        //                     <h5>Number Room:</h5>
        //                     <input onChange={handleChangeInput} name='numberRoom' type="number" className="form-control" placeholder="task name" />
        //                 </div>
        //                 <div className='form-group'>
        //                     <h5>Description:</h5>
        //                     <input onChange={handleChangeInput} name='description' type="text" className="form-control" placeholder="task name" />
        //                 </div>
        //                 <div className='form-group'>
        //                     <h5>Aparment ID:</h5>
        //                     <input onChange={handleChangeInput} name='apartmentId' type="text" className="form-control" value='43242' disabled />
        //                 </div>
        //             </form>


        //         </div>
        //     </div>
        // </div >

    )
}

        //     <div>
        //     <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        //         <div className="modal-dialog" role="document">
        //             <div className="modal-content">
        //                 <div className="modal-header">
        //                     <h5 className="modal-title"> Edit</h5>
        //                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        //                         <span aria-hidden="true">×</span>
        //                     </button>
        //                 </div>
        //                 <div className="modal-body">
        //                     <div>
        //                         <h3 className='text-center mb-3'>Edit User</h3>
        //                         <form className=" mb-3" onSubmit={handleSubmit}>
        //                             <div className='form-group'>
        //                                 <h5>ID:</h5>
        //                                 <input ref={inputUserId} onChange={handleChangeInput} id='id' name='id' className="form-control" placeholder={editUser.id} value={editUser.id} disabled />
        //                             </div>
        //                             <div className='form-group'>
        //                                 <h5>Name:</h5>
        //                                 <input ref={inputUserName} onChange={handleChangeInput} id='name' name='name' className="form-control" placeholder={editUser.name} />
        //                             </div>
        //                             <div className='form-group'>
        //                                 <h5>Email:</h5>
        //                                 <input ref={inputUserEmail} onChange={handleChangeInput} id='email' name='email' className="form-control" placeholder={editUser.email} />
        //                             </div>
        //                             <div className='form-group'>
        //                                 <h5>Image:</h5>
        //                                 <input ref={inputUserImage} onChange={handleChangeInput} id='image' name='image' className="form-control" placeholder={editUser.image} />
        //                             </div>
        //                             <div className='form-group'>
        //                                 <h5>BuildingId:</h5>
        //                                 <input ref={inputUserBuildingId} onChange={handleChangeInput} id='buildingId' name='buildingId' className="form-control" placeholder={editUser.buildingId} disabled/>
        //                             </div>
        //                             <div className='form-group'>
        //                                 <h5>Status:</h5>
        //                                 <input ref={inputUserStatus} onChange={handleChangeInput} id='status' name='status' className="form-control" placeholder={editUser.status} />
        //                             </div>
        //                             <div className='form-group'>
        //                                 <h5>RoleId:</h5>
        //                                 <input ref={inputUserRoleId} onChange={handleChangeInput} id='roleId' name='roleId' className="form-control" placeholder={editUser.roleId} disabled/>
        //                             </div>
        //                             <div className='form-group'>
        //                                 <h5>Phone:</h5>
        //                                 <input ref={inputUserPhone} type="number" onChange={handleChangeInput} id='number' name='number' className="form-control" placeholder={editUser.phone} />
        //                             </div>
        //                             <div className='form-group'>
        //                                 <h5>Gender:</h5>
        //                                 <input ref={inputUserGender} onChange={handleChangeInput} id='gender' name='gender' type="text" className="form-control" placeholder={editUser.gender} value={editUser.gender} disabled />
        //                             </div>
        //                             <button type="submit" className="btn btn-primary">Save</button>
        //                         </form>


        //                     </div>
        //                 </div>
        //                 {/* <div className="modal-footer">
        //                     <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        //                     <button type="button" className="btn btn-primary">Save</button>
        //                 </div> */}
        //             </div>
        //         </div>
        //     </div>
        // </div>
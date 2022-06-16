import React from 'react'
import { useSelector } from 'react-redux';
export default function EditBuilding (props) {

    const editBuilding = useSelector(rootReducer => rootReducer.aditBuidingReducer);
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
                                        <input onInput={props.handleChangeInput} name='id' type="text" className="form-control" value={editBuilding.id} />
                                    </div>
                                    <div className='form-group'>
                                        <h5>Name:</h5>
                                        <input onChange={props.handleChangeInput} name='name' type="text" className="form-control" placeholder={editBuilding.name} />
                                    </div>
                                    <div className='form-group'>
                                        <h5>Number Floor:</h5>
                                        <input onChange={props.handleChangeInput} name='numberFloor' type="number" className="form-control" value={editBuilding.numberFloor} />
                                    </div>
                                    <div className='form-group'>
                                        <h5>Number Room:</h5>
                                        <input onChange={props.handleChangeInput} name='numberRoom' type="number" className="form-control" value={editBuilding.numberRoom} />
                                    </div>
                                    <div className='form-group'>
                                        <h5>Description:</h5>
                                        <input onChange={props.handleChangeInput} name='description' type="text" className="form-control" value={editBuilding.description} />
                                    </div>
                                    <div className='form-group'>
                                        <h5>Aparment ID:</h5>
                                        <input onChange={props.handleChangeInput} name='apartmentId' type="text" className="form-control" value={editBuilding.apartmentId} disabled />
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

import React from 'react'

export default function Home (props) {
    return (
        <div className='container'>
            <h1 className='text-center '>Old-Stuff-Exchange</h1>
            <div className='row'>
                <div className='col-4'>
                    <div className='card'>
                        <img src='https://png.pngtree.com/png-clipart/20190921/original/pngtree-a-wooden-table-png-image_4706069.jpg' style={{ height: '300px' }} alt='...' />
                        <div className='card-body'>
                            <h5><span style={{ fontWeight: 'bold' }}>Name</span>  : Cái bàn</h5>
                            <p><span style={{ fontWeight: 'bold' }}>Price</span> : 20$</p>
                            <p><span style={{ fontWeight: 'bold' }}>Conent</span> : Bàn làm việc SV1200SHLSD được thiết kế đơn giản nhưng vẫn đầy đủ các tính năng của 1 bàn làm việc văn phòng thông thường. Bàn gồm 3 ngăn kéo dùng để lưu trữ hồ sơ tài liệu hoặc các vật dụng các nhân được tiện lợi nhất.</p>
                            <div style={{ display: 'flex' }}>
                                <button className='btn btn-primary'>Xem Chi Tiết</button>
                                <button className='btn btn-success ml-5'>Mua Ngay</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-4'>
                    <div className='card'>
                        <img src='https://cdn.mediamart.vn/images/product/-C91TK8.jpg' style={{ height: '300px' }} alt='...' />
                        <div className='card-body'>
                            <h5><span style={{ fontWeight: 'bold' }}>Name</span>  : Tivi</h5>
                            <p><span style={{ fontWeight: 'bold' }}>Price</span> : 220$</p>
                            <p><span style={{ fontWeight: 'bold' }}>Conent</span> : TIVI XIAOMI Mi TV P1 55″ đã có mặt tại TIVIXIAOMI.COM và hơn thế nữa đây lại là bản xuất khẩu EU và đương nhiên nó là bản GLOBAL đầy đủ các tính năng được trang bị kho ứng dụng khổng lồ, thiết kế tinh tế và đẹp mặt </p>
                            <div style={{ display: 'flex' }}>
                                <button className='btn btn-primary'>Xem Chi Tiết</button>
                                <button className='btn btn-success ml-5'>Mua Ngay</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-4'>
                    <div className='card'>
                        <img src='https://iheartcraftythings.com/wp-content/uploads/2021/04/Chair-DRAWING-%E2%80%93-STEP-10.jpg' style={{ height: '300px' }} alt='...' />
                        <div className='card-body'>
                            <p><span style={{ fontWeight: 'bold' }}>Name</span>  : Cái Ghế</p>
                            <p><span style={{ fontWeight: 'bold' }}>Price</span> : 15$</p>
                            <p><span style={{ fontWeight: 'bold' }}>Conent</span> : Ghế là một trong những món đồ nội thất thiết yếu nhất. Chúng ta sử dụng một chiếc ghế mỗi ngày trong cuộc sống của chúng ta. Chúng ta ngồi trên đó khi chúng ta xem tivi, ăn bữa hoặc bất cứ khi nào chúng ta chỉ thơ thẩn xung quanh.</p>
                            <div style={{ display: 'flex' }}>
                                <button className='btn btn-primary'>Xem Chi Tiết</button>
                                <button className='btn btn-success ml-5'>Mua Ngay</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}


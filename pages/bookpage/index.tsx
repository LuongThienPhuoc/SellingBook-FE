
import React from 'react'
import Layout from '../../component/Layout'
import {Grid} from '@mui/material';

const BookPage: React.FC = () => {
  return (
    <Layout activeNav={"book"}>
        <div className='page-wrapper px-[86px]'>

            <div className='book-heading-container mt-16 
                shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]
            '>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={3} md={4} sm={12} >
                        <div className='image-container p-[]'>
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/vi/6/61/Ng%E1%BB%93i_kh%C3%B3c_tr%C3%AAn_c%C3%A2y_cover.jpg" 
                                alt="Sách ngồi khóc trên cây" 
                                className='w-[300px] h-[450px]'
                            />
                       </div>
                    </Grid>
                    <Grid item xs={12} lg={6} md={8} sm={12}>
                        <div className='detail-container'>
                            <p className='font-bold text-3xl font-primary'>
                                Ngồi khóc trên cây
                            </p>
                            <div className='w-16 bg-[#2BBCBA] h-1 rounded-sm'>

                            </div>
                            <div className="descrip-container">
                                <div className='price-container flex'>
                                    <p className='price font-primary text-2xl'>
                                        143.000
                                    </p>
                                    <p className='currentcy font-primary text-lg'>
                                        VNĐ
                                    </p>
                                </div>
                                <div className='description'>
                                    Tên sách có làm bạn tò mò? “Ngồi khóc trên cây” có vẻ là một truyện hành động của nhà văn Nguyễn Nhật Ánh?
                                    Bạn sẽ gặp, sau những câu thơ lãng mạn của chính tác giả làm đề từ, là cuộc sống trong một ngôi làng thơ mộng ven sông, kỳ nghỉ hè với nhân vật là những đứa trẻ mới lớn có vô vàn trò chơi đơn sơ hấp dẫn ghi dấu mãi trong lòng.
                                    Câu chuyện của cô bé Rùa và chàng sinh viên vốn ở quê chuyển ra thành phố có giống như bạn từng có thời đi học?
                                    Và cái cách họ thinh thích, rồi thương nhau giấu giếm, sợ làm nhau buồn, mong mỏi gặp nhau đến mất ngủ… có phải là mối tình đầu giống như của bạn?
                                </div>
                                <div className='amount-display flex'>
                                    <p>Còn</p>
                                    <p className='amount-number mr-[4px] ml-[4px]'>23</p>
                                    <p>cuốn</p>
                                </div>
                                <div className='buy-section flex'>
                                    <div className='quantity-choosing flex mr-[27px]'>
                                        <div className='decreasing-button h-[40px] w-[24px] leading-[40px] text-center border-[1px] '>-</div>
                                        <input type='number' className='border-[1px] w-[40px] h-[40px]'/>
                                        <div className='increasing-button h-[40px] w-[24px] leading-[40px] text-center border-[1px]'>+</div>
                                    </div>
                                    <div className='buy-button text-[16px] leading-[40px] bg-[#2BBCBA] px-[20px] text-white rounded-[4px]'>
                                        MUA HÀNG
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={3} md={4} sm={12}>
                        <div className='book-info'>
                            <p>Tác giả: Nguyễn Nhật Ánh</p>  
                            <p>Nhà xuất bản: Nhà xuất bản trẻ</p>
                            <p>Dạng bìa: Bìa mềm</p>
                            <p>Tình trạng: Còn hàng</p>
                            <p>Năm phát hành: 2013</p>   
                        </div>
                    </Grid>
                    
                </Grid>
            </div>  
            
            <div className='book-wrapper'>
                
                
                
            </div>
            <h2 className="book-description bg-white mt-11">
                Thông tin chi tiết sản phẩm ở đây
            </h2>
        </div>
        
    </Layout>
  )
}


export default BookPage
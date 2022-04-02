
import React from 'react'
import Layout from '../../component/Layout'
import {Grid} from '@mui/material';
import BookItem from '../../component/BookPage/BookItem';

const BookPage: React.FC = () => {
  return (
    <Layout activeNav={"book"}>
        <div className='page-wrapper px-[86px]'>

            <div className='book-heading-container mt-16 
                shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)]
                rounded-[12px]'>
                <Grid container spacing={2} >
                    <Grid item xs={12} lg={3} md={4} sm={12} className='p-0 pl-9'>
                        <div className='image-container pt-8 flex justify-around'>
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/vi/6/61/Ng%E1%BB%93i_kh%C3%B3c_tr%C3%AAn_c%C3%A2y_cover.jpg" 
                                alt="Sách ngồi khóc trên cây" 
                                className='w-[calc(100%-24px)] pl-[18px]'
                            />
                       </div>
                    </Grid>
                    <Grid item xs={12} lg={6} md={7} sm={12} className='mt-[32px] pl-[22px]'>
                        <div className='detail-container pl-[22px]'>
                            <p className='font-bold text-3xl font-primary mb-[10px]'>
                                Ngồi khóc trên cây
                            </p>
                            <div className='w-16 bg-[#2BBCBA] h-1 rounded-sm mb-[14px]'>

                            </div>
                            <div className="descrip-container">
                                <div className='price-container flex mb-3'>
                                    <p className='price font-primary text-2xl font-[700]'>
                                        143.000
                                    </p>
                                    <p className='currentcy font-primary text-lg font-[600] ml-[3px]'>
                                        VNĐ
                                    </p>
                                </div>
                                <div className='description text-[14px] mb-[15px] font-primary font-[600]'>
                                    Tên sách có làm bạn tò mò? “Ngồi khóc trên cây” có vẻ là một truyện hành động của nhà văn Nguyễn Nhật Ánh?
                                    Bạn sẽ gặp, sau những câu thơ lãng mạn của chính tác giả làm đề từ, là cuộc sống trong một ngôi làng thơ mộng ven sông, kỳ nghỉ hè với nhân vật là những đứa trẻ mới lớn có vô vàn trò chơi đơn sơ hấp dẫn ghi dấu mãi trong lòng.
                                    Câu chuyện của cô bé Rùa và chàng sinh viên vốn ở quê chuyển ra thành phố có giống như bạn từng có thời đi học?
                                    Và cái cách họ thinh thích, rồi thương nhau giấu giếm, sợ làm nhau buồn, mong mỏi gặp nhau đến mất ngủ… có phải là mối tình đầu giống như của bạn?
                                </div>
                                <div className='amount-display flex mb-2 font-primary'>
                                    <p>Còn</p>
                                    <p className='amount-number mr-[4px] ml-[4px] text-[#2BBCBA] font-[600]'>23</p>
                                    <p>cuốn</p>
                                </div>
                                <div className='buy-section flex mb-[60px]'>
                                    <div className='quantity-choosing flex mr-[27px]'>
                                        <div className='decreasing-button h-[40px] w-[24px] leading-[40px] text-center border-[1px] '>-</div>
                                        <input type='number' className='border-[1px] w-[40px] h-[40px] text-center' defaultValue={1}/>
                                        <div className='increasing-button h-[40px] w-[24px] leading-[40px] text-center border-[1px]'>+</div>
                                    </div>
                                    <div className='buy-button text-[16px] leading-[40px] bg-[#2BBCBA] px-[20px] text-white rounded-[4px]'>
                                        MUA HÀNG
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={3} md={12} sm={12} className='flex '>
                        <div className='divider w-[1px] h-[calc(100%-40px)] bg-[#c5c5c5] mr-[10px] ml-[-1px]'></div>
                        <div className='book-info w-[calc(100%-20px)] h-[240px] text-[16px] border-[1px] border-[#2BBCBA] 
                                pl-[20px] p-[20px] rounded-[12px]
                                mb-[40px]
                        '>
                            <div className='description-item flex'>
                                <p className="text-[#808080]">Tác giả:</p>
                                <p className='ml-[4px] text-[#555555]'> Nguyễn Nhật Ánh</p>  
                            </div>
                            <div className='divider w-[calc(100%-10px)] h-[1px] bg-[#c5c5c5] my-[8px]'></div>
                            <div className='description-item flex'>
                                <p className="text-[#808080]">Nhà xuất bản:</p>
                                <p className='ml-[4px] text-[#555555]'> Nhà xuất bản trẻ</p>  
                            </div>
                            <div className='divider w-[calc(100%-10px)] h-[1px] bg-[#c5c5c5] my-[8px]'></div>
                            <div className='description-item flex'>
                                <p className="text-[#808080]">Dạng bìa:</p>
                                <p className='ml-[4px] text-[#555555]'> Bìa mềm</p>  
                            </div>
                            <div className='divider w-[calc(100%-10px)] h-[1px] bg-[#c5c5c5] my-[8px]'></div>
                            <div className='description-item flex'>
                                <p className="text-[#808080]">Tình trạng:</p>
                                <p className='ml-[4px] text-[#555555]'> Còn hàng</p>  
                            </div>
                            <div className='divider w-[calc(100%-10px)] h-[1px] bg-[#c5c5c5] my-[8px]'></div>
                            <div className='description-item flex'>
                                <p className="text-[#808080]">Năm phát hành:</p>
                                <p className='ml-[4px] text-[#555555]'>2013</p>  
                            </div>  
                        </div>
                    </Grid>
                    
                </Grid>
            </div>  
            
            <div className='book-description mt-16 
                shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)]
                rounded-[12px] w-[100%]'>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={12} lg={1}>
                        <div className='description-label text-[#2BBCBA] ml-[18px] mt-[18px] mb-[10px] text-[20px]'>
                            Mô tả
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12}  md={12} lg={11} className='flex'>
                        <div className='divider w-[1px] h-[calc(100%-40px)] bg-[#C5C5C5] mt-[20px]'></div>
                        <div className='description-content text-[14px] ml-[18px] py-[18px] mr-[18px]'>
                            Nước mắt đâu phải chỉ dành cho nỗi buồn khi người ta có thể khóc vì niềm vui và hạnh phúc. Với Nguyễn Nhật Ánh nước mắt còn là một cái gì đó thiêng liêng, đẹp đẽ và đầy mơ mộng khi ông kể về câu chuyện tình yêu trong sáng và ngây thơ giữa cô bé Rùa và anh chàng Đông trong truyện ngắn “Ngồi khóc trên cây”.
                            Tình yêu trong sáng như đóa hoa vừa chớm nở.
                            Rùa là cô bé của thiên nhiên, hồn nhiên, trong sáng nhưng lại đầy khí chất mạnh mẽ. Hoàn cảnh cơ cực từ nhỏ đã cho em một sự cứng rắn, với mái tóc cháy nắng trên khuôn mặt khả ái. Còn Đông là cậu sinh viên thành phố về thăm quê, là đứa duy nhất chơi với con Rùa, nói chuyện, lắng nghe, và đồng tình với nó.
                            Tâm hồn chúng đồng điệu vào nhau như những đóa hoa dại mới chớm nở đã vội hòa quyện hương thơm phảng phất đầu mùa. Nụ hôn đầu vụng dại trong khu vườn  đã diễn ra một cách nhẹ nhàng, bỡ ngỡ mà cũng thật đáng yêu. Cái ngượng đến chín mặt của Đông khi cả hai môi kề môi được tác giả miêu tả một cách tỉ mỉ đã báo hiệu cho một tình yêu trong sáng, hồn nhiên đang nảy nở.
                            Xem tiếp review sách: Ngồi khóc trên cây-nước mắt có chỉ dành riêng cho niềm đau?
                            Giá sản phẩm trên Goodbook đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div className='book-detail-addition mt-16 
                shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)]
                rounded-[12px] w-[100%]'>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={12} lg={1}>
                        <div className='description-label text-[#2BBCBA] ml-[18px] mt-[18px] mb-[10px] text-[20px]'>
                            Thông tin bổ sung
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12}  md={12} lg={11} className='flex'>
                        <div className='divider w-[1px] h-[calc(100%-40px)] bg-[#C5C5C5] mt-[20px]'></div>
                        <div className='detail-content w-[calc(100%-40px)] text-[14px] ml-[18px] py-[18px] mr-[18px]'>
                            <div className='description-item flex'>
                                <p className="text-[#808080]">Số trang:</p>
                                <p className='ml-[4px] text-[#555555]'>694</p>  
                            </div>
                            <div className='divider w-[calc(100%-10px)] h-[1px] bg-[#c5c5c5] my-[8px]'></div>
                            <div className='description-item flex'>
                                <p className="text-[#808080]">Kích thước:</p>
                                <p className='ml-[4px] text-[#555555]'>16 x 24 cm</p>  
                            </div>
                            <div className='divider w-[calc(100%-10px)] h-[1px] bg-[#c5c5c5] my-[8px]'></div>
                            <div className='description-item flex'>
                                <p className="text-[#808080]">Nhà xuất bản:</p>
                                <p className='ml-[4px] text-[#555555]'> Nhà xuất bản trẻ</p>  
                            </div>
                            <div className='divider w-[calc(100%-10px)] h-[1px] bg-[#c5c5c5] my-[8px]'></div>
                            <div className='description-item flex'>
                                <p className="text-[#808080]">Từ khoá:</p>
                                <p className='ml-[4px] text-[#555555]'> Nguyễn Nhật Ánh, Rùa, Đông, Ngồi khóc trên cây</p>  
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className='relative-book-sectionmt-16 
                shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)]
                rounded-[12px] w-[100%] mt-[62px] pb-[18px] pl-[18px]'>
                    <div className='description-label text-[#2BBCBA] pt-[28px] mb-[24px] text-[20px]'>
                        Sản phẩm liên quan
                    </div>
                    <BookItem remain={false}/>
            </div>
            <h2 className="book-description bg-white mt-11">
                Thông tin chi tiết sản phẩm ở đây
            </h2>
        </div>
        
    </Layout>
  )
}


export default BookPage
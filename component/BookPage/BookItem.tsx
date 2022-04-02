import React from 'react'
interface BookItemProps {
    remain: boolean 
}

const BookItem: React.FC<BookItemProps> = ({remain}) =>{
    return(
        <div className="book-item-wrapper relative w-[240px] 
            h-[380px] shadow-[0px_2px_2px_2px_rgba(0,0,0,0.25)]
            mb-[18px] rounded-[8px] font-primary
            ">
            <img 
                src="https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_08352010_033550.jpg" 
                alt="Sách ngồi khóc trên cây" 
                className='w-[100%]'
            />
            <div className='book-detail absolute w-[240px] h-[140px] bg-white right-[0px] bottom-0 rounded-b-[8px]'>
                <div className="publish-place text-[#555555] text-[18px] text-center pt-[8px]">Nhà xuất bản trẻ</div>
                <p className='book-title text-[22px] text-center leading-[24px] pt-[4px] px-[8px] font-[600] text-[#2BBCBA]'>Tôi thấy hoa vàng trên cỏ xanh</p>
                <p className='price text-[20px] font-[600] mt-[8px] text-center'>143.000VNĐ </p>
            </div>
            {
                remain ? null : 
                <div className='blank-banner absolute text-center'>
                    <div className='banner-container w-[100%] h-[64px]  text-center'>
                        <p className='banner-title text-[#EA230F] font-extrabold'>HẾT HÀNG</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default BookItem
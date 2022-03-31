
import React from 'react'
import Layout from '../../component/Layout'
import styles from '../../styles/BookPage.module.css' 

const BookPage: React.FC = () => {
  return (
    <Layout activeNav={"book"}>
        <div className='font-bold'>
            <div className={styles.imageContainer}>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/vi/6/61/Ng%E1%BB%93i_kh%C3%B3c_tr%C3%AAn_c%C3%A2y_cover.jpg" 
                    alt="Sách ngồi khóc trên cây" 
                    className='font-bold h-48   '
                />
            </div>
            <div className='detail-container'>
                <p className={styles.bookTitle}>
                    Ngồi khóc trên cây
                </p>
            </div>
            <div className="descrip-container">

            </div>
        </div>
        <h2>Thông tin chi tiết sản phẩm ở đây</h2>
    </Layout>
  )
}


export default BookPage
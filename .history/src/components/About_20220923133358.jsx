import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row ">
                    <div className="col-md-6">
                        <h1 className='text-primary fw-bold mb-4'>About us</h1>
                        <p className="lead mb-4">ICông ty Cổ Phần TM-DV-SX GNAHYUD(GNAHYUD HD) được ra đời vào năm 2022 và thành lập chính thức vào năm 2022 với khởi nguồn từ Trường Suối Nhạc – trường tư thục âm nhạc đầu tiên tại Việt Nam.
                         Tương tự như hệ thống phân phối nhạc cụ, chúng tôi phát triển thương hiệu Suối Nhạc phủ rộng tại nhiều địa bàn trong cả nước để đáp ứng nhu cầu học nhạc. Danh mục sản phẩm đầu tiên của Việt Thương là những cây Đàn organ và Piano mới toanh của Casio và Kawai Nhật Bản được giới thiệu tại thị trường Việt Nam.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" className='ms-4 ' alt="about us" height="500px" width="500px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

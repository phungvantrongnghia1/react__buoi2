import React, { Component } from 'react'

export default class SinhVien extends Component {
    renderSinhVien=()=>{
        let mangSV = [
            {ms:1,hoTen:"ấdasdsa"},
            {ms:2,hoTen:"dsaxdsdd"}
        ]
        let content = [];
        for(let i = 0 ; i < mangSV.length; i++){
            let sv = mangSV[i];
            content.push(
                <p className='text-warning'>Mã sv: {sv.ms} - hoTen:{sv.hoTen}</p>
            )
            console.log(sv);
        }
        return content; // 2 thẻ p
    }
    render() {
        return (
            <div>
                danh sách sinh viên
                {this.renderSinhVien()}
            </div>
        )
    }
}

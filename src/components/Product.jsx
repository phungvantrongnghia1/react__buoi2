import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false // những tham số có thể thay đổi giá trị => chứa trong this.state
    };
  }
  // khai báo thuộc tính (biến toàn cục nè)
  tenSP = "Nokia";
  status = false; // thuộc tính ẩn hiện phần mô tả sản phẩm

  hienThi = ten => {
    // khai báo sự kiện trong reacta
    alert("Thằng lộc khốn nạn kakakkakkak" + ten);
  };
  showMoTa() {
    if (this.state.status) {
      return <p className="card-text">sâsa</p>;
    }
    return "";
  }
  anHien = () => {
    // this.state.status = !this.state.status; // giá trị vẫn thay đổi nhưng render không chạy
    this.setState({
      //setState() là phương thức gán giá trị các biến trong state, đồng thời render() lại giao diện
      status: !this.state.status
    });
  };
  // render là phương thức chạy sao constructor
  render() {
    //cách 1
    //   let name = this.props.name;
    // cách 2
    let { name, desc, img } = this.props.sanPham;
    // Phương thức
    //Trong đây là khai báo biến của phương thức chỉ sử dụng trong phương thức (ở đây là biến cục bộ hiểu vậy đi)
    let moTa = "Mô tả đây nè mấy cha ơi";
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
        <div className="container">
          <div className="card bg-light" style={{ width: 300 }}>
            <img
              className="card-img-top"
              src={img}
              alt="Card image"
              style={{ maxWidth: "100%", height: 250 }}
            />
            <div className="card-body text-center">
              <h4 className="card-title text-center">{name}</h4>
              <p className="card-text">{desc}</p>
              <a href="#" className="btn btn-primary">
                Detail
              </a>
              <a href="#" className="btn btn-danger">
                Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

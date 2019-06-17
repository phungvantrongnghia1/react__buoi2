import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  // this.props: Thuộc tính có sẵn từ component nhận dữ liệu từ component cha
  mangSp = this.props.mangSanPham;
  renderLapTop = () =>
    this.mangSp.map((item, index) => <Product sanPham={item} key={index} />);
  //     for (let i = 0; i < this.mangSp.length; i++) {
  //         let laptop = this.mangSp[i];
  //         content.push(
  //             <div className="col-sm-3">
  //                 <div className="card">
  //                 <img className="card-img-top" src={laptop.img} alt />
  //                 <div className="card-body">
  //                     <h4 className="card-title">{laptop.name}</h4>
  //                     <p className="card-text">Text</p>
  //                 </div>
  //             </div>
  //             </div>
  //         )
  //     }

  render() {
    return (
      <div className="row">
        {this.renderLapTop()}
        {/* <LapTop />
                <LapTop />
                <LapTop />
                <LapTop /> */}
      </div>
    );
  }
}

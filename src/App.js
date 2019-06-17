import React from "react";
import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import HeaderSlide from "./components/HeaderSlide";
import SmartPhone from "./components/SmartPhone";
import LapTop from "./components/LapTop";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import SinhVien from "./components/SinhVien";

function App() {
  const mangDT = [
    {
      id: "sp_1",
      name: "iphoneX",
      price: 2000000,
      screen: "screen_1",
      backCamera: "backCamera_1",
      frontCamera: "frontCamera_1",
      img: "./img/sp_iphoneX.png",

      desc:
        "iPhone X feature    a new all - screen design.Face ID, which makes your face your password"
    },
    {
      id: "sp_2",
      name: "Note 7",
      price: 35126560,
      screen: "screen_2",
      backCamera: "backCamera_2",
      frontCamera: "frontCamera_2",
      img: "./img/sp_note7.png",
      desc:
        "The Galaxy Note7 comes with a perfectly symmetrical design for good reason"
    },
    {
      id: "sp_3",
      name: "Vivo",
      price: 4000000,
      screen: "screen_3",
      backCamera: "backCamera_3",
      frontCamera: "frontCamera_3",
      img: "./img/sp_vivo850.png",
      desc:
        "A young global smartphone brand   focusing on introducing perfect sound quality"
    },
    {
      id: "sp_4",
      name: "Blacberry",
      price: 50000000,
      screen: "screen_4",
      backCamera: "backCamera_4",
      frontCamera: "frontCamera_4",
      img: "./img/sp_blackberry.png",
      desc:
        "BlackBerry is a     line of smartphones, tablets, and services originally designed"
    }
  ];
  let title = "FE19";
  return (
    <div className="App">
      <Header td={title} /> {/*// cách 1 để gọi tới component header */}
      {/*//  <Header></Header> cách 2 để gọi tới component header */}
      <HeaderSlide />
      <section id="ds" className="container-fluid pt-5 pb-5">
        <h1 className="text-center text-warning">PROMOTION</h1>
        <ProductList mangSanPham={mangDT} />
      </section>
    </div>
  );
}

export default App;

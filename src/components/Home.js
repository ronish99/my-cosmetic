import { useState } from "react";
import { Products, CategoryMenu } from "./dummy";
import "./Home.css";

const Home = () => {
  const [arrData, setArrData] = useState("");
  const [productFilter, setProductFilter] = useState("");

  // function onHandleChange(e) {
  //   if (e.target.value == "") {
  //     setArrData(arrData);
  //     return;
  //   }
  //   const searchResult = arrData.filter((item) =>
  //     item.title.toLowerCase().startsWith(e.target.value.toLowerCase())
  //   );
  //   setArrData(searchResult);
  // }

  function onHandleChange(e) {
    setArrData(e.target.value);
  }

  function onHandleFilter(e) {
    const category = e.target.innerHTML;
    e.target.classList.toggle("active");
    setProductFilter(category);
    console.log({ category });
  }

  return (
    <div>
      <h3>Home</h3>
      <input value={arrData} onChange={onHandleChange} />
      <div className="productContainer">
        <div className="menu">
          <ul>
            {CategoryMenu.map((menu) => {
              return (
                <li key={menu.id} onClick={onHandleFilter}>
                  {menu.title}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="product">
          {arrData && productFilter !== ""
            ? Products.map((item) => (
                <ul key={item.id}>
                  <li>{item.title}</li>
                  <li>{item.price}</li>
                </ul>
              ))
            : Products.filter(
                (item) =>
                  item.title.toLowerCase().includes(arrData?.toLowerCase()) &&
                  item.category
                    .toLowerCase()
                    .includes(productFilter?.toLowerCase())
              ).map((item) => (
                <ul key={item.id}>
                  <li>{item.title}</li>
                  <li>{item.price}</li>
                </ul>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

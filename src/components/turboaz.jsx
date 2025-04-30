
import React, { useState } from "react";
import "../css/turboaz.css";
import { Link } from "react-router-dom";

function Turboaz() {
  const [carList] = useState([
    {
      id: 1,
      marka: "Nissan",
      model: "X-Trail",
      qiymet: "35000",
      img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Nissan/X-Trail/3372/1666087743726/front-left-side-47.jpg",
    },

    {
      id: 2,
      marka: "BMW",
      model: "M5",
      qiymet: "42000",
      img: "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-m5-139-667b0f49f2fca.jpg",
    },
    
    {
      id: 3,
      marka: "Mercedes cls",
      model: "63 amg",
      qiymet: "53000",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5gPrD78HXFRDsnnfxMYO_QSmORI7qM15vug&s",
    },
    
    {
      id: 4,
      marka: "Audi",
      model: "R8",
      qiymet: "46000",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyWRClgVxib7Eu0j-duvJ8CMqnJbNdthoouQ&s",
    },
    
    {
      id: 5,
      marka: "Range Rover",
      model: "svr",
      qiymet: "28000",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFuVyTLvGWcQW6k6mZTZivUi8kQYax7R3bA&s",
    },
    
    {
      id: 6,
      marka: "Audi",
      model: "R86",
      qiymet: "40000",
      img: "https://www.motortrend.com/uploads/2023/01/2023-Audi-RS-6-Avant-32.jpg?w=768&width=768&q=75&format=webp",
    },
    
    {
      id: 7,
      marka: "BMW",
      model: "F90",
      qiymet: "46000",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6QCQVnDFHoQUwmhwaxo1rh6G2QW6-nDkU3g&s",
    },
    
    {
      id: 8,
      marka: "Kia",
      model: "Sportage",
      qiymet: "35000",
      img: "https://www.kia.com/content/dam/kia/us/en/vehicles/sportage/2025/mep/in-page-gallery/my25-sportage-ice-mep-gallery-carousel-1.jpg"
       }
    
    
   
  ]);

  return (
    <div className="page">
      <div className="header">
        <h2 className="logo">Turbo.az</h2>
        <ul className="nav-links">
          <li>Bütün elanlar</li>
          <li>Dilerlər</li>
          <li>Avtokataloq</li>
          <li>Moto</li>
          <li>Ehtiyat hissələr və aksesuarlar</li>
          <li>İcarə</li>
        </ul>
        <Link to="/add-car">
          <button className="new-btn">Yeni Elan</button>
        </Link>
      </div>

      <div className="cards">
        {carList.map((car) => (
          <Link to={`/car/${car.id}`} key={car.id} className="card-link">
            <div className="card">
              <img src={car.img} alt={car.model} />
              <h3>{car.marka} {car.model}</h3>
              <p>{car.qiymet} AZN</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Turboaz;

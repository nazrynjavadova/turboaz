import React from "react";
import { useParams } from "react-router-dom";

const carsData = [
  {
    id: 1,
    marka: "Nissan",
    model: "X-Trail",
    qiymet: "35000",
    img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Nissan/X-Trail/3372/1666087743726/front-left-side-47.jpg",
    il: 2014,
    ban: "SUV",
    reng: "Ağ",
    muherrik: "2.2 L / 197 a.g. / Dizel",
    suretQutusu: "Avtomat",
    oturucu: "Tam",
    yeni: "Xeyr",
    yerler: "5",
    sahibler: "1",
    veziyyet: "Yaxşı",
    bazar: "Avropa",
  },
  {
    id: 2,
    marka: "BMW",
    model: "M5",
    qiymet: "42000",
    img: "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-m5-139-667b0f49f2fca.jpg",
    il: 2013,
    ban: "SUV",
    reng: "Yaşıl",
    muherrik: "2.2 L / 197 a.g. / Dizel",
    suretQutusu: "Avtomat",
    oturucu: "Tam",
    yeni: "Xeyr",
    yerler: "5",
    sahibler: "1",
    veziyyet: "Yaxşı",
    bazar: "Avropa",
  },
  {
    id: 3,
    marka: "BMW",
    model: "M5",
    qiymet: "42000",
    img: "https://autodesignmagazine.com/wp-content/uploads/2023/04/23C0129_003.jpg",
    il: 2013,
    ban: "SUV",
    reng: "Yaşıl",
    muherrik: "2.2 L / 197 a.g. / Dizel",
    suretQutusu: "Avtomat",
    oturucu: "Tam",
    yeni: "Xeyr",
    yerler: "5",
    sahibler: "1",
    veziyyet: "Yaxşı",
    bazar: "Avropa",
  },
  {
    id: 4,
    marka: "BMW",
    model: "M5",
    qiymet: "42000",
    img: "https://media.ed.edmunds-media.com/audi/a4/2022/oem/2022_audi_a4_sedan_prestige-s-line_fq_oem_1_1280.jpg",
    il: 2013,
    ban: "SUV",
    reng: "Yaşıl",
    muherrik: "2.2 L / 197 a.g. / Dizel",
    suretQutusu: "Avtomat",
    oturucu: "Tam",
    yeni: "Xeyr",
    yerler: "5",
    sahibler: "1",
    veziyyet: "Yaxşı",
    bazar: "Avropa",
  },
  {
    id: 5,
    marka: "BMW",
    model: "M5",
    qiymet: "42000",
    img: "https://www.hyundainews.com/assets/images/hero/56750-HyundaiElantraNLineAmazonGray13.jpg",
    il: 2013,
    ban: "SUV",
    reng: "Yaşıl",
    muherrik: "2.2 L / 197 a.g. / Dizel",
    suretQutusu: "Avtomat",
    oturucu: "Tam",
    yeni: "Xeyr",
    yerler: "5",
    sahibler: "1",
    veziyyet: "Yaxşı",
    bazar: "Avropa",
  },
  {
    id: 6,
    marka: "BMW",
    model: "M5",
    qiymet: "42000",
    img: "https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/kia-sportage-nq5-my22/discover/kia-sportage-hev-gtl-my22-actionpanel-get-yours.jpg",
    il: 2013,
    ban: "SUV",
    reng: "Yaşıl",
    muherrik: "2.2 L / 197 a.g. / Dizel",
    suretQutusu: "Avtomat",
    oturucu: "Tam",
    yeni: "Xeyr",
    yerler: "5",
    sahibler: "1",
    veziyyet: "Yaxşı",
    bazar: "Avropa",
  },
  {
    id: 7,
    marka: "BMW",
    model: "M5",
    qiymet: "42000",
    img: "https://media.ed.edmunds-media.com/mercedes-benz/s-class/2025/oem/2025_mercedes-benz_s-class_sedan_amg-s-63-e-performance_fq_oem_1_1600.jpg",
    il: 2013,
    ban: "SUV",
    reng: "Yaşıl",
    muherrik: "2.2 L / 197 a.g. / Dizel",
    suretQutusu: "Avtomat",
    oturucu: "Tam",
    yeni: "Xeyr",
    yerler: "5",
    sahibler: "1",
    veziyyet: "Yaxşı",
    bazar: "Avropa",
  },
  {
    id: 8,
    marka: "BMW",
    model: "M5",
    qiymet: "42000",
    img: "https://imgd.aeplcdn.com/664x374/cw/ec/21724/Audi-R8-Right-Front-Three-Quarter-66713.jpg?v=201711021421&q=80",
    il: 2013,
    ban: "SUV",
    reng: "Yaşıl",
    muherrik: "2.2 L / 197 a.g. / Dizel",
    suretQutusu: "Avtomat",
    oturucu: "Tam",
    yeni: "Xeyr",
    yerler: "5",
    sahibler: "1",
    veziyyet: "Yaxşı",
    bazar: "Avropa",
  },
  

];

function CarDetails() {
  const { id } = useParams();
  const car = carsData.find((c) => c.id === parseInt(id));

  if (!car) return <p>Maşın tapılmadı.</p>;

  return (
    <div className="car-details-page">
      <h2>{car.marka} {car.model}</h2>
      <img src={car.img} alt={car.model} style={{ maxWidth: "600px" }} />
      <ul>
        <li><strong>Qiymət:</strong> {car.qiymet} AZN</li>
        <li><strong>Buraxılış ili:</strong> {car.il}</li>
        <li><strong>Ban növü:</strong> {car.ban}</li>
        <li><strong>Rəng:</strong> {car.reng}</li>
        <li><strong>Mühərrik:</strong> {car.muherrik}</li>
        <li><strong>Sürətlər qutusu:</strong> {car.suretQutusu}</li>
        <li><strong>Ötürücü:</strong> {car.oturucu}</li>
        <li><strong>Yeni:</strong> {car.yeni}</li>
        <li><strong>Yerlərin sayı:</strong> {car.yerler}</li>
        <li><strong>Sahiblər:</strong> {car.sahibler}</li>
        <li><strong>Vəziyyəti:</strong> {car.veziyyet}</li>
        <li><strong>Bazar:</strong> {car.bazar}</li>
      </ul>
    </div>
  );
}

export default CarDetails;

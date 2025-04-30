import React from "react";
import "../css/newpage.css";

const NewPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = {};

    for (let [key, value] of formData.entries()) {
      if (formValues[key]) {
        if (Array.isArray(formValues[key])) {
          formValues[key].push(value);
        } else {
          formValues[key] = [formValues[key], value];
        }
      } else {
        formValues[key] = value;
      }
    }

    console.log("Form məlumatları:", formValues);
  };

  return (
    <div className="form-container">
      <h2>Elan yerləşdirmək</h2>
      <ul className="form-rules">
        <li>Üç ay ərzində bir nəqliyyat vasitəsi yalnız bir dəfə pulsuz dərc oluna bilər.</li>
        <li>Üç ay ərzində təkrar və ya oxşar elanlar (marka/model, rəng) dövrişdir.</li>
        <li>Elanınızı saytın ön sıralarında görmək üçün "İrəli çək" xidmətindən istifadə edin.</li>
      </ul>

      <form className="car-form" onSubmit={handleSubmit}>
        <div className="form">
          <div className="forms">
            <label>Marka *</label>
            <select name="marka" required>
              <option value="">Seçin</option>
              <option value="Abarth">Abarth</option>
              <option value="ABM">ABM</option>
              <option value="Acura">Acura</option>
            </select>
          </div>
          <div className="forms">
            <label>Yanacaq növü *</label>
            <select name="yanacaq" required>
              <option value="">Seçin</option>
              <option value="Benzin">Benzin</option>
              <option value="Dizel">Dizel</option>
              <option value="Qaz">Qaz</option>
              <option value="Elektro">Elektro</option>
              <option value="Hibrid">Hibrid</option>
              <option value="Hidrogen">Hidrogen</option>
            </select>
          </div>
        </div>

        <div className="form">
          <div className="forms">
            <label>Model *</label>
            <select name="model" required>
              <option value="">Seçin</option>
              <option value="Model 1">Model 1</option>
              <option value="Model 2">Model 2</option>
            </select>
          </div>
          <div className="forms">
            <label>Ötürücü *</label>
            <select name="oturucu" required>
              <option value="">Seçin</option>
              <option value="Arxa">Arxa</option>
              <option value="Tam">Tam</option>
              <option value="Ön">Ön</option>
            </select>
          </div>
        </div>

        <div className="form">
          <div className="forms">
            <label>Ban növü *</label>
            <select name="ban" required>
              <option value="">Seçin</option>
              <option value="Avtobus">Avtobus</option>
              <option value="Fayton">Fayton</option>
              <option value="Karvan">Karvan</option>
            </select>
          </div>
          <div className="forms">
            <label>Sürətlər qutusu *</label>
            <select name="suretQutusu" required>
              <option value="">Seçin</option>
              <option value="Avtomat">Avtomat</option>
              <option value="Mexaniki">Mexaniki</option>
              <option value="Variator">Variator</option>
              <option value="Robot">Robot</option>
            </select>
          </div>
        </div>

        <div className="form">
          <div className="forms">
            <label>Yürüş *</label>
            <input type="number" name="yurus" placeholder="0" required />
            <div className="radio-group">
              <label><input type="radio" name="distance" value="km" /> km</label>
              <label><input type="radio" name="distance" value="mi" /> mi</label>
            </div>
          </div>
          <div className="forms">
            <label>İl *</label>
            <select name="il" required>
              <option value="">Seçin</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>
        </div>

        <div className="form">
          <div className="forms">
            <label>Rəng *</label>
            <select name="reng" required>
              <option value="">Seçin</option>
              <option value="Ağ">Ağ</option>
              <option value="Qara">Qara</option>
              <option value="Mavi">Mavi</option>
              <option value="Çəhrayı">Çəhrayı</option>
            </select>
          </div>
          <div className="forms">
            <label>Mühərrikin həcmi, sm³ *</label>
            <input type="text" name="hecm" placeholder="məs: 1998" required />
          </div>
        </div>

        <div className="form">
          <div className="forms">
            <label>Qiymət *</label>
            <input type="number" name="qiymet" placeholder="0" required />
            <div className="radio-group">
              <label><input type="radio" name="valyuta" value="AZN" /> AZN</label>
              <label><input type="radio" name="valyuta" value="USD" /> USD</label>
              <label><input type="radio" name="valyuta" value="EUR" /> EUR</label>
            </div>
          </div>
          <div className="forms">
            <label>Mühərrikin gücü, a.g. *</label>
            <input type="text" name="quvvet" placeholder="məs: 150" required />
          </div>
        </div>

        <div className="form">
          <div className="forms">
            <label>Neçənci sahibisiniz?</label>
            <select name="sahib">
              <option value="">Seçin</option>
              <option value="Birinci">Birinci</option>
              <option value="İkinci">İkinci</option>
              <option value="Üçüncü">Üçüncü</option>
              <option value="Dördüncü və ya daha çox">Dördüncü və ya daha çox</option>
            </select>
          </div>
          <div className="forms">
            <label>Hansı bazar üçün yığılıb</label>
            <select name="bazar">
              <option value="">Seçin</option>
              <option value="Avropa">Avropa</option>
              <option value="Amerika">Amerika</option>
              <option value="Çin">Çin</option>
            </select>
          </div>
        </div>

        <div className="checkbox">
          <label><input type="checkbox" name="vurugu" value="vurugu" /> Vurğu var</label>
          <label><input type="checkbox" name="renglenib" value="renglenib" /> Rənglənib</label>
          <label><input type="checkbox" name="qezali" value="qezali" /> Qəzalı və ya ehtiyat hissələr üçün</label>
        </div>

        <button type="submit" className="submit-button">Elanı yerləşdir</button>
      </form>
    </div>
  );
};

export default NewPage;

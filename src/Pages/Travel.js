import React from "react";
import { useHistory } from "react-router";
import range from "../assets/Asset 1.png";
import "./style/Travel.css";
import Range from "../Components/Range";
const Travel = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="travel_nav">
        <div className="tr_text">
          <h2>TRAVEL</h2>
        </div>
        <div className="tr_dropdown">
          <div className="dropdown">
            <h2 className="drp_text text-white">Destination CITY</h2>
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Enter your destinaton
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="travel_container">
        <div className="travel_hero" onClick={history.push("#")}>
          <div className="travel_box">
            <div className="tbox_content  mb_tbox_content">
              <h5>Car (Fuel: xxx.xx)</h5>
              <div className="tbox_subcontent">
                <span>
                  Arrival Time: <span className="ms-3">10 am</span>
                </span>
                <span>
                  Inventory Summary: <span className="ms-3">$200</span>
                </span>
              </div>
              <p>Passengers: x x / Weapons: xx</p>
              <div className="risk_range">
                <span>Risk</span>
                <Range/>
                {/* <img className="range" src={range} alt="" /> */}
              </div>
            </div>

            <div className="tbox_cost">
              <h5 className="fs-2 text-center">
                TOTAL <br /> $52
              </h5>
            </div>
          </div>

          <div className="travel_box_btn travel_btn_img1"></div>
        </div>
        <div className="travel_hero" onClick={history.push("#")}>
          <div className="travel_box">
            <div className="tbox_content">
              <h5>Bus (Ticket: xxx.xx)</h5>
              <div className="tbox_subcontent">
                <span>
                  Arrival Time: <span className="ms-3">10 am</span>
                </span>
                <span>
                  Baggage fees: <span className="ms-3">$200</span>
                </span>
              </div>

              <div className="risk_range">
                <span>Risk</span>
                <Range/>
                {/* <img className="range" src={range} alt="" /> */}
              </div>
            </div>
            <div className="tbox_cost_1">
              <p className="text-white text-center">
                Your vehicle (Vehicle) will be valeted back to your property for
                you. Cost: Xxx.xx
              </p>
            </div>
            <div className="tbox_cost">
              <h5 className="fs-2 text-center">
                TOTAL <br /> $52
              </h5>
            </div>
          </div>

          <div className="travel_box_btn travel_btn_img2"></div>
        </div>
        <div className="travel_hero" onClick={history.push("#")}>
          <div className="travel_box">
            <div className="tbox_content">
              <h5>Fly commercial (Ticket: xxx.xx)</h5>
              <div className="tbox_subcontent">
                <span>
                  Arrival Time: <span className="ms-3">10 am</span>
                </span>
                <span>
                  Baggage fees: <span className="ms-3">$200</span>
                </span>
              </div>

              <div className="risk_range">
                <span>Risk</span>
                <Range/>
                {/* <img className="range" src={range} alt="" /> */}
              </div>
            </div>
            <div className="tbox_cost_1">
              <p className="text-white text-center">
                Your vehicle (Vehicle) will be valeted back to your property for
                you. Cost: Xxx.xx
              </p>
            </div>

            <div className="tbox_cost">
              <h5 className="fs-2 text-center">
                TOTAL <br /> $52
              </h5>
            </div>
          </div>

          <div className="travel_box_btn travel_btn_img3"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Travel;

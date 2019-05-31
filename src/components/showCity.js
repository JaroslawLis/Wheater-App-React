import React, { Component } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
//import "./showFirm.css";
const ShowCity = props => {
  return (
    <>
      <h1>{props.city.cityName}</h1>
      <h3>szerokość geograficzna: {props.city.cityLat}</h3>
      <h3>długość geograficzna: {props.city.cityLon}</h3>
      <Link to="/">
        <Button variant="outline-primary">Powrót</Button>
      </Link>
    </>
  );
};

export default ShowCity;

// class ShowCity extends Component {
//     constructor(props) {
//         super(props);

//         this.state = this.props.state.firmList[this.props.match.params.id];
//     }

//     render() {
//         console.log(this.state);
//         return (
//             <div data-aos="zoom-in" className="showFirmInformation">
//                 <div>Nazwa Firmy</div>
//                 <div>{this.state.firm}</div>
//                 <div>Adres</div>
//                 <div>{this.state.address}</div>
//                 <div>Strona www</div>
//                 <div>{this.state.www}</div>
//                 <div>Telefon</div>
//                 <div>{this.state.phone}</div>
//                 <div>e-mail</div>
//                 <div>{this.state.email}</div>
//                 <div>link do ogłoszenia o pracę</div>
//                 <div>{this.state.jobAdvertisementLink}</div>
//                 <div>Ogłoszenie o pracę (treść)</div>
//                 <div>
//                     <pre>{this.state.jobAdvertisement}</pre>
//                 </div>
//                 <div>Data zapytania</div>
//                 <div>{this.state.queryDate ? this.state.queryDate : "brak danych"}</div>
//                 <div>Data wysłania CV</div>
//                 <div>{this.state.CVDate ? this.state.CVDate : "brak danych"}</div>
//                 <div>Data odpowiedzi</div>
//                 <div>
//                     {this.state.replayDate ? this.state.replayDate : "brak danych"}
//                 </div>
//                 <div>Data rozmowy o pracę</div>
//                 <div>
//                     {this.state.interviewDate ? this.state.interviewDate : "brak danych"}
//                 </div>
//                 <div>Notatki (treść)</div>
//                 <div>
//                     <pre>{this.state.notices}</pre>
//                 </div>
//                 <div>Notatki dotyczące rekrutacji (treść)</div>
//                 <div>
//                     <pre>{this.state.recrutationNotices}</pre>
//                 </div>
//             </div>
//         );
//     }
// }

// export default ShowCity;

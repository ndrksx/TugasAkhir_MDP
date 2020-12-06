import React, {Component} from "react";
//framework buat make komponen button sama modal
import { Button, Modal } from "antd";
//styiling dari framework antd
import "antd/dist/antd.css";
//data local pengganti API buat nyimpen data
import Legend from "./legend.json";
//styling custom
import './ListLegend.css';

export default class ListItem extends Component {
  //nilai awal
  constructor(props) {
    super(props);
    this.state = {
      modal1visible: false,
      modal2visible: false,
    };
  }

  //modal tampilan legend
  handleModal1 = (results) => {
    this.setState({
      modal1visible: true,
      name: results.name,
      title: results.title,
      desc: results.description,
      image: results.image,
    })
  }
  //modal tampilan about
  handleModal2 = () => {
    this.setState({
      modal2visible: true,
    })
  }

  render() {
    return (
      <div className="container">
        <div className="boxWhite">
          <center>
            <h1 className="m-0">LIST MATCH</h1>
            <Button
            className="button ml-5 mr-5 rounded mb-2"
            //misal di klik doi manggil modal 2 ( fungsi ) agar nilai modal visible true
            onClick={() => {this.handleModal2()}}
            >
            About Me
            </Button>
          </center>
          {/* Modal 1 yang nampilin list data */}
          <Modal
            title="Status"
            centered
            visible={this.state.modal1visible}
            onOk={() => this.setState({ modal1visible: false })}
            onCancel={() => this.setState({ modal1visible: false })}
            width={500}
          >
            <div className="text-center">
              <img src={this.state.image} alt="cover comic"></img>
              <h3>{this.state.name}</h3>
              <p>Author: {this.state.title}</p>
            </div>
            <p>{this.state.desc}</p>
          </Modal>
          {/* Modal 2 yang nampilin about */}
          <Modal
            title="ABOUT ME"
            centered
            visible={this.state.modal2visible}
            onOk={() => this.setState({ modal2visible: false })}
            onCancel={() => this.setState({ modal2visible: false })}
            width={500}
          >
            <div className="text-center">
              <h3>Indra Kurniawan Santoso</h3>
            </div>
            <p>Umur&nbsp;: 21 Tahun</p>
            <p>TTL&nbsp;: Semarang, 20 April 1999</p>
            <p>Hobby&nbsp;: Renang</p>
            <p>Tujuan hidup&nbsp;: bahagiain ortu, iso golek duet dewe.</p>
            <p>instagram&nbsp;: @indrakurniawans</p>
            <p>twitter&nbsp;: @pappppoyy</p>
            <p>Store&nbsp;: @ndrksXstore</p>
          </Modal>
          <div className="container">
            <center>
              {/* Map perulangan buat nampilin data dari legend .json */}
            {Legend.map((results) => {
              return(
                <div className="card mb-3 text-center d-flex shadow" key={results.id}>
                  <div className="card-body text-center">
                    <img src={results.image} alt="Legend"></img>
                    <h3 className="card-title">{results.name}</h3> 
                  </div>
                  <button
                    className="button ml-5 mr-5 rounded mb-2"
                    //manggil handle modal 1 yowww biar nilai nya true
                    onClick={() => this.handleModal1(results)}
                    //result, dikirim buat di tampilin di modal
                  >                  
                  show more detail
                  </button>
                </div>
              );
            })}
            </center>
          </div>
        </div>
      </div>
    );
  }
}
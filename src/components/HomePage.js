import React, { Component } from 'react'

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = { values: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      createUI(){
         return this.state.values.map((el, i) =>

            <tbody value={el||''} onChange={this.handleChange.bind(this, i)} key={i}>
                <tr >
                    <td>
                        <input type="text" placeholder="Basic pay"/>
                    </td>
                    <td>
                        <input type="text"/>
                    </td>
                    <td><input type="text"/></td>
                    <td><input type="text"/></td>
                    <td className="shhsfsfghaa"><button className="dropp-bbdd-pmnt-removve" type="button" onClick={this.removeClick.bind(this, i)}><i class="fas fa-times"></i></button></td>
                </tr>
                
            </tbody>
         )
      }
    
      handleChange(i, event) {
         let values = [...this.state.values];
         values[i] = event.target.value;
         this.setState({ values });
      }
      
      addClick(){
        this.setState(prevState => ({ values: [...prevState.values, '']}))
      }
      
      removeClick(i){
         let values = [...this.state.values];
         values.splice(i,1);
         this.setState({ values });
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.values.join(', '));
        event.preventDefault();
      }

    render() {
        return (
            <>
              <div className="drop-bd-payment-slip-print-main-section">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="drop-bd-payment-slip-print-main-section-booxxx">
                        <div className="drop-bd-payment-slip-print-main-section-booxxx-bgg">
                          {/* Logo Part */}
                          <div className="drop-bd-payment-slip-print-main-section-logo-section">
                            <div className="row">
                              <div className="col-md-8">
                                <div className="drop-bd-payment-slip-print-main-logo-img">
                                    <img src={require('../dbd-logo.png')} alt="orponbd global collections"/>
                                    <p>Jass Nibash, Plot-5, Avenue-1, Block-B, Section-10, Mirpur, Dhaka-1216</p>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="drop-bd-payment-slip-print-main-date-input">
                                  <input type="text" placeholder="03/12/2020"/>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Logo Part */}
                          {/* Name and staf section */}
                          <div className="drop-bd-payment-slip-print-main-name-and-staf-section">
                            <div className="row">
                              <div className="col-md-7">
                                <div className="drop-bd-payment-slip-print-main-name-and-staf-txt">
                                  <h5><span>Name :</span><input type="text" placeholder="Type your name"/></h5>
                                  <h5><span>NRC NO :</span><input type="text" placeholder="Type nrc no"/></h5>
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="drop-bd-payment-slip-print-main-name-and-staf-txt-right">
                                  <h5><span>STAFF NO :</span><input type="text"/></h5>
                                  <h5><span>Payslip for :</span><input type="text" placeholder="December, 2020"/></h5>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Name and staf section */}
                          {/* Table section */}
                          <div className="drop-payment-slipp-table-section-box">
                            <div className="row">
                              <div className="col-md-12">
                              <div class="merchent-list-brancxx-sec-bbox">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col col-6" className="earnninng-extrs">EARNINGS</th>
                                            <th scope="col col-6">CURRENT(RM)</th>
                                            <th scope="col col-6" className="earnninng-extrs">DEDUCTIONS</th>
                                            <th scope="col col-6">CURRENT(RM)</th>
                                        </tr>
                                    </thead>

                                        <tbody>
                                            <tr>
                                                <td>
                                                <input type="text" placeholder="Basic pay"/>
                                                </td>
                                                <td>
                                                <input type="text"/>
                                                </td>
                                                <td><input type="text"/></td>
                                                <td><input type="text"/></td>
                                            </tr>
                                        </tbody>

                                        {this.createUI()}        
                                        {/* <input type='button' value='Add More' onClick={this.addClick.bind(this)}/> */}
                                        <button className="drppp-bbd-add-mr-btn" type="button" onClick={this.addClick.bind(this)}><i className="fas fa-plus"></i></button> 
                                  </table>
                                 
                                </div>
                              </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                     {/* Total Section */}
                                  <div className="drop-bd-payment-slipp-sectionn">
                                  <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col col-6" className="earnninng-extrsx">Total</th>
                                            <th scope="col col-6" className="ffonntt-pplstp-bold"><input type="text"/></th>
                                            <th scope="col col-6" className="earnninng-extrsx ffonntt-pplstp-bold"><input type="text"/></th>
                                            <th scope="col col-6" className="ffonntt-pplstp-bold"><input type="text"/></th>
                                        </tr>
                                    </thead>
                                    </table>
                                  </div>
                                  {/* Total Section */}
                                </div>
                            </div>
                          </div>
                          {/* Table section */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
        )
    }

}

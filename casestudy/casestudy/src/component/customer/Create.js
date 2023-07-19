import React, { Component } from "react";

class Create extends Component {
  render() {
    return (
      <div>
        <h1>Create New Customer </h1>
        <div class="booking-form-w3layouts">
          <form action="#" method="post">
            <h2 class="sub-heading-agileits" style="color: #0091cd">
              Customer's Service
            </h2>
            <div class="main-flex-w3ls-sectns">
              <div class="field-agileinfo-spc form-w3-agile-text">
                <input type="text" name="Name" placeholder="Name" required="" />
              </div>
            </div>
            <div class="main-flex-w3ls-sectns">
              <div class="field-agileinfo-spc form-w3-agile-text">
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  required=""
                />
              </div>
            </div>
            <div class="main-flex-w3ls-sectns">
              <div class="field-agileinfo-spc form-w3-agile-text">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  required=""
                />
              </div>
            </div>
            <div class="main-flex-w3ls-sectns">
              <div class="field-agileinfo-spc form-w3-agile-text">
                <input
                  type="text"
                  name="citizen"
                  placeholder="Citizen ID"
                  required=""
                />
              </div>
            </div>
            <div class="main-flex-w3ls-sectns">
              <div class="field-agileinfo-spc form-w3-agile-text">
                <input
                  type="text"
                  name="Address"
                  placeholder="Address"
                  required=""
                />
              </div>
            </div>
            <div class="main-flex-w3ls-sectns">
              <div class="field-agileinfo-spc form-w3-agile-text">
                <input
                  type="date"
                  name="DayOfBirth"
                  placeholder="DayOfBirth"
                  required=""
                />
              </div>
            </div>
            <div class="radio-section">
              <h6>Type Customer</h6>
              <ul class="radio-buttons-w3-agileits">
                <li>
                  <input type="radio" id="a-option" name="selector1" />
                  <label for="a-option">Diamond</label>
                  <div class="check"></div>
                </li>
                <li>
                  <input type="radio" id="b-option" name="selector1" />
                  <label for="b-option">Platinium</label>
                  <div class="check">
                    <div class="inside"></div>
                  </div>
                </li>
                <li>
                  <input type="radio" id="c-option" name="selector1" />
                  <label for="c-option">Gold</label>
                  <div class="check">
                    <div class="inside"></div>
                  </div>
                </li>
                <li>
                  <input type="radio" id="a-option" name="selector1" />
                  <label for="a-option">Silver</label>
                  <div class="check"></div>
                </li>
                <li>
                  <input type="radio" id="a-option" name="selector1" />
                  <label for="a-option">Member</label>
                  <div class="check"></div>
                </li>
              </ul>
              <div class="clear"></div>
            </div>

            <div class="clear"></div>
            <input type="submit" value="Submit" />
            <input type="reset" value="Clear Form" />
            <div class="clear"></div>
          </form>
        </div>
      </div>
    );
  }
}

export default Create;

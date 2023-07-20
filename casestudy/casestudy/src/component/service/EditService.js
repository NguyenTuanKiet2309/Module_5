import React, { Component } from "react";

class EditService extends Component {
  render() {
    return (
      <div>
        <h1>Edit The Service </h1>
        <div class="booking-form-w3layouts">
          <form action="#" method="post">
            <h2 class="sub-heading-agileits" style="color: #0091cd">
              Furama's Service
            </h2>
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
                  type="email"
                  name="Email"
                  placeholder="Usage Area(m2)"
                  required=""
                />
              </div>
            </div>
            <div class="main-flex-w3ls-sectns">
              <div class="field-agileinfo-spc form-w3-agile-text">
                <input
                  type="email"
                  name="Email"
                  placeholder="Rental Cost($)"
                  required=""
                />
              </div>
            </div>

            <div class="main-flex-w3ls-sectns">
              <div class="field-agileinfo-spc form-w3-agile-text">
                <input
                  type="email"
                  name="Email"
                  placeholder="Capacity(People)"
                  required=""
                />
              </div>
            </div>
            <div class="radio-section">
              <h6>Type Of Rent</h6>
              <ul class="radio-buttons-w3-agileits">
                <li>
                  <input type="radio" id="a-option" name="selector1" />
                  <label for="a-option">Day</label>
                  <div class="check"></div>
                </li>
                <li>
                  <input type="radio" id="b-option" name="selector1" />
                  <label for="b-option">Month</label>
                  <div class="check">
                    <div class="inside"></div>
                  </div>
                </li>
                <li>
                  <input type="radio" id="c-option" name="selector1" />
                  <label for="c-option">Year</label>
                  <div class="check">
                    <div class="inside"></div>
                  </div>
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

export default EditService;

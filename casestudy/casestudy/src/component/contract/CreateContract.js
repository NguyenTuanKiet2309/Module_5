import React, { Component } from "react";

class CreateContract extends Component {
  render() {
    return (
      <div>
        <h1>Create New Contract </h1>
        <div class="booking-form-w3layouts">
          <form action="#" method="post">
            <h2 class="sub-heading-agileits" style="color: #0091cd">
              Contract's Service
            </h2>
            <div class="main-flex-w3ls-sectns">
              <div class="field-agileinfo-spc form-w3-agile-text">
                <input type="text" name="Name" placeholder="Name" required="" />
              </div>
            </div>
            <div class="main-flex-w3ls-sectns">
              <div class="field-agileinfo-spc form-w3-agile-text">
                <input
                  type="date"
                  name="dayStart"
                  placeholder="Day Start"
                  required=""
                />
              </div>
            </div>
            <div class="main-flex-w3ls-sectns">
              <div class="field-agileinfo-spc form-w3-agile-text">
                <input
                  type="date"
                  name="DayEnd"
                  placeholder="Day End"
                  required=""
                />
              </div>
            </div>
            <div class="main-flex-w3ls-sectns">
              <div class="field-agileinfo-spc form-w3-agile-text">
                <input
                  type="text"
                  name="PreOrderAmount"
                  placeholder="Pre-order amount"
                  required=""
                />
              </div>
            </div>
            <div class="main-flex-w3ls-sectns">
              <div class="field-agileinfo-spc form-w3-agile-text">
                <input
                  type="text"
                  name="total"
                  placeholder="Total payment amount"
                  required=""
                />
              </div>
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

export default CreateContract;

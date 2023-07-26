

export default function CreateCustomer() {
    return (
      <>
        <h1>Create New Customer </h1>
        <div className="booking-form-w3layouts">
          <form action="#" method="post">
            <h2 className="sub-heading-agileits" style={{color: '#0091cd'}}>
              Customer's Service
            </h2>
            <div className="main-flex-w3ls-sectns">
              <div className="field-agileinfo-spc form-w3-agile-text">
                <input type="text" name="Name" placeholder="Name" required />
              </div>
            </div>
            <div className="main-flex-w3ls-sectns">
              <div className="field-agileinfo-spc form-w3-agile-text">
                <input type="email" name="Email" placeholder="Email" required />
              </div>
            </div>
            <div className="main-flex-w3ls-sectns">
              <div className="field-agileinfo-spc form-w3-agile-text">
                <input type="text" name="phone" placeholder="Phone" required />
              </div>
            </div>
            <div className="main-flex-w3ls-sectns">
              <div className="field-agileinfo-spc form-w3-agile-text">
                <input type="text" name="citizen" placeholder="Citizen ID" required />
              </div>
            </div>
            <div className="main-flex-w3ls-sectns">
              <div className="field-agileinfo-spc form-w3-agile-text">
                <input type="text" name="Address" placeholder="Address" required />
              </div>
            </div>
            <div className="main-flex-w3ls-sectns">
              <div className="field-agileinfo-spc form-w3-agile-text">
                <input type="date" name="DayOfBirth" placeholder="DayOfBirth" required />
              </div>
            </div>
            <div className="radio-section">
              <h6>Type Customer</h6>
              <ul className="radio-buttons-w3-agileits">
                <li>
                  <input type="radio" id="a-option" name="selector1" />
                  <label htmlFor="a-option">Diamond</label>
                  <div className="check" />
                </li>
                <li>
                  <input type="radio" id="b-option" name="selector1" />
                  <label htmlFor="b-option">Platinium</label>
                  <div className="check">
                    <div className="inside" />
                  </div>
                </li>
                <li>
                  <input type="radio" id="c-option" name="selector1" />
                  <label htmlFor="c-option">Gold</label>
                  <div className="check">
                    <div className="inside" />
                  </div>
                </li>
                <li>
                  <input type="radio" id="a-option" name="selector1" />
                  <label htmlFor="a-option">Silver</label>
                  <div className="check" />
                </li>
                <li>
                  <input type="radio" id="a-option" name="selector1" />
                  <label htmlFor="a-option">Member</label>
                  <div className="check" />
                </li>
              </ul>
              <div className="clear" />
            </div>
            <div className="clear" />
            <input type="submit" defaultValue="Submit" />
            <input type="reset" defaultValue="Clear Form" />
            <div className="clear" />
          </form>
        </div>
    </>
    );
  
}



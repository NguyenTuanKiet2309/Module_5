

export default function EditService() {

    return (
      <>
        <h1>Edit The Service </h1>
        <div className="booking-form-w3layouts">
          <form action="#" method="post">
            <h2 className="sub-heading-agileits" style={{color: '#0091cd'}}>
              Furama's Service
            </h2>
            <div className="main-flex-w3ls-sectns">
              <div className="field-agileinfo-spc form-w3-agile-text">
                <input type="email" name="Email" placeholder="Email" required />
              </div>
            </div>
            <div className="main-flex-w3ls-sectns">
              <div className="field-agileinfo-spc form-w3-agile-text">
                <input type="email" name="Email" placeholder="Usage Area(m2)" required />
              </div>
            </div>
            <div className="main-flex-w3ls-sectns">
              <div className="field-agileinfo-spc form-w3-agile-text">
                <input type="email" name="Email" placeholder="Rental Cost($)" required />
              </div>
            </div>
            <div className="main-flex-w3ls-sectns">
              <div className="field-agileinfo-spc form-w3-agile-text">
                <input type="email" name="Email" placeholder="Capacity(People)" required />
              </div>
            </div>
            <div className="radio-section">
              <h6>Type Of Rent</h6>
              <ul className="radio-buttons-w3-agileits">
                <li>
                  <input type="radio" id="a-option" name="selector1" />
                  <label htmlFor="a-option">Day</label>
                  <div className="check" />
                </li>
                <li>
                  <input type="radio" id="b-option" name="selector1" />
                  <label htmlFor="b-option">Month</label>
                  <div className="check">
                    <div className="inside" />
                  </div>
                </li>
                <li>
                  <input type="radio" id="c-option" name="selector1" />
                  <label htmlFor="c-option">Year</label>
                  <div className="check">
                    <div className="inside" />
                  </div>
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



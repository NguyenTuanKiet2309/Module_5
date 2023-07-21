export default function CreateContract() {
    return (
      <>
        <h1>Create New Contract </h1>
        <div className="booking-form-w3layouts">
          <form action="#" method="post">
            <h2 className="sub-heading-agileits" style={{color: '#0091cd'}}>
              Contract's Service
            </h2>
            <div className="main-flex-w3ls-sectns">
              <div className="field-agileinfo-spc form-w3-agile-text">
                <input type="text" name="Name" placeholder="Name" required />
              </div>
            </div>
            <div className="main-flex-w3ls-sectns">
              <div className="field-agileinfo-spc form-w3-agile-text">
                <input type="date" name="dayStart" placeholder="Day Start" required />
              </div>
            </div>
            <div className="main-flex-w3ls-sectns">
              <div className="field-agileinfo-spc form-w3-agile-text">
                <input type="date" name="DayEnd" placeholder="Day End" required />
              </div>
            </div>
            <div className="main-flex-w3ls-sectns">
              <div className="field-agileinfo-spc form-w3-agile-text">
                <input type="text" name="PreOrderAmount" placeholder="Pre-order amount" required />
              </div>
            </div>
            <div className="main-flex-w3ls-sectns">
              <div className="field-agileinfo-spc form-w3-agile-text">
                <input type="text" name="total" placeholder="Total payment amount" required />
              </div>
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





export default function ListCustomer() {

        return (
            <>
            <div className="container-xl container">
              <div className="table-responsive">
                <div className="table-wrapper">
                  <div className="table-title">
                    <div className="row">
                      <div className="col-sm-6">
                        <h2>Customer <b>Service</b></h2>
                      </div>
                      <div className="col-sm-6">
                        <a href="#addCustomerModal" className="btn btn-success" data-toggle="modal"><i className="material-icons"></i> <span>Add New Service</span></a>
                        <a href="#deleteCustomerModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons"></i> <span>Delete</span></a>
                      </div>
                    </div>
                  </div>
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>
                          <span className="custom-checkbox">
                            <input type="checkbox" id="selectAll" />
                            <label htmlFor="selectAll" />
                          </span>
                        </th>
                        <th>Name</th>
                        <th>DayOfBirth</th>
                        <th>Citizen</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Type Customer</th>
                        <th>Address</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span className="custom-checkbox">
                            <input type="checkbox" id="checkbox1" name="options[]" defaultValue={1} />
                            <label htmlFor="checkbox1" />
                          </span>
                        </td>
                        <td>Villa</td>
                        <td>100</td>
                        <td>400</td>
                        <td>10</td>
                        <td>Day</td>
                        <td>
                          <a href="#editCustomerModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                          <a href="#deleteCustomerModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="custom-checkbox">
                            <input type="checkbox" id="checkbox2" name="options[]" defaultValue={1} />
                            <label htmlFor="checkbox2" />
                          </span>
                        </td>
                        <td>Room</td>
                        <td>120</td>
                        <td>500</td>
                        <td>8</td>
                        <td>Year</td>
                        <td>
                          <a href="#editCustomerModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                          <a href="#deleteCustomerModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="custom-checkbox">
                            <input type="checkbox" id="checkbox3" name="options[]" defaultValue={1} />
                            <label htmlFor="checkbox3" />
                          </span>
                        </td>
                        <td>House</td>
                        <td>100</td>
                        <td>450</td>
                        <td>5</td>
                        <td>Month</td>
                        <td>
                          <a href="#editCustomerModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                          <a href="#deleteCustomerModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="custom-checkbox">
                            <input type="checkbox" id="checkbox4" name="options[]" defaultValue={1} />
                            <label htmlFor="checkbox4" />
                          </span>
                        </td>
                        <td>Room</td>
                        <td>80</td>
                        <td>300</td>
                        <td>5</td>
                        <td>Day</td>
                        <td>
                          <a href="#editCustomerModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                          <a href="#deleteCustomerModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="custom-checkbox">
                            <input type="checkbox" id="checkbox5" name="options[]" defaultValue={1} />
                            <label htmlFor="checkbox5" />
                          </span>
                        </td>
                        <td>Villa</td>
                        <td>75</td>
                        <td>200</td>
                        <td>4</td>
                        <td>Month</td>
                        <td>
                          <a href="#editCustomerModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                          <a href="#deleteCustomerModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="clearfix">
                    <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                    <ul className="pagination">
                      <li className="page-item disabled"><a href="/#">Previous</a></li>
                      <li className="page-item"><a href="/#" className="page-link">1</a></li>
                      <li className="page-item"><a href="/#" className="page-link">2</a></li>
                      <li className="page-item active"><a href="/#" className="page-link">3</a></li>
                      <li className="page-item"><a href="/#" className="page-link">4</a></li>
                      <li className="page-item"><a href="/#" className="page-link">5</a></li>
                      <li className="page-item"><a href="/#" className="page-link">Next</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    
}


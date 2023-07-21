export default function ListContract() {
  return (
    <>
    <div className="container-xl container">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Contract <b>Service</b>
                  </h2>
                </div>
                <div className="col-sm-6">
                  <a href="#addCustomerModal" className="btn btn-success" data-toggle="modal">
                    <i className="material-icons"></i>{'{'}" "{'}'}
                    <span>Add New Service</span>
                  </a>
                  <a href="#deleteCustomerModal" className="btn btn-danger" data-toggle="modal">
                    <i className="material-icons"></i> <span>Delete</span>
                  </a>
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
                  <th>ID</th>
                  <th>Day Start</th>
                  <th>Day End</th>
                  <th>Pre-order amount</th>
                  <th>Total payment amount</th>
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
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td>
                    <a href="#editCustomerModal" className="edit" data-toggle="modal">
                      <i className="material-icons" data-toggle="tooltip" title="Edit">
                        
                      </i>
                    </a>
                    <a href="#deleteCustomerModal" className="delete" data-toggle="modal">
                      <i className="material-icons" data-toggle="tooltip" title="Delete">
                        
                      </i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="checkbox2" name="options[]" defaultValue={1} />
                      <label htmlFor="checkbox2" />
                    </span>
                  </td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td>
                    <a href="#editCustomerModal" className="edit" data-toggle="modal">
                      <i className="material-icons" data-toggle="tooltip" title="Edit">
                        
                      </i>
                    </a>
                    <a href="#deleteCustomerModal" className="delete" data-toggle="modal">
                      <i className="material-icons" data-toggle="tooltip" title="Delete">
                        
                      </i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="checkbox3" name="options[]" defaultValue={1} />
                      <label htmlFor="checkbox3" />
                    </span>
                  </td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td>
                    <a href="#editCustomerModal" className="edit" data-toggle="modal">
                      <i className="material-icons" data-toggle="tooltip" title="Edit">
                        
                      </i>
                    </a>
                    <a href="#deleteCustomerModal" className="delete" data-toggle="modal">
                      <i className="material-icons" data-toggle="tooltip" title="Delete">
                        
                      </i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="checkbox4" name="options[]" defaultValue={1} />
                      <label htmlFor="checkbox4" />
                    </span>
                  </td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td>
                    <a href="#editCustomerModal" className="edit" data-toggle="modal">
                      <i className="material-icons" data-toggle="tooltip" title="Edit">
                        
                      </i>
                    </a>
                    <a href="#deleteCustomerModal" className="delete" data-toggle="modal">
                      <i className="material-icons" data-toggle="tooltip" title="Delete">
                        
                      </i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="checkbox5" name="options[]" defaultValue={1} />
                      <label htmlFor="checkbox5" />
                    </span>
                  </td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td>
                    <a href="#editCustomerModal" className="edit" data-toggle="modal">
                      <i className="material-icons" data-toggle="tooltip" title="Edit">
                        
                      </i>
                    </a>
                    <a href="#deleteCustomerModal" className="delete" data-toggle="modal">
                      <i className="material-icons" data-toggle="tooltip" title="Delete">
                        
                      </i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="clearfix">
              <div className="hint-text">
                Showing <b>5</b> out of <b>25</b> entries
              </div>
              <ul className="pagination">
                <li className="page-item disabled">
                  <a href="/#">Previous</a>
                </li>
                <li className="page-item">
                  <a href="/#" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a href="/#" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item active">
                  <a href="/#" className="page-link">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a href="/#" className="page-link">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a href="/#" className="page-link">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a href="/#" className="page-link">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}

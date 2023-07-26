export default function ListContract() {
  return (
    <>
      <div class="container-xl container">
        <div class="table-responsive">
          <div class="table-wrapper">
            <div class="table-title">
              <div class="row">
                <div class="col-sm-6">
                  <h2>
                    Contract <b>Service</b>
                  </h2>
                </div>
                <div class="col-sm-6">
                  <a
                    href="#addCustomerModal"
                    class="btn btn-success"
                    data-toggle="modal"
                  >
                    <i class="material-icons">&#xE147;</i>{" "}
                    <span>Add New Service</span>
                  </a>
                  <a href="/#" class="btn btn-danger" id="deleteSelected">
                    <i class="material-icons">&#xE15C;</i> <span>Delete</span>
                  </a>
                </div>
              </div>
            </div>
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>
                    <span class="custom-checkbox">
                      <input type="checkbox" id="selectAll" />
                      <label for="selectAll"></label>
                    </span>
                  </th>
                  <th>ID</th>
                  <th>Day Start</th>
                  <th>Day End</th>
                  <th>Pre-order amount</th>
                  <th>Total payment amount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span class="custom-checkbox">
                      <input
                        type="checkbox"
                        class="checkbox"
                        id="checkbox1"
                        name="options[]"
                        value="1"
                      />
                      <label for="checkbox1"></label>
                    </span>
                  </td>
                  <td>1</td>
                  <td>2023-07-01</td>
                  <td>2023-07-31</td>
                  <td>$100</td>
                  <td>$500</td>
                  <td>
                    <a
                      href="#editCustomerModal"
                      class="edit"
                      data-toggle="modal"
                    >
                      <i
                        class="material-icons"
                        data-toggle="tooltip"
                        title="Edit"
                      >
                        &#xE254;
                      </i>
                    </a>
                    <a
                      href="#deleteCustomerModal"
                      class="delete"
                      data-toggle="modal"
                    >
                      <i
                        class="material-icons"
                        data-toggle="tooltip"
                        title="Delete"
                      >
                        &#xE872;
                      </i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="custom-checkbox">
                      <input
                        type="checkbox"
                        class="checkbox"
                        id="checkbox2"
                        name="options[]"
                        value="2"
                      />
                      <label for="checkbox2"></label>
                    </span>
                  </td>
                  <td>2</td>
                  <td>2023-08-01</td>
                  <td>2023-08-31</td>
                  <td>$200</td>
                  <td>$1000</td>
                  <td>
                    <a
                      href="#editCustomerModal"
                      class="edit"
                      data-toggle="modal"
                    >
                      <i
                        class="material-icons"
                        data-toggle="tooltip"
                        title="Edit"
                      >
                        &#xE254;
                      </i>
                    </a>
                    <a
                      href="#deleteCustomerModal"
                      class="delete"
                      data-toggle="modal"
                    >
                      <i
                        class="material-icons"
                        data-toggle="tooltip"
                        title="Delete"
                      >
                        &#xE872;
                      </i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="custom-checkbox">
                      <input
                        type="checkbox"
                        class="checkbox"
                        id="checkbox3"
                        name="options[]"
                        value="3"
                      />
                      <label for="checkbox3"></label>
                    </span>
                  </td>
                  <td>3</td>
                  <td>2023-09-01</td>
                  <td>2023-09-30</td>
                  <td>$300</td>
                  <td>$1500</td>
                  <td>
                    <a
                      href="#editCustomerModal"
                      class="edit"
                      data-toggle="modal"
                    >
                      <i
                        class="material-icons"
                        data-toggle="tooltip"
                        title="Edit"
                      >
                        &#xE254;
                      </i>
                    </a>
                    <a
                      href="#deleteCustomerModal"
                      class="delete"
                      data-toggle="modal"
                    >
                      <i
                        class="material-icons"
                        data-toggle="tooltip"
                        title="Delete"
                      >
                        &#xE872;
                      </i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

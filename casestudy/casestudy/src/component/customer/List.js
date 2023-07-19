import React, {Component} from 'react';

class List extends Component {
    render() {
        return (
          <div>
            <div class="container-xl container">
            <div class="table-responsive">
                <div class="table-wrapper">
                    <div class="table-title">
                        <div class="row">
                            <div class="col-sm-6">
                                <h2>Customer <b>Service</b></h2>
                            </div>
                            <div class="col-sm-6">
                                <a href="#addCustomerModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add New Service</span></a>
                                <a href="#deleteCustomerModal" class="btn btn-danger" data-toggle="modal"><i class="material-icons">&#xE15C;</i> <span>Delete</span></a>
                            </div>
                        </div>
                    </div>
                    <table class="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>
                                    <span class="custom-checkbox">
                                        <input type="checkbox" id="selectAll"/>
                                        <label for="selectAll"></label>
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
                                    <span class="custom-checkbox">
                                        <input type="checkbox" id="checkbox1" name="options[]" value="1"/>
                                        <label for="checkbox1"></label>
                                    </span>
                            </td>
                            <td>Villa</td>
                            <td>100</td>
                            <td>400</td>
                            <td>10</td>
                            <td>Day</td>
                            <td>
                                <a href="#editCustomerModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                <a href="#deleteCustomerModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                    <span class="custom-checkbox">
                                        <input type="checkbox" id="checkbox2" name="options[]" value="1"/>
                                        <label for="checkbox2"></label>
                                    </span>
                            </td>
                            <td>Room</td>
                            <td>120</td>
                            <td>500</td>
                            <td>8</td>
                            <td>Year</td>
                            <td>
                                <a href="#editCustomerModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                <a href="#deleteCustomerModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                    <span class="custom-checkbox">
                                        <input type="checkbox" id="checkbox3" name="options[]" value="1"/>
                                        <label for="checkbox3"></label>
                                    </span>
                            </td>
                            <td>House</td>
                            <td>100</td>
                            <td>450</td>
                            <td>5</td>
                            <td>Month</td>
                            <td>
                                <a href="#editCustomerModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                <a href="#deleteCustomerModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                    <span class="custom-checkbox">
                                        <input type="checkbox" id="checkbox4" name="options[]" value="1"/>
                                        <label for="checkbox4"></label>
                                    </span>
                            </td>
                            <td>Room</td>
                            <td>80</td>
                            <td>300</td>
                            <td>5</td>
                            <td>Day</td>
                            <td>
                                <a href="#editCustomerModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                <a href="#deleteCustomerModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                    <span class="custom-checkbox">
                                        <input type="checkbox" id="checkbox5" name="options[]" value="1"/>
                                        <label for="checkbox5"></label>
                                    </span>
                            </td>
                            <td>Villa</td>
                            <td>75</td>
                            <td>200</td>
                            <td>4</td>
                            <td>Month</td>
                            <td>
                                <a href="#editCustomerModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                <a href="#deleteCustomerModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="clearfix">
                        <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                        <ul class="pagination">
                            <li class="page-item disabled"><a href="/#">Previous</a></li>
                            <li class="page-item"><a href="/#" class="page-link">1</a></li>
                            <li class="page-item"><a href="/#" class="page-link">2</a></li>
                            <li class="page-item active"><a href="/#" class="page-link">3</a></li>
                            <li class="page-item"><a href="/#" class="page-link">4</a></li>
                            <li class="page-item"><a href="/#" class="page-link">5</a></li>
                            <li class="page-item"><a href="/#" class="page-link">Next</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
        );
    }
}

export default List;
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

class showItemDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			item: {},
		};
	}

	componentDidMount() {
		// console.log("Print id: " + this.props.match.params.id);
		axios
			.get("http://localhost:8082/api/items/" + this.props.match.params.id)
			.then((res) => {
				// console.log("Print-showItemDetails-API-response: " + res.data);
				this.setState({
					item: res.data,
				});
			})
			.catch((err) => {
				console.log("Error from ShowItemDetails");
			});
	}

	onDeleteClick(id) {
		axios
			.delete("http://localhost:8082/api/items/" + id)
			.then((res) => {
				this.props.history.push("/");
			})
			.catch((err) => {
				console.log("Error form ShowItemDetails_deleteClick");
			});
	}

	render() {
		const item = this.state.item;
		let ItemItem = (
			<div>
				<table className="table table-hover table-dark">
					{/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
					<tbody>
						{/* <tr>
						<th scope="row">1</th>
						<td>Cover</td>
						<td>{item.image}</td>
					</tr> */}
						<tr>
							<th scope="row">1</th>
							<td>Title</td>
							<td>{item.title}</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td>Quantity</td>
							<td>{item.quantity}</td>
						</tr>
						<tr>
							<th scope="row">4</th>
							<td>Price</td>
							<td>{item.price}</td>
						</tr>
						<tr>
							<th scope="row">5</th>
							<td>Published Date</td>
							<td>{item.published_date}</td>
						</tr>
						<tr>
							<th scope="row">6</th>
							<td>Description</td>
							<td>{item.description}</td>
						</tr>
					</tbody>
				</table>
			</div>
		);

		return (
			<div className="ShowItemDetails">
				<div className="container">
					<div className="row">
						<div className="col-md-10 m-auto">
							<br /> <br />
							<Link to="/" className="btn btn-primary float-left">
								Show Item List
							</Link>
						</div>
						<br />
						<div className="col-md-8 m-auto">
							<h1 className="display-4 text-center">Item's Record</h1>
							<p className="lead text-center">View Item's Info</p>
							<hr /> <br />
						</div>
					</div>
					<div>{ItemItem}</div>

					<div className="row">
						<div className="col-md-6">
							<button
								type="button"
								className="btn btn-danger btn-lg btn-block"
								onClick={this.onDeleteClick.bind(this, item._id)}
							>
								Delete Item
							</button>
							<br />
						</div>

						<div className="col-md-6">
							<Link to={`/edit-item/${item._id}`} className="btn btn-success btn-lg btn-block">
								Edit Item
							</Link>
							<br />
						</div>
					</div>
					{/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Item</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Item</button> */}
				</div>
			</div>
		);
	}
}

export default showItemDetails;

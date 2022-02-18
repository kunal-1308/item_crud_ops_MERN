import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

class CreateItem extends Component {
	constructor() {
		super();
		this.state = {
			title: "",
			quantity: "",
			// image: "",
			description: "",
			published_date: "",
			price: "",
		};
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();

		const data = {
			title: this.state.title,
			quantity: this.state.quantity,
			// image: this.state.image,
			description: this.state.description,
			published_date: this.state.published_date,
			price: this.state.price,
		};

		axios
			.post("http://localhost:8082/api/items", data)
			.then((res) => {
				this.setState({
					title: "",
					quantity: "",
					// image: "",
					description: "",
					published_date: "",
					price: "",
				});
				this.props.history.push("/");
			})
			.catch((err) => {
				console.log("Error in CreateItem!");
			});
	};

	render() {
		return (
			<div className="CreateItem">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<br />
							<Link to="/" className="btn btn-primary float-left">
								Show Item List
							</Link>
						</div>
						<div className="col-md-8 m-auto">
							<h1 className="display-4 text-center">Add Item</h1>
							<p className="lead text-center">Create new item</p>

							<form noValidate onSubmit={this.onSubmit}>
								<div className="form-group">
									<input
										type="text"
										// pattern="[a-zA-Z0-9]"
										placeholder="Title of the Item"
										name="title"
										className="form-control"
										value={this.state.title}
										onChange={this.onChange}
									/>
								</div>
								<br />

								<div className="form-group">
									<input
										type="number"
										placeholder="Quantity"
										name="quantity"
										className="form-control"
										value={this.state.quantity}
										onChange={this.onChange}
									/>
								</div>
								{/* <div className="form-group">
									<input
										type="file"
										placeholder="Image"
										name="image"
										className="form-control"
										value={this.state.image}
										onChange={this.onChange}
									/>
								</div> */}
								<div className="form-group">
									<input
										type="text"
										placeholder="Describe this item"
										maxLength={250}
										name="description"
										className="form-control"
										value={this.state.description}
										onChange={this.onChange}
									/>
								</div>

								<div className="form-group">
									<input
										type="date"
										placeholder="published_date"
										name="published_date"
										className="form-control"
										value={this.state.published_date}
										onChange={this.onChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										placeholder="Price of this Item"
										name="price"
										className="form-control"
										value={this.state.price}
										onChange={this.onChange}
									/>
								</div>

								<input type="submit" className="btn btn-success btn-block mt-4" />
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CreateItem;

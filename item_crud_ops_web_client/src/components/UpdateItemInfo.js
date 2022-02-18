import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

class UpdateItemInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			quantity: "",
			// image: "",
			description: "",
			published_date: "",
			price: "",
		};
	}

	componentDidMount() {
		// console.log("Print id: " + this.props.match.params.id);
		axios
			.get("http://localhost:8082/api/items/" + this.props.match.params.id)
			.then((res) => {
				// this.setState({...this.state, item: res.data})
				this.setState({
					title: res.data.title,
					quantity: res.data.quantity,
					// image: res.data.image,
					description: res.data.description,
					published_date: res.data.published_date,
					price: res.data.price,
				});
			})
			.catch((err) => {
				console.log("Error from UpdateItemInfo");
			});
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();

		const data = {
			title: this.state.title,
			quantity: this.state.quantity,
			// image: this.data.image,
			description: this.state.description,
			published_date: this.state.published_date,
			price: this.state.price,
		};

		axios
			.put("http://localhost:8082/api/items/" + this.props.match.params.id, data)
			.then((res) => {
				this.props.history.push("/show-item/" + this.props.match.params.id);
			})
			.catch((err) => {
				console.log("Error in UpdateItemInfo!");
			});
	};

	render() {
		return (
			<div className="UpdateItemInfo">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<br />
							<Link to="/" className="btn btn-primary float-left">
								Show Item List
							</Link>
						</div>
						<div className="col-md-8 m-auto">
							<h1 className="display-4 text-center">Edit Item</h1>
							<p className="lead text-center">Update Item's Info</p>
						</div>
					</div>

					<div className="col-md-8 m-auto">
						<form noValidate onSubmit={this.onSubmit}>
							<div className="form-group">
								<label htmlFor="title">Title</label>
								<input
									type="text"
									placeholder="Title of the Item"
									name="title"
									className="form-control"
									value={this.state.title}
									onChange={this.onChange}
								/>
							</div>
							<br />

							<div className="form-group">
								<label htmlFor="quantity">Quantity</label>
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
								<label htmlFor="image">Image</label>
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
								<label htmlFor="description">Description</label>
								<input
									type="text"
									placeholder="Describe this item"
									name="description"
									className="form-control"
									value={this.state.description}
									onChange={this.onChange}
								/>
							</div>

							<div className="form-group">
								<label htmlFor="published_date">Published Date</label>
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
								<label htmlFor="price">price</label>
								<input
									type="number"
									placeholder="Price of this Item"
									name="price"
									className="form-control"
									value={this.state.price}
									onChange={this.onChange}
								/>
							</div>
							<div className="text-center">
								<button type="submit" className="btn btn-info ">
									Update Item
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default UpdateItemInfo;

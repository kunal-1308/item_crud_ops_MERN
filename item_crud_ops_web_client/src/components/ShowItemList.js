import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";

class ShowItemList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			pager: {},
			pageOfItems: [],
		};
	}

	componentDidMount() {
		this.loadPage();
	}

	componentDidUpdate() {
		this.loadPage();
	}

	loadPage() {
		const params = new URLSearchParams(window.location.search);
		const page = parseInt(params.get("page")) || 1;
		if (page !== this.state.pager.currentPage) {
			axios
				.get(`http://localhost:8082/api/items?page=${page}`)
				.then((res) => {
					console.log(res);
					this.setState({
						items: res.data.pageOfItems,
						pager: res.data.pager,
					});
				})
				.catch((err) => {
					console.log("Error from ShowItemList");
				});
		}
	}

	render() {
		console.log(this.state);
		const { pager } = this.state;
		const items = this.state.items;

		console.log("PrintItem: " + items);
		let itemList;

		if (!items) {
			itemList = "there is no item recored!";
		} else {
			itemList = items.map((item, k) => <ItemCard item={item} key={k} />);
		}

		return (
			<div className="ShowItemList">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<br />
							<h2 className="display-4 text-center">Items List</h2>
						</div>

						<div className="col-md-11">
							<Link to="/create-item" className="btn btn-primary float-right">
								+ Add New Item
							</Link>
							<br />
							<br />
							<hr />
						</div>
					</div>

					<div className="list">{itemList}</div>
					{/* <div className="card-footer pb-0 pt-0"> */}
					<div>
						{pager.pages && pager.pages.length && (
							<ul className="pagination">
								<li className={`page-item first-item ${pager.currentPage === 1 ? "disabled" : ""}`}>
									<Link to={{ search: `?page=1` }} className="page-link">
										First
									</Link>
								</li>
								<li className={`page-item previous-item ${pager.currentPage === 1 ? "disabled" : ""}`}>
									<Link to={{ search: `?page=${pager.currentPage - 1}` }} className="page-link">
										Previous
									</Link>
								</li>
								{pager.pages.map((page) => (
									<li
										key={page}
										className={`page-item number-item ${
											pager.currentPage === page ? "active" : ""
										}`}
									>
										<Link to={{ search: `?page=${page}` }} className="page-link">
											{page}
										</Link>
									</li>
								))}
								<li
									className={`page-item next-item ${
										pager.currentPage === pager.totalPages ? "disabled" : ""
									}`}
								>
									<Link to={{ search: `?page=${pager.currentPage + 1}` }} className="page-link">
										Next
									</Link>
								</li>
								<li
									className={`page-item last-item ${
										pager.currentPage === pager.totalPages ? "disabled" : ""
									}`}
								>
									<Link to={{ search: `?page=${pager.totalPages}` }} className="page-link">
										Last
									</Link>
								</li>
							</ul>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default ShowItemList;

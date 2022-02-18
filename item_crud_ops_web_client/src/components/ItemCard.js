import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const ItemCard = (props) => {
	const item = props.item;

	return (
		<div className="card" style={{ width: "18rem" }}>
			{/* <img class="card-img-top" src="..." alt="Card image cap"> */}
			<div className="card-body">
				<h5 className="card-title" style={{textTransform: "uppercase"}}>{item.title}</h5>
				<h4 className="card-title">{item.price}</h4>
				<p className="card-text">{item.description}</p>
				<a href={`/show-item/${item._id}`} className="btn btn-primary">
					Edit
				</a>
			</div>{" "}
			{/* <div className="card-container">
			<div className="desc">
				<div>
					<label>Title: </label>
					<Link to={`/show-item/${item._id}`}>{item.title}</Link>
				</div>

				<div>
					<label>Price: ₹</label>
					{item.price}/-
				</div>
				<div>
					<p>
						<label>Description:  </label>
						{item.description}
					</p>
				</div>
			</div>
		</div> */}
		</div>
	);
};

export default ItemCard;

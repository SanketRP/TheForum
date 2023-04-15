import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import formatDate from "../../utils/formatDate";
import { connect } from "react-redux";

const PostItem = ({
	auth,
	post: { _id, text, name, avatar, user, likes, comments, date },
}) => (
	<div class='post bg-white p-1 my-1'>
		<div>
			<a class='text-heading' href='profile.html'>
				<img class='round-img' src={avatar} alt='' />
				<h4>{name}</h4>
			</a>
		</div>
		<div>
			<p class='my-1'>{text}</p>
			<p class='post-date'>Posted on {formatDate(date)}</p>
			<button type='button' class='btn btn-light'>
				<i class='fas fa-thumbs-up'></i>{" "}
				<span>{likes.length > 0 && <span>{likes.length}</span>}</span>
			</button>
			<button type='button' class='btn btn-light'>
				<i class='fas fa-thumbs-down'></i>
			</button>
			<Link to={`/post/${_id}`} class='btn btn-heading'>
				Discussion{" "}
				{comments.length > 0 && (
					<span class='comment-count'>{comments.length}</span>
				)}
			</Link>
			{!auth.loading && user === auth.user._id && (
				<button type='button' class='btn btn-danger'>
					<i class='fas fa-times'></i>
				</button>
			)}
		</div>
	</div>
);

PostItem.propTypes = {
	post: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToPorps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToPorps, {})(PostItem);

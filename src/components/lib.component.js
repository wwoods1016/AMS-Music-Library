import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Library = props => (
	<tr>
		<td>{props.music.music_title}</td>
		<td>{props.music.music_composer}</td>
		<td>{props.music.music_description}</td>
		<td>{props.music.music_class}</td>
		<td>
			<Link to={'/edit/' + props.music._id}>
				<button className="btn btn-primary">Edit</button>
			</Link>
		</td>
	</tr>
);

export default class MusicList extends Component {
	constructor(props) {
		super(props);
		this.state = { pieces: [] };
	}

	componentDidMount() {
		axios
			.get('http://localhost:4000/pieces/')
			.then(response => {
				this.setState({
					pieces: response.data
				});
			})
			.catch(function(error) {
				console.log(error);
			});
	}	

	musicList() {
		return this.state.pieces.map(function(currentPiece, i) {
			return <Library music={currentPiece} key={i} />;
		});
	}

	render() {
		return (
			<div>
				<table
					className="table table-striped"
					style={{ marginTop: 20 }}
				>
					<thead>
						<tr>
							<th>Title</th>
							<th>Composer</th>
							<th>Description</th>
							<th>Class</th>
							<th></th>
							
						</tr>
					</thead>
					<tbody>{this.musicList()}</tbody>
				</table>
			</div>
		);
	}
}

import React, { Component } from 'react';
import axios from 'axios';

export default class EditMusic extends Component {
	constructor(props) {
		super(props);

		this.onChangeMusicDescription = this.onChangeMusicDescription.bind(this);
		this.onChangeMusicComposer = this.onChangeMusicComposer.bind(this);
		this.onChangeMusicClass = this.onChangeMusicClass.bind(this);
		this.onChangeMusicTitle = this.onChangeMusicTitle.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			music_description: '',
			music_composer: '',
			music_title: '',
			music_class: ''
        };
	}

	componentDidMount() {
		axios
			.get('http://localhost:4000/pieces/' + this.props.match.params.id)
			.then(response => {
				this.setState({
					music_description: response.data.music_description,
					music_composer: response.data.music_composer,
					music_class: response.data.music_class,
					music_title: response.data.music_title
				});
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	onChangeMusicDescription(e) {
		this.setState({
			music_description: e.target.value
		});
	}

	onChangeMusicComposer(e) {
		this.setState({
			music_composer: e.target.value
		});
	}

	onChangeMusicClass(e) {
		this.setState({
			music_class: e.target.value
		});
	}

	onChangeMusicTitle(e) {
		this.setState({
			music_title: e.taret.value
		});
	}

	onSubmit(e) {
		e.preventDefault();
		const obj = {
			music_description: this.state.music_description,
			music_composer: this.state.music_composer,
			music_class: this.state.music_class,
			music_title: this.state.music_title
		};
		console.log(obj);
		axios
			.post(
				'http://localhost:4000/pieces/update/' +
					this.props.match.params.id,
				obj
			)
			.then(res => console.log(res.data));

		this.props.history.push('/');
	}

		onSubmit(e) {
		e.preventDefault();

        console.log("- - - - -");
        console.log(`Form submitted`);
        console.log(`Title: ${this.state.music_title}`);
        console.log(`Composer: ${this.state.music_composer}`);
        console.log(`Description: ${this.state.music_description}`);        
        console.log(`Class: ${this.state.music_class}`);    

        const newMusic = {
			music_description: this.state.music_description,
			music_composer: this.state.music_composer,
			music_class: this.state.music_class,
			music_title: this.state.music_title
		};

		axios
			.post('http://localhost:4000/pieces/add', newMusic)
			.then(res => console.log(res.data));

		this.setState({
			music_description: '',
			music_composer: '',
            music_title: '',
            music_class: ''
		});
	}

	render() {
		return (
			<div>
				<h3 align="center">Update Library</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Title: </label>
						<input
							type="text"
							className="form-control"
							value={this.state.music_title}
							onChange={this.onChangeMusicTitle}
						/>
					</div>
					<div className="form-group">
						<label>Composer: </label>
						<input
							type="text"
							className="form-control"
							value={this.state.music_composer}
							onChange={this.onChangeMusicComposer}
						/>
					</div>
					<div className="form-group">
						<label>Description: </label>
						<input
							type="text"
							className="form-control"
							value={this.state.music_description}
							onChange={this.onChangeMusicDescription}
						/>
					</div>
					<div className="form-group">
						<div className="form-check">
							<input
								className="form-check-input"
								type="radio"
								name="classOptions"
								id="classD"
								value="D"
								checked={this.state.music_class === 'D'}
								onChange={this.onChangeMusicClass}
							/>
							<label className="form-check-label">
								D
							</label>
						</div>
						<div className="form-check">
							<input
								className="form-check-input"
								type="radio"
								name="classOptions"
								id="classC"
								value="C"
								checked={this.state.music_class === 'C'}
								onChange={this.onChangeMusicClass}
							/>
							<label className="form-check-label">
								C
							</label>
						</div>
						<div className="form-check">
							<input
								className="form-check-input"
								type="radio"
								name="classOptions"
								id="classCC"
								value="CC"
								checked={
									this.state.music_class === 'CC'
								}
								onChange={this.onChangeMusicClass}
							/>
							<label className="form-check-label">
								CC
							</label>
						</div>
						<div className="form-check">
							<input
								className="form-check-input"
								type="radio"
								name="classOptions"
								id="classB"
								value="B"
								checked={this.state.music_class === 'B'}
								onChange={this.onChangeMusicClass}
							/>
							<label className="form-check-label">
								B
							</label>
						</div>
						<div className="form-check">
							<input
								className="form-check-input"
								type="radio"
								name="classOptions"
								id="classBB"
								value="BB"
								checked={
									this.state.music_class === 'BB'
								}
								onChange={this.onChangeMusicClass}
							/>
							<label className="form-check-label">
								BB
							</label>
						</div>
						<div className="form-check">
							<input
								className="form-check-input"
								type="radio"
								name="classOptions"
								id="classA"
								value="A"
								checked={this.state.music_class === 'A'}
								onChange={this.onChangeMusicClass}
							/>
							<label className="form-check-label">
								A
							</label>
						</div>
						<div className="form-check">
							<input
								className="form-check-input"
								type="radio"
								name="classOptions"
								id="classAA"
								value="AA"
								checked={
									this.state.music_class === 'AA'
								}
								onChange={this.onChangeMusicClass}
							/>
							<label className="form-check-label">
								AA
							</label>
						</div>
						<div className="form-check">
							<input
								className="form-check-input"
								type="radio"
								name="classOptions"
								id="classOther"
								value="Other"
								checked={
									this.state.music_class === 'Other'
								}
								onChange={this.onChangeMusicClass}
							/>
							<label className="form-check-label">
								Other
							</label>
						</div>
					</div>

					<br />

					<div className="form-group">
						<input
							type="submit"
							value="Update Library"
							className="btn btn-primary"
						/>
					</div>
				</form>
			</div>
		);
	}
}

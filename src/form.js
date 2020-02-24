import React from 'react';
import './style.css'

class Unc extends React.Component {
	constructor(){
			super();

			this.state = {
				fistName:'',
				fistEmail:''
			}
		}
// /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

	handleChange = (e) => {
		this.setState({
		fistName: e.target.value
	})
	if(e.target.value.length === 0 || e.target.value.length < 8 ){
		this.setState({
			error:'minimal 8 digit !!!'
		})
	}
	else {
		this.setState({
			error:''
		})
	}

	}

	render(){
		return (
			<div className="form-ko">
			<h1>FORM
			</h1>
			<div>
				<form>
				  <label className="label">Email
				  <br/>
				  	<input
				      name="firstName"
				      type="email"
				      placeholder="masukan Email"
				      onChange={this.handleChange1}
				      value={this.state.firstEmail}
				    />
				    </label>
				</form>
				<br/>

				<form>
				  <label className="label">Password
				  <br/>
				  	<input
				      name="firstName"
				      type="Password"
				      placeholder="masukan Password"
				      onChange={this.handleChange}
				      value={this.state.firstName}
				    />
				  <br/>
				    {this.state.error && <span style={{color: "red"}} className="error-i">{this.state.error}</span>}
				  </label>
				</form>


				<br/>
				<button >Kirim</button>
			</div>
			</div>
			);
	}
}

export default Unc;

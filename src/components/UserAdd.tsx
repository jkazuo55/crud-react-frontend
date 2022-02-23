import React, { FC, useState } from "react";
import uniquid from "uniqid";
import UserService from "../services/user.service"
import Swal from "sweetalert2";

export interface IUserAddProps {};

export const UserAdd: FC<IUserAddProps> = (props) => {
	  const [name, setName] = useState("")
	  const [email, setEmail] = useState("")
	  const [phone, setPhone] = useState("")

		const handlerSetName=(e:React.FormEvent<HTMLInputElement>): void =>{
			setName(e.currentTarget.value)
		}
		const handlerSetEmail=(e:React.FormEvent<HTMLInputElement>): void =>{
			setEmail(e.currentTarget.value)
		}
		const handlerSetPhone=(e:React.FormEvent<HTMLInputElement>): void =>{
			setPhone(e.currentTarget.value)
		}
		const createUser=():void=>{
			const user={
				name:name,
				email:email,
				phone:phone,
				// userId:uniquid()
			}
			UserService.create(user)
				.then(function (response){
					// 	if (response.status === 200) {
					// 		handleTimeTransformed((response.data as any).response)
					// 	} else {
					// 	console.log("error");
					// }
					Swal.fire('correct',"user created successfully")
				})
				.catch(function (error) {
					console.log(error);
				});
		}

		return (
				<div className="container">
					<div className="row">
						<h2>Create User</h2>
					</div>
					<div className="row">
						<div className="col-sm-6 offset-3">
							<div className="mb-3">
								<label htmlFor="name" className="form-label">Name</label>
								<input type="text" className="form-control"value={name} onChange={handlerSetName}/>
							</div>
							<div className="mb-3">
								<label htmlFor="email" className="form-label">Email</label>
								<input type="text" className="form-control" value={email} onChange={handlerSetEmail}/>
							</div>
							<div className="mb-3">
								<label htmlFor="phone" className="form-label">Phone</label>
								<input type="text" className="form-control" value={phone} onChange={handlerSetPhone}/>
							</div>

							<button onClick={createUser} className="btn btn-success">create</button>
						</div>
					</div>
				</div>
		);
}

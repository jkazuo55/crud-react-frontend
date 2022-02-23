import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserService from "../services/user.service";
import {IUser} from "./User"
interface IUserEditProps {};

export const UserEdit: FC<IUserEditProps> = (props) => {
	  
	  const [name, setName] = useState("")
	  const [email, setEmail] = useState("")
	  const [phone, setPhone] = useState("")

	  const params=useParams();

		const editUser=():void=>{
			const user:IUser={
				name:name,
				email:email,
				phone:phone,
				// _id:params._id,
			}
			UserService.update(user,params._id as string)
			.then(res=>{
				// setName(res.data.name)
				// setEmail(res.data.email)
				// setPhone(res.data.phone)
				console.log("data",res);
			})
		}

		useEffect(() => {
			UserService.getOne(params._id as string)
			.then(res=>{
				setName(res.data.name)
				setEmail(res.data.email)
				setPhone(res.data.phone)
			})
		}, [])
		
			
		const handlerSetName=(e:React.FormEvent<HTMLInputElement>): void =>{
			setName(e.currentTarget.value)
		}
		const handlerSetEmail=(e:React.FormEvent<HTMLInputElement>): void =>{
			setEmail(e.currentTarget.value)
		}
		const handlerSetPhone=(e:React.FormEvent<HTMLInputElement>): void =>{
			setPhone(e.currentTarget.value)
		}
		
		return (
			<div className="container">
			<div className="row">
				<h2>Edit User</h2>
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

					<button onClick={editUser} className="btn btn-success">Edit</button>
				</div>
			</div>
		</div>
		);
}

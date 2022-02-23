import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../services/user.service"

interface IUserProps {
	user:IUser;
};

export interface IUser{
	name:string,
	email:string,
	phone:string,
	_id?:string
}

export const User: FC<IUserProps> = ({user}:IUserProps) => {
		const navigate = useNavigate();

		const deleteUser=(id:string)=>{
			UserService.deleteUser(user._id!)
			.then(res=>{
				console.log(res)
				navigate(0);
			}).catch(err =>{
				console.log(err)
			})
		}

		return (
				<div className="container">
					<div className="row">
						<div className="col-sm-6 offset-3">

						<ul className="list-group">
							<li className="list-group-item">{user._id}</li>
							<li className="list-group-item">{user.name}</li>
							<li className="list-group-item">{user.email}</li>
							<li className="list-group-item">{user.phone}</li>
						</ul>
						<Link to={`/edit-user/${user._id}`}><li className="btn btn-success">Editar</li></Link>
						&nbsp;
						<button className="btn btn-danger" onClick={()=>{deleteUser(user._id!)}}>Borrar</button>
						<hr className="mt-4"/>
						</div>
					</div>
				</div>
		);
}

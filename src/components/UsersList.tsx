import { FC, useEffect, useState } from "react";
import {User} from "./User"
import UserService from "../services/user.service"
import {IUser} from "./User"

interface IUsersListProps {};

export const UsersList: FC<IUsersListProps> = (props) => {

		const [userList, setUserList] = useState<IUser[]>([]);

		useEffect(() => {
			UserService.getAll()
			.then(res=>{
				setUserList(res.data)
				console.log(res.data)
			}).catch(err=>{
				console.log(err)
			})
		}, [])
		
		const getUsers = userList.map(user=>{
			return(
				<div>
					<User user={user}/>
				</div>
			)
		})
		return (
				<div>
						<h2>Lista de Usuarios</h2>
						{getUsers}
				</div>
		);
}

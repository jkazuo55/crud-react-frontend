import http from "../http-common";
import {IUser} from "../components/User"

const create = (data:IUser)=>{
	return http.post<IUser>("/user/create-user",data)
}
const getAll = ()=>{
	return http.get<Array<IUser>>("/user/users")
}

const getOne=(id:string)=>{
	return http.get<IUser>(`/user/get-user/${id}`)
}

const update=(data:IUser,id:string)=>{
	console.log("mi data",id);
	return http.put<IUser>(`/user/edit-user/${id}`,data)
}

const deleteUser = (id:string)=>{
	return http.delete<any>(`/user/delete-user/${id}`)
}
const UserService ={
	getAll,
	getOne,
	create,
	update,
	deleteUser
}

export default UserService;
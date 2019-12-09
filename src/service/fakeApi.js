const USERS = '@users'

export const getUsers = () => JSON.parse(localStorage.getItem(USERS))

export const addUser = user => {
	const userList = getUsers() || []
	const exists = userList.find(u => u.email === user.email)
	if(!!exists){
	return({error:"Usuário Já Existe"})
	}else{
	userList.push(user)
	localStorage.setItem(USERS,JSON.stringify(userList))
    }

}


export const getUser = (email,pass) => {
	const userList = getUsers() || []
	const exists = userList.find(u => u.email === email && u.password === pass)
	if(!!exists){
	return exists;
	}else {
	return({error:"Email ou Senha Inválida"})
	}
}
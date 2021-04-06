import axios from 'axios';

export default {
	//     USER ROUTES

	findUser: function (email) {
		return axios.get('/api/use/find', {
			params: {
				email: email.email,
			},
		});
	},

	getUsers: function () {
		return axios.get('/api/user');
	},
	// Gets the post with the given id
	getUser: function (id) {
		return axios.get('/api/user/' + id);
	},
	// Deletes the post with the given id
	deleteUser: function (id) {
		return axios.delete('/api/user/' + id);
	},
	// Log the user in
	login: function (email, password) {
		return axios.post('/api/user/login', { email: email, password: password });
	},
	// New user registration
	signup: function (userData) {
		console.log('API singup', userData);
		return axios.post('/api/user/signup', userData);
	},

	// Logout user
	logout: function () {
		return axios.post('/api/use/logout');
	},
};

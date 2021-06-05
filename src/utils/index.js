export const apiErrorHandler = (error) => {
	let title = '';
	let message = 'Something wrong';

	if (error.response) {
		title = error.response.data.title;
		message = error.response.data.message;
	} else if (error.request) {
		message = error.request._response;
	} else {
		message = error.message;
	}
	alert(title, message);
};
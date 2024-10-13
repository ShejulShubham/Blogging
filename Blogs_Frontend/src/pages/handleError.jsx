function handleError(error) {
    if (error.response) {
        console.error('Server responded with an error:', error.response.data);
        return 'Please try again later.';
    } else if (error.request) {
        console.error('No response received:', error.request);
        return 'No response from the server.';
    } else {
        console.error('Error setting up the request:', error.message);
        return 'Error setting up the request:', error.message;
    }
}

export const emptyArr = [];

export default handleError
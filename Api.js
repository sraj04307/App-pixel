const options = {
	method: 'GET',
	headers: {
		Authorization: '1XUm8EUthybSvbwzHfszh8YSAt2szVZbyytGQFEdxKI4lPrn8pmHkBfr',
	}
};

export const fetchDataFromApi = async (url) =>{
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        
        return result;
    } catch (error) {
        console.error(error);
    }
}

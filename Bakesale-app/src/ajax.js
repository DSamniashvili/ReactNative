const API = 'http://me.pvt.ge/deals?fbclid=IwAR3ajs3C38f4m63opsAyowcYQGGq4aJhdfw1okEHVhs1XHqTLTP6EZdKGu8';

export default {
    async getDealsFromApi() {
        try {
            const response = await fetch(API);
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    },

    async searchDeals(searchTerm) {
        try {
            const response = await fetch(`${API}?searchTerm=${searchTerm}`);
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    }

};
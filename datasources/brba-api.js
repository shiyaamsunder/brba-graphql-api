import { RESTDataSource } from 'apollo-datasource-rest';

export class BreakingBadAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://www.breakingbadapi.com/api/';
	}

	async getAllCharacters(limit) {
		let url = 'characters';
		if (limit) {
			const result = await this.get(`${url}?limit=${limit}`);
			return result;
		} else {
			const result = await this.get(url);
			return result;
		}
	}

	async getCharacterById(char_id) {
		const result = await this.get(`characters/${char_id}`);
		return result[0];
	}

	async getCharactersByCategory(category) {
		const result = await this.get(`characters/?category=${category}`);
		return result;
	}

	async getRandomCharacter(limit = 1) {
		const result = await this.get(`character/random?limit=${limit}`);
		return result;
	}

	async searchCharacterbyFullName(firstName, lastName) {
		const result = await this.get(`characters?name=${firstName}+${lastName}`);
		return result;
	}
}

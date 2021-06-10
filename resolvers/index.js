export const resolvers = {
	Query: {
		allCharacters: (_, { limit }, { dataSources }) =>
			dataSources['brbaApi'].getAllCharacters(limit),

		characterById: (_, { char_id }, { dataSources }) =>
			dataSources['brbaApi'].getCharacterById(char_id),

		charactersByCategory: (_, { category }, { dataSources }) =>
			dataSources['brbaApi'].getCharactersByCategory(category),

		randomCharacter: (_, { limit }, { dataSources }) =>
			dataSources['brbaApi'].getRandomCharacter(limit),

		searchCharacterbyFullName: (_, { firstName, lastName }, { dataSources }) =>
			dataSources['brbaApi'].searchCharacterbyFullName(firstName, lastName),
	},
};

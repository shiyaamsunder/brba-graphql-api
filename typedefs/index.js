import { gql } from 'apollo-server';

export const typeDefs = gql`
	type Query {
		"""
		Query to retrieve information from all characters.
		"""
		allCharacters("Limits the number of characters." limit: Int): [Character!]!

		"""
		Query to retrieve a single character by their char_id.
		"""
		characterById("Integer value. Ex: 1 or 2" char_id: ID!): Character

		"""
		Query to retrieve characters based on the category. 'Breaking Bad' or 'Better Call Saul'.
		"""
		charactersByCategory(
			"Only accepts 'Breaking Bad' or 'Better Call Saul'."
			category: String!
		): [Character!]!

		"""
		Query to retrieve a random character.
		"""
		randomCharacter(
			"Takes an integer. If no value provided, returns a single character."
			limit: Int
		): [Character!]!

		"""
		Query to retrieve characters based full name.
		"""
		searchCharacterbyFullName(
			firstName: String!
			lastName: String!
		): [Character]!
	}

	"Single Character"
	type Character {
		"Unique Id per character"
		char_id: ID!

		"A character's full name"
		name: String

		"A charcter's birthday"
		birthday: String

		"List of character's known occupation"
		occupation: [String!]!

		"Character's image"
		img: String

		"Are they alive (or did Heisenberg get to them??)"
		status: String

		"A known nickname they are referred as."
		nickname: String

		"List of seasons that the character appeared in"
		appearance: [Int!]!

		"The actor / actress that portrayed the character"
		portrayed: String

		"Series that the character is involved with."
		category: String!

		"List of Better Call seasons that the character appeared in"
		better_call_saul_appearance: [Int!]!
	}
`;

import { gql } from 'apollo-server';

export const typeDefs = gql`
	type Query {
		allCharacters(limit: Int): [Character!]!
		characterById(char_id: ID!): Character
		charactersByCategory(category: String!): [Character!]!
		randomCharacter(limit: Int): [Character!]!
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

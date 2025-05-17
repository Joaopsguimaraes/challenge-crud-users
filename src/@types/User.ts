export interface CreateUser {
	name: string
	email: string
	phone: string
	phoneIsWhatsApp: boolean
	documentId: string
	identityCard: string
	isActive: boolean
}

export interface User {
	id: string
	name: string
	avatarUrl: string
	age: number
	gender: string
	email: string
	phone: string
	phoneIsWhatsApp: boolean
	documentId: string
	identityCard: string
	isActive: boolean
	createdAt: string
	updatedAt: string
}

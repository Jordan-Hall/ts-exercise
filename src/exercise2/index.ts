export interface Person {
	firstName: string;
	lastName: string;
	fullName(): string
}


export function printName(person: Person | null) {
	return person?.fullName() || 'Person has No Name';
}

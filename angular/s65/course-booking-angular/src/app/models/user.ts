// We just mimic the database structure established in our Springboot web service
export class User {

    constructor(
    // ? in TypeScript indicates that the property is optional
    public id?: number,
    public firstName?: string,
    public lastName?: string,
    public email?: string,
    public password?: string,
    public isAdmin?: boolean
    ){}
}

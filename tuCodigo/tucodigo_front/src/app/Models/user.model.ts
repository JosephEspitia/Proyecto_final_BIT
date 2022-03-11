export class User {
    _id:string;
    photoUser:string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirm: string;
    actualCourse: string;
    goals: string[];
    permissions: boolean

        constructor(_id="", photoUser="", name="", lastName="", email="", password="", passwordConfirm="", actualCourse="", goals=[], permision=false) {
            this._id=_id;
            this.photoUser=photoUser;
            this.name=name;
            this.lastName=name;
            this.email=email;
            this.password=password;
            this.passwordConfirm=password;
            this.actualCourse=actualCourse;
            this.goals=goals;
            this.permissions=permision
        }
    
}
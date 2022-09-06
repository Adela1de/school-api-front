import { courseClass } from "../school/courseClass.model";
import { grade } from "../school/grade.model";


export interface user
{
    userId?: String;
    firstName?: String;
    lastName?: String;
    email: String;
    password: String;
    guardian?: any[];
    courseTitle?: String;
    courseClasses?: courseClass[];
    grades?: grade[];
    role?: String;
}
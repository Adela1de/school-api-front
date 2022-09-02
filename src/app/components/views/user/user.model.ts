import { courseClass } from "../school/courseClass.model";
import { grade } from "../school/grade.model";


export interface user
{
    studentId?: String;
    firstName?: String;
    lastName?: String;
    email: String;
    password: String;
    guardian?: any[];
    courseTitle?: String;
    courseClasses?: courseClass[];
    grades?: grade[];
}
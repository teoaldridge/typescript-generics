//GENERIC UTILITY TYPES
//there are many TS built-in utility types, 
//you should read he docs on them

//PARTIAL Utility Type: 

//In this example we imagine we create a createCourseGoal function where we 
//are filling in all the details in something like a form. 
//We want the courseGoal object to be initially empty, and that is why we make it of Partial type. 
//So that all its properties can be temporarily optional- 
//so that TS can accept that for a short time some will be filled in and some not. 


interface CourseGoal {
    title: string;
    description: string; 
    completeUntil: Date; 
}

function createCurseGoal(
    title: string, 
    description: string, 
    date: Date
): CourseGoal {
    //Here we use the Partial Type. Here we tell TS that this is an object which 
    //IN THE END will be a CourseGoal (an implementation of that interface)
    //But initally Partial wraps the object CourseGoal and makes all its properties optional, 
    //so we can fill them in over time. 
    //We want the courseGoal object to be initially empty, and that is why we make it of Partial type. 
    let courseGoal: Partial<CourseGoal> = {}
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date; 
    //here we can't return courseGoal as it is as it is still of Partial type
    //This is why we add 'as CourseGoal' with type casting. 
    //Because we know that in the end, by that time, we will have added all the data, so 
    //it will be a real course goal, not just a partial one. 
    return courseGoal as CourseGoal;
}

// The READONLY Utility type
//The Readonly Utility type makes it so that a variable is non-changeable
//So here we tell TS that friendnames will be an array of strings and 
//this array will stay the same.
//This way we make this a 'locked' array
const friendnames: Readonly<string[]> = ['Phil', 'Dory'];

//Therefore TS does not allow us to do the following:
// friendnames.push('Iva');
// friendnames.pop('Phil');

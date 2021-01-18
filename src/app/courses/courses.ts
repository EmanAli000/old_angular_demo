export interface ICourse
{
    Id : number;
    Name : string;
    Desc : string;
}

export interface ICourseResolver
{
    Course : ICourse,
    Error? : any
}

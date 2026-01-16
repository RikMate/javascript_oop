class Student
{
    constructor(name)
    {
        this.name = name;
        this.askQuestionNumber = 0;
    }
    askQuestion()
    {
        console.log("???");
        this.askQuestionNumber++;
    }
}
const stu1 = new Student("Pista");
stu1.askQuestion()

class StudentWithWork extends Student
{
    constructor(name)
    {
        super(name);
        this.workDone = 0;
    }   
    DoWork()
    {
        this.workDone++;
    }
}

const stu2 = new StudentWithWork("Postás Bácsi");
stu2.askQuestion();
stu2.DoWork();
console.log(stu2);
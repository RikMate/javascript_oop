function Student(name){
    this.name = name;
    this.askedQuestionNumber = 0;
}
Student.prototype.askQuestion = function(){
    console.log("???");
    this.askedQuestionNumber ++;
}
 
const stu1 = new Student("Pista");
stu1.askQuestion();
console.log(stu1);
const stu2 = new Student("Pisti");
console.log(stu2);
 
function StudentWithWork(name){
    Student.call(this, name);
    this.workDone = 0;
}
Object.setPrototypeOf(StudentWithWork.prototype, Student.prototype);
StudentWithWork.prototype.doWork = function(){
    this.workDone ++;
}
const stu3 = new StudentWithWork("Mau");
stu3.askQuestion();
console.log(stu3)
stu3.doWork();
console.log(stu3);
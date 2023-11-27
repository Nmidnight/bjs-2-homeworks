function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}
let student1 = new Student('Petr', 'male', '19');
let student2 = new Student('Mariya', 'female', '24');
let student3 = new Student('Ivan', 'male', '38');


Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
    return subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.hasOwnProperty("marks")) {
        this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function () {
    if (this.marks && this.marks.length !== 0) {
    //    let sum = this.marks.reduce((acc, i) => acc + i.marks, 0);
    //    return sum / this.marks.length;
    let sum = 0;
        for (let i = 0; i < this.marks.length; i++) {
            sum += this.marks[i];
        }
        return sum / this.marks.length;
    } else return 0
};

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}

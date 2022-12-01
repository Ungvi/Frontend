function student(name, adress, phone, course){
    this.name = name;
    this.adress = adress;
    this.phone = phone;
    this.course = course;

    this.getInfo = function(){
        return "Name: " + this.name
        + "\nAdress: " + this.adress
        + "\nPhone: " + this.phone
        + "\nCourse: " + this.course;
    }
}
var studentJohn = new student("John Winkler", "Oak street, Nr. 3", "0765485764", "Math");
var studentJane = new student("Jane Doe", "Brewery street, Nr. 7", "0762458576", "Geography");
var studentDaniel = new student("Daniel Butler", "Ash street, Nr. 11", "0784327653", "Physics");

console.log(studentJohn.getInfo())
console.log(studentJane.getInfo())
console.log(studentDaniel.getInfo())
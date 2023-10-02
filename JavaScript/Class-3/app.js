// Question1

var students;

// Question2

var students = []

// Question3

var string = ["Abdul" , "Moiz"]

// Question4

var num = [129655 , 129455]

// Question5

var booliyan = [true , false]

// Question6

var mixed = ["Abdul" , "Moiz" , 129655 , true]

// Question7

var qualifications = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.Phil." , "PhD"]

document.write("<h1>Qualifications</h1>")
document.write(qualifications)

// Question8

var students = ["Moiz" , "Mustafa" , "Yaseen"]

var score = [320 , 280 , 480]

var total = [500]

document.write("Score of " + students[0] + score[0] + ". Percentage:" + (score[0]/total) * 100 + "%")

document.write("Score of " + students[1] + score[1] + ". Percentage:" + (score[1]/total) * 100 + "%")

document.write("Score of " + students[2] + score[2] + ". Percentage:" + (score[2]/total) * 100 + "%")

// Question9

var colorname = ["Green" , "Violet" , "Purple"]

alert(colorname);

colorname.unshift(
    prompt("What color he/she wants to add to the beginning" , "Red")
)

alert(colorname)

colorname.push(
    prompt("What color he/she wants to add to the end" , "Blue")
)

alert(colorname)

colorname.unshift(
    prompt("Add two more color to the beginning of the array." , "Orange")
)

colorname.unshift(
    prompt("Add two more color to the beginning of the array." , "Brown")
)

alert(colorname)

colorname.shift()

alert(colorname)

colorname.pop()

alert(colorname);

// Question10

var studentscore = [320 , 230 , 480 , 120]

document.write("Score of Students: " + studentscore)

document.write("Ordered score of students: " + studentscore.sort())
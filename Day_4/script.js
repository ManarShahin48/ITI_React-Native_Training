
////////////Task1/////////////
// var sum = 0;
// do{
//     var val = parseInt(prompt("Enter the number"));
//     sum += val;
//     if(sum > 100)
//         break;
// }
// while(val != 0)

// document.write("The Sum is "+ sum);

////////////Task2/////////////
// var res = prompt("Enter your word")
// for(var i = 1;i < 7;i++){
//     document.write("<h"+i+">" + res + "</h"+i+">")
// }

////////////Task3/////////////
do{
    var FirstName = prompt("Enter your First Name:");
}
while(!isNaN(FirstName));
do{
    var SeconedName = prompt("Enter your Seconed Name:");
}
while(!isNaN(SeconedName));
do{
    var PhoneNumber = prompt("Enter your Phone Number:");
}
while(isNaN(PhoneNumber) || PhoneNumber.length != 11);
do{
    var Color = prompt("Enter red, green or blue color");
}
while(Color != "red" && Color != "green" &&Color != "blue");
//document.write(Color);
document.write('<h3 style = "color:'+ Color +'">'+ "Your Name: " + FirstName + " " + SeconedName + '</h3>');
document.write('<h3 style = "color:'+ Color +'">' + "Your Phone: " + PhoneNumber + '</h3>');

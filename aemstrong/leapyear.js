let year = prompt("enter a year")

if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400))
 {
    document.write(year + ' is a leap year');
}
 else {
    document.write(year + ' is not a leap year');
}

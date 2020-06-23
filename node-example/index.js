var rect = require("./rectangle");

function solveRect(l, b) {
  console.log("Solving for rectangle with length=" + l + "and breadth=" + b);
  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log("ERROR :" + err.message);
    } else {
      console.log(
        "The area of rectangle is " +
          rectangle.area() +
          " and perimeter is " +
          rectangle.perimeter()
      );
    }
  });
  console.log("This statement is after call to rect function");
}
solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 7);
solveRect(4, -1);
solveRect(0, 0);

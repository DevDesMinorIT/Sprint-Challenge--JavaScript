// 1. Copy and paste your prototype in here and refactor into class syntax.
// function CuboidMaker(length, width, height) {
//      this.length = length;
//      this.width = width;
//      this.height = height;
// }
// CuboidMaker.prototype.volume = function(length, width, height) {
//      return length * width * height;
// };
// CuboidMaker.prototype.surfaceArea = function(length, width, height) {
//      return length * width + length * height + width * height;
// };
// const newCuboid = new CuboidMaker(4, 5, 5);

<<<<<<< HEAD
class Cuboid{
  constructor(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  }
  volume(length, width, height){
    return length * width * height;
  }
  surfaceArea(length, width, height) {
       return length * width + length * height + width * height;
  }
}
//Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130
=======
function CuboidMaker(length, width, height) {
     this.length = length;
     this.width = width;
     this.height = height;
}
CuboidMaker.prototype.volume = function(length, width, height) {
     return length * width * height;
};
CuboidMaker.prototype.surfaceArea = function(length, width, height) {
     return length * width + length * height + width * height;
};
const newCuboid = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
>>>>>>> 4870e8ae72fe30503e01169ba21981f046be1260

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

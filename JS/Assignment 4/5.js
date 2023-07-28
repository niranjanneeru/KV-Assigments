const students = [
    { name: 'John', marks: [70, 85, 90] },
    { name: 'Jane', marks: [60, 75, 80] },
    { name: 'David', marks: [50, 55, 65] }
  ];
  
//   function checkAllStudentsPassed(studentsArr) {
//     return studentsArr.filter((a) => {
//         const sum = a.marks.reduce((acc, curr) => acc + curr);
//         return sum/3 > 40;
//     }).length === studentsArr.length;
//   }
  

  function checkAllStudentsPassed(studentsArr) {
    return studentsArr.every((a) => {
        const sum = a.marks.reduce((acc, curr) => acc + curr);
        return sum/3 > 40;
    });
  }

  const allStudentsPassed = checkAllStudentsPassed(students);
  
  console.log(allStudentsPassed); // Output: true

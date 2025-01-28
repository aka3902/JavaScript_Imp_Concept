// Student Data
const students = [
    { name: "John", score: 85 },
    { name: "Jane", score: 92 },
    { name: "Jack", score: 78 },
  ];
  
  // 1. Filter students who scored above 80
  const topStudents = students.filter(student => student.score > 80);
  console.log(topStudents); 
  // [{ name: "John", score: 85 }, { name: "Jane", score: 92 }]
  
  // 2. Add a new property dynamically
  const updatedStudents = students.map(student => ({
    ...student,
    passed: student.score > 80
  }));
  console.log(updatedStudents);

  
  /*
  [
    { name: "John", score: 85, passed: true },
    { name: "Jane", score: 92, passed: true },
    { name: "Jack", score: 78, passed: false }
  ]
  */
  
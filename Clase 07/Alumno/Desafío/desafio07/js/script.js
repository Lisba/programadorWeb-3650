function getStudent (list){
    var student = localStorage.getItem(list)
    
    if (student) {
      var student = JSON.parse(list)
    } else {
      student = JSON.stringify([])
      localStorage.setItem(list, student)
    }
    
    return (student)
}

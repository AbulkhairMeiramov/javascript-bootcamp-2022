/* COMPILATION PHASE
Scopes:
Global {
  Line 2: 
  const b; declared, TDZ

  Line 4: 
  const sum; declared, TDZ

  Line 16: 
  var a; decleared and initialized with "undefined"

  Line 18:
  function mult; declared, initialized, assigned
}
sum {
    // nothing happens
}
if {
    Line 9:
    let multResult; declared, TDZ
} else {
    Line 12:
    let sumResult; declared, TDZ
}
mult {
    Line 18:
    var a; declared, initialized with undefined 

    Line 18:
    var b; declared, initialized with undefined     
}
*/
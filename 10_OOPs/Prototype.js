//  Adding a property to give true length inside a String literal
let myName = "   Riken   "

String.prototype.trueLength = function(){
    let answer = (this.trim()).length
    return answer
}

let myLength = myName.trueLength()


console.log(myLength)

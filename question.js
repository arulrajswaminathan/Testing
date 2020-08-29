function Question(text, choices, answer, answer2) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.answer2 = answer2;
}

Question.prototype.isCorrectAnswer = function(choice) {
    
    if(this.answer===choice ){
      return true ; 
    }
    else if(this.answer2===choice){
      return true;  
    }
    else{
        return false;
    }
    
}

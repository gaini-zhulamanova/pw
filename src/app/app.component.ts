import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  length = 0;

  password = '';

  onButtonClick(){
    const numbers = '1234567890';
    const letters = 'qwertzuiopüasdfghjklöäyxcvbnm';
    const symbols = '!@+#-.,*';

    let validChars = '';

    if (this.includeLetters){
      validChars += letters;
    }
    if(this.includeNumbers){
      validChars += numbers;
    }
    if(this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  onChangeUseLetters(){
    console.log(this.includeLetters);
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    console.log(this.includeNumbers);
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    console.log(this.includeSymbols);
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(value: string){
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }
}


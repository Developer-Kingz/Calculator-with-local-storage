
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    chooseOperation(operation){
        if(this.currentOperand === '') return
        if(this.previousOperand != ''){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ""

    }
    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }
    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return

        switch(this.operation){
          case '+':
            computation = prev + current
            break;
          case '-':
            computation = prev - current
            break;
          case 'x':  
            computation = prev * current
            break;
          case '/':
            computation = prev / current
            break;
          default:
            return    
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    updateDisplay(){
       this.currentOperandTextElement.innerText = this.currentOperand
       this.previousOperandTextElement.innerText = this.previousOperand

       if(this.operation != null){
        this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`
       }

    }



}





const numberButton = document.querySelectorAll('[data-number]')
const allClear = document.querySelector('[data-all-clear]')
const deleteButton = document.querySelector('[data-delete]') 
const operationButtons = document.querySelectorAll('[data-operation]')
const equal = document.querySelector('[data-equal]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButton.forEach((button)=> {
    button.addEventListener('click', ()=> {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()

    })
})

operationButtons.forEach((button)=> {
    button.addEventListener('click', ()=> {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()

    })
})

equal.addEventListener('click', ()=> {
        calculator.compute()
        calculator.updateDisplay()
})

allClear.addEventListener('click', ()=> {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', ()=> {
    calculator.delete()
    calculator.updateDisplay()
})
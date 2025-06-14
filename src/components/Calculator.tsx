import React, { useState } from 'react'

export const Calculator = () => {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState<number | null>(null)
  const [operation, setOperation] = useState<string | null>(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(String(num))
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? String(num) : display + num)
    }
  }

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)

      setDisplay(`${parseFloat(newValue.toFixed(7))}`)
      setPreviousValue(newValue)
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const calculate = (firstValue: number, secondValue: number, operation: string) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue
      case '-':
        return firstValue - secondValue
      case '×':
        return firstValue * secondValue
      case '÷':
        return firstValue / secondValue
      case '=':
        return secondValue
      default:
        return secondValue
    }
  }

  const performCalculation = () => {
    const inputValue = parseFloat(display)

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation)
      setDisplay(`${parseFloat(newValue.toFixed(7))}`)
      setPreviousValue(null)
      setOperation(null)
      setWaitingForOperand(true)
    }
  }

  const clearAll = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const clearDisplay = () => {
    setDisplay('0')
  }

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">智能计算器</h2>
          <div className="bg-gray-900 text-white p-4 rounded-lg text-right">
            <div className="text-3xl font-mono">{display}</div>
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-3">
          <button
            onClick={clearAll}
            className="col-span-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            清除
          </button>
          <button
            onClick={clearDisplay}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            C
          </button>
          <button
            onClick={() => inputOperation('÷')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            ÷
          </button>

          <button
            onClick={() => inputNumber('7')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition-colors"
          >
            7
          </button>
          <button
            onClick={() => inputNumber('8')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition-colors"
          >
            8
          </button>
          <button
            onClick={() => inputNumber('9')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition-colors"
          >
            9
          </button>
          <button
            onClick={() => inputOperation('×')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            ×
          </button>

          <button
            onClick={() => inputNumber('4')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition-colors"
          >
            4
          </button>
          <button
            onClick={() => inputNumber('5')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition-colors"
          >
            5
          </button>
          <button
            onClick={() => inputNumber('6')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition-colors"
          >
            6
          </button>
          <button
            onClick={() => inputOperation('-')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            -
          </button>

          <button
            onClick={() => inputNumber('1')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition-colors"
          >
            1
          </button>
          <button
            onClick={() => inputNumber('2')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition-colors"
          >
            2
          </button>
          <button
            onClick={() => inputNumber('3')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition-colors"
          >
            3
          </button>
          <button
            onClick={() => inputOperation('+')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            +
          </button>

          <button
            onClick={() => inputNumber('0')}
            className="col-span-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition-colors"
          >
            0
          </button>
          <button
            onClick={() => inputNumber('.')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition-colors"
          >
            .
          </button>
          <button
            onClick={performCalculation}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            =
          </button>
        </div>
      </div>
    </div>
  )
}
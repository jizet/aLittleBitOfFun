'use strict'
import { getRandomWordSync, getRandomWord } from 'word-maker'

const fizzBuzz = (i) => {
  return i%3 === 0 && i%5 === 0 ?
      'FizzBuzz' : i%3 === 0 ? 'Fizz'
        : i%5 === 0 ? 'Buzz' : null
}

const printWords = () => {
  for (let i = 0; i < 100; i++) {
    console.log(`${i+1}: ${fizzBuzz(i+1) ? fizzBuzz(i+1) : getRandomWordSync()}`)
  }
}

printWords()

'use strict'
import { getRandomWordSync, getRandomWord } from 'word-maker'

const printWords = () => {
  for (let i = 0; i < 100; i++) {
    console.log(`${i+1}: ${getRandomWordSync()}`)
  }
}

printWords()

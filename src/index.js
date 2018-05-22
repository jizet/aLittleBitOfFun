'use strict'
import { getRandomWordSync, getRandomWord } from 'word-maker'
import * as fs from 'fs'

const fizzBuzz = (i) => {
  return i%3 === 0 && i%5 === 0 ?
      'FizzBuzz' : i%3 === 0 ? 'Fizz'
        : i%5 === 0 ? 'Buzz' : null
}

const writeFile = async () => {
  if (fs.existsSync('./wordFile.txt')) {
    fs.unlinkSync('./wordFile.txt')
  }
  let myFile = fs.createWriteStream('./wordFile.txt')
  for (let i = 0; i < 100; i++) {
    try {
      let word = await getRandomWord({withErrors: true})
      myFile.write(`${i+1}: ${fizzBuzz(i+1) ? fizzBuzz(i+1) : word}\n`)
    } catch (error) {
      myFile.write(`${i+1}: D'oh!\n`)
    }
  }
  myFile.end()
}

writeFile()

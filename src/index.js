'use strict'
const { getRandomWordSync, getRandomWord } = require('word-maker')

const handleAsync = () => {
  setInterval(
    async () => {
      try {
        let x = await getRandomWord({withErrors: true})
        console.log(x)
      } catch (error) {
        console.log(error.message)
      }
    }, 1000)
}

handleAsync()
// console.log('It works!')
// YOUR CODE HERE
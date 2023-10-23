const express = require('express')
const app = express()

let randomFacts = [
  {
    fact: 'A crocodile cannot stick its tongue out.',
  },
  {
    fact: "A shrimp's heart is in its head.",
  },
  {
    fact: "Like fingerprints, everyone's tongue print is different.",
  },
  {
    fact: 'Almonds are a member of the peach family.',
  },
  {
    fact: 'A cat has 32 muscles in each ear.',
  },
  {
    fact: 'Tigers have striped skin, not just striped fur.',
  },
  {
    fact: " Elephants are the only mammals that can't jump.",
  },
  {
    fact: ' The plastic things on the end of shoelaces are called aglets.',
  },
  {
    fact: 'In a group of 23 people, there is a 50% chance that two will share the same birthday.',
  },
  {
    fact: 'Russia has more surface area than Pluto.',
  },
]

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/getFact', (req, res) => {
  const generateID = Math.floor(Math.random() * randomFacts.length)
  res.json(randomFacts[generateID])
})

app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running')
})

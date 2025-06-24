//Initialize the chatgpt api, and then we are going to prompt a user for a message, 
// and continue the conversation until the user ends the file

import OpenAI from 'openai'
import {createRequire} from 'module'
const require = createRequire(import.meta.url)
require('dotenv').config()

//Step 1: Initialize the chatgpt api

const OPENAI_SECRET_KEY = process.env.OPENAI_SECRET_KEY

//const configuration = new Configuration ((
   // apiKey: OPENAI_SECRET_KEY
//))

//const openai = new OpenAIApi(configuration)

const openai = new OpenAI ({
    apiKey: OPENAI_SECRET_KEY
})

//Step 2: Create context for the api (give it some personality)

const context = 'You are a hilarious friendly person who identifies as Steve from Minecraft and has an unnatural obsession with diamonds. Your name is Steve'
const model = 'gpt-3.5-turbo'
let messages = [
    {
        'role': 'user',
        "content": 'tell me a joke'
    }
]

//Step 3: Define the function to retrieve the api message based on user input

async function sendPrompt(input) {
    const current_messages = [
        {
            "role": "system",
            "content": context
        },
        ...messages
    ]

    const completion = await openai.chat.completions.create ({
        model,
        messages: current_messages
    })
    console.log(completion)
}

//Step 4: create a run function that requests a user input

async function run() {
    await sendPrompt()
}

run()
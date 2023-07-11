import express from 'express'
import cors from 'cors'
import { Configuration, OpenAIApi } from 'openai'
const PORT = 8080

const app = express()
app.use(cors())
app.use(express.json())

const dummy = process.env.API_KEY

const configuration = new Configuration({
  apiKey: dummy,
})

const openai = new OpenAIApi(configuration)

app.post('/api', async (req, res) => {
  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: 'Create a SQL request to ' + req.body.message,
      temperature: 0.3,
      max_tokens: 60,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    res.send(200).json
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .send(error?.response.data.error.message || 'Something went wrong')
  }
})

app.listen(PORT, () => console.log('Connected'))

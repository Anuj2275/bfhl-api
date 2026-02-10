const axios = require('axios')

module.exports = async (question) => {
  if (typeof question !== 'string') throw Error()

  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      contents: [
        { parts: [{ text: question }] }
      ]
    }
  )

  const text = response.data.candidates[0].content.parts[0].text
  return text.split(' ')[0]
}

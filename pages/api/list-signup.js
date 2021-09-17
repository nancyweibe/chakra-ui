import client from '@sendgrid/client'

client.setApiKey(process.env.SENDGRID_API_KEY)

const addSendgridRecipient = (client, email, type) => {
  return new Promise((resolve, reject) => {
    const request = {
      method: 'POST',
      url: '/v3/contactdb/recipients',
      body: [{ email: email, type: type }]
    }
    client.request(request)
      .then(([response, _body]) => resolve(response))
      .catch(err => reject(err))
  })
}

const handler = async (req, res) => {
  const { method, body } = req
  if (method !== 'POST') return res.status(405).end()

  const { email, type } = body

  try {
    const response = await addSendgridRecipient(client, email, type)
    return res.status(200).json(response)
  } catch (error) {
    console.log('Error addSendgridRecipient', error)
    return res.status(422).json({ errors: [String(error)] })
  }
}

export default handler

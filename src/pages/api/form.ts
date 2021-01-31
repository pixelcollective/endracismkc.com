import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://actionnetwork.org/api/v2',
  headers: {
    ['Content-Type']: 'application/json',
    ['OSDI-API-Token']: process.env.ACTION_NETWORK_API_SECRET,
  },
})

const makeSignature = data => ({
  website: 'https://endracismkc.org',
  person: {
    family_name: data.lastName,
    given_name: data.firstName,
    email_addresses: [
      {
        address: data.email,
        status: 'subscribed',
      },
    ],
  },
  triggers: {
    autoresponse: {
      enabled: false,
    },
  },
})

const signatureEndpoint = id => `/petitions/${id}/signatures`

/**
 * Sign petition request
 */
export default async ({body: signature}, res) => {
  if (!process.env.ACTION_NETWORK_API_SECRET) {
    console.error('missing an key')
  }

  await instance
    .post(signatureEndpoint(signature.id), makeSignature(signature.data))
    .then(actionNetworkRes => {
      if (actionNetworkRes.status == 200) {
        res.status(200).end()
      }
    })
    .catch(err => {
      res.status(500).err(err).end()
    })

  return res
}

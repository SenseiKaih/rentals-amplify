// /pages/api/mtn-payment.ts
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { amount, phoneNumber, currency } = req.body;

    const mtnPaymentUrl = 'https://sandbox.mtn.com/collection/v1_0/requesttopay';
    
    try {
      const response = await axios.post(mtnPaymentUrl, {
        amount,
        currency,
        externalId: '12345',
        payer: {
          partyIdType: 'MSISDN',
          partyId: phoneNumber,
        },
        payerMessage: 'Payment for order',
        payeeNote: 'Thank you for your payment',
      }, {
        headers: {
          'Authorization': `Bearer YOUR_ACCESS_TOKEN`,
          'X-Reference-Id': 'UUID_FOR_TRANSACTION',
          'X-Target-Environment': 'sandbox', // Or production for live.
        },
      });

      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Payment failed', details: error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

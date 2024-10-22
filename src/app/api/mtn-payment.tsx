// /pages/api/mtn-payment.ts
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { amount, phoneNumber, currency } = req.body;

    const mtnPaymentUrl = process.env.MTN_PAYMENT_URL;
    const apiKey = process.env.MTN_API_KEY;
    const userId = process.env.MTN_USER_ID;
    const password = process.env.MTN_PASSWORD;

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
          'Ocp-Apim-Subscription-Key': apiKey,
          'X-Reference-Id': 'unique_reference_id',
          'X-Target-Environment': 'sandbox',
          'Authorization': `Basic ${Buffer.from(`${userId}:${password}`).toString('base64')}`,
        },
      });

      res.status(200).json({ success: true, data: response.data });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      res.status(500).json({ success: false, error: errorMessage });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
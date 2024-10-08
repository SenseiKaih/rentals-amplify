// /pages/api/airtel-payment.ts
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { amount, phoneNumber, currency } = req.body;

    const airtelPaymentUrl = 'https://sandbox.airtel.com/v1/payments';
    
    try {
      const response = await axios.post(airtelPaymentUrl, {
        amount,
        currency,
        msisdn: phoneNumber,
      }, {
        headers: {
          'Authorization': `Bearer YOUR_ACCESS_TOKEN`,
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

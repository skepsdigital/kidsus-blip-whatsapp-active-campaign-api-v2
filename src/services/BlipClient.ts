import axios from 'axios';

export class BlipClient {
  private client = axios.create({
    baseURL: 'https://http.msging.net',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': process.env.BLIP_AUTH_KEY!
    }
  });

  async sendCampaign(payload: any) {
    return this.client.post('/commands', payload);
  }
}

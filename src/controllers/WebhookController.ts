import { Request, Response} from 'express';
import { CampaignService } from '../services/CampaignService';

export class WebhookController {
  constructor(private service = new CampaignService()) {}

  async handle(req: Request, res: Response) {
    try {
      await this.service.triggerCampaign(req.body);
      return res.status(200).json({ status: 'campaign sent' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'campaing failed to sent' });
    }
  }
}

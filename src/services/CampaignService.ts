import { v4 as uuid } from 'uuid';
import { WebhookPayloadDTO } from '../dtos/WebhookPayloadDTO';
import { PhoneNormalizer } from '../utils/PhoneNormalizer';
import { BlipClient } from './BlipClient';

export class CampaignService {
  constructor(private blipClient = new BlipClient()) {}

  async triggerCampaign(data: WebhookPayloadDTO) {
    const recipient = PhoneNormalizer.normalize(data.phone);
    const language = data.hs_language.startsWith('es') ? 'es' : 'pt';

    const payload = {
      id: uuid(),
      to: 'postmaster@activecampaign.msging.net',
      method: 'set',
      uri: '/campaign/full',
      type: 'application/vnd.iris.activecampaign.full-campaign+json',
      resource: {
        campaign: {
          name: `campaña_${uuid()}`,
          campaignType: 'Batch',
          tags: [
            data.hs_lead_status,
            data.centro_propietario__nombre_
          ],
          channelType: 'WhatsApp',
          masterState: 'kids&us@msging.net',
          flowId: 'PEGAR_FLOW_ID'
        },
        audiences: [
          { recipient }
        ],
        message: {
          channelType: 'WhatsApp',
          messageTemplate: 'ALTERAR_NOME_CAMPANHA',
          MessageTemplateLanguage: language
        }
      }
    };

    return this.blipClient.sendCampaign(payload);
  }
}

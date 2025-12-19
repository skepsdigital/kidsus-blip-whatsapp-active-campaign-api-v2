export interface CampaignDTO {
  id: string;
  to: 'postmaster@activecampaign.msging.net';
  method: 'set';
  uri: '/campaign/full';
  type: 'application/vnd.iris.activecampaign.full-campaign+json';
  resource: {
    campaign: {
      name: string;
      campaignType: 'Batch';
      tags: string[];
      channelType: 'WhatsApp';
      masterState: string;
      flowId: string;
    };
    audiences: Array<{
      recipient: string;
    }>;
    message: {
      channelType: 'WhatsApp';
      messageTemplate: string;
      MessageTemplateLanguage: 'pt' | 'es' | 'en';
    };
  };
}

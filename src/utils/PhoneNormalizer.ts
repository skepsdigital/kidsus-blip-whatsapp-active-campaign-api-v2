export class PhoneNormalizer {
  static normalize(phone: string): string {
    return phone.replace(/\s+/g, '');
  }
}

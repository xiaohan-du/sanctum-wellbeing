export const PHONE_DISPLAY = '07852 135375';
export const PHONE_TEL = 'tel:+447852135375';
export const EMAIL = 'info@sanctumwellbeing.co.uk';
export const EMAIL_MAIL = `mailto:${EMAIL}`;

export const enquiriesMail = (subject) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;

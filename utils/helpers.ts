export function generateUniqueEmail(baseEmail: string) {
  const timestamp = Date.now();
  return baseEmail.replace('{{timestamp}}', timestamp.toString());
}

export const orderNumberRegex = /Order number:\s*(\d+)/;

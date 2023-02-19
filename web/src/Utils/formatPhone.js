export function formatPhone(phoneNumber) {
  return phoneNumber
    .replace(/\D/g, '')
    .replace(/^(\d{2})\B/, '($1) ')
    .replace(/(\d{5}|\d{4})(\d{4})/, '$1-$2');
}

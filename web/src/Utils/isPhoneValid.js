export function isPhoneValid(phoneNumber) {
  const phoneRegex = /^\(\d{2}\) (9)?\d{4}-\d{4}$/;

  return phoneRegex.test(phoneNumber);
}

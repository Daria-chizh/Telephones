export default function telephonesOperating(phoneNumber) {
  const newNumberPhone = phoneNumber.replace(/^8/, '+7');
  const filteredPhone = newNumberPhone.replace(/[^+0-9]/gim, '');
  if (filteredPhone.match(/^[+]/)) {
    return filteredPhone;
  }
  return `+${filteredPhone}`;
}


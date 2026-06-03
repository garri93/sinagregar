import { Linking } from "react-native";
import { ValidatePhone, GetPhoneExample } from '@/utils/phone.utils';

type Platform = "whatsapp" | "telegram";

type SendMessageParams = {
  platform: Platform;
  phone: string;
  message: string;
  callingCode: string;
  countryCode: string;
  telegramUser: string;
};

/** Logica para formulario mandar mensajes **/

export function SendMessage({
  platform,
  phone,
  message,
  callingCode,
  telegramUser,
  countryCode,
}: SendMessageParams) {
  if (platform === 'whatsapp') {
    const parsedPhone = ValidatePhone(callingCode, phone);

    if (!parsedPhone) {
      alert(
        'Número inválido, el Formato correcto que debes usar es ' + GetPhoneExample(countryCode)
      );
      return;
    }

    const whatsappPhone = parsedPhone.number.replace('+', '');

    const url = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;

    Linking.openURL(url);
    return;
  }

  const cleanTelegramUser = telegramUser.replace('@', '');

  const url = `https://t.me/${cleanTelegramUser}?text=${encodeURIComponent(message)}`;

  Linking.openURL(url);
}











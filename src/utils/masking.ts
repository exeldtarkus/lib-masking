import {maskEmail, maskPhoneNumber} from '../configs/mask_data_config';

/* eslint-disable @typescript-eslint/no-explicit-any */
type JsonObject = {
  [key: string]: any;
};

interface IMaskOptions {
  cardMask?: string[];
  emailMask?: string[];
  passwordMask?: string[];
  phoneMask?: string[];
  stringMask?: string[];
  uuidMask?: string[];
}

const applyMasking = (
  data: JsonObject,
  maskingKey: string[],
  maskType: 'phoneMask' | 'emailMask'
) => {
  const newJson: JsonObject = {};
  for (const key in data) {
    if (maskingKey.includes(key) && typeof data[key] === 'string') {
      if (maskType === 'emailMask') {
        newJson[key] = maskEmail(data[key]);
      }
      if (maskType === 'phoneMask') {
        newJson[key] = maskPhoneNumber(data[key]);
      }
    } else if (Array.isArray(data[key])) {
      newJson[key] = data[key].map((item: any) => {
        if (typeof item === 'object' && item !== null) {
          return applyMasking(item, maskingKey, maskType);
        } else {
          return item;
        }
      });
    } else if (typeof data[key] === 'object' && data[key] !== null) {
      newJson[key] = applyMasking(data[key], maskingKey, maskType);
    } else {
      newJson[key] = data[key];
    }
  }
  return newJson;
};

const maskJson = (data: JsonObject, maskOption: IMaskOptions): JsonObject => {
  const resultJson = {};
  const maskOptionsKeys = Object.keys(maskOption);

  for (const i in maskOptionsKeys) {
    const itemMaskKey = maskOptionsKeys[i] as keyof IMaskOptions;

    if (itemMaskKey === 'phoneMask' && maskOption[itemMaskKey]) {
      const defaultMaskingKeyPhone = maskOption[itemMaskKey]!.concat(
        'phone',
        'phoneNumber'
      );

      Object.assign(
        resultJson,
        applyMasking(data, defaultMaskingKeyPhone, 'phoneMask')
      );
    }

    if (itemMaskKey === 'emailMask' && maskOption[itemMaskKey]) {
      const defaultMaskingKeyEmail = maskOption[itemMaskKey]!.concat(
        'email',
        'userEmail'
      );
      Object.assign(
        resultJson,
        applyMasking(resultJson, defaultMaskingKeyEmail, 'emailMask')
      );
    }
  }
  return resultJson;
};

export {maskJson};

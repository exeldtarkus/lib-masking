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

const maskJson = (data: JsonObject, maskOption: IMaskOptions): JsonObject => {
  const maskFunctions: {[key: string]: (value: string) => string} = {
    phoneMask: maskPhoneNumber,
    emailMask: maskEmail,
  };

  const applyMasks = (
    data: JsonObject,
    maskOption: IMaskOptions
  ): JsonObject => {
    const newJson: JsonObject = {};

    for (const key in data) {
      if (typeof data[key] === 'string') {
        for (const maskType in maskOption) {
          const maskingKeys = maskOption[maskType as keyof IMaskOptions];
          if (
            maskingKeys &&
            maskingKeys.includes(key) &&
            maskFunctions[maskType]
          ) {
            newJson[key] = maskFunctions[maskType](data[key]);
            console.log(
              `maskFunctions[${maskType}](${data[key]}) :>> `,
              maskFunctions[maskType](data[key])
            );
            break;
          } else {
            newJson[key] = data[key];
          }
        }
      } else if (Array.isArray(data[key])) {
        newJson[key] = data[key].map((item: any) =>
          typeof item === 'object' && item !== null
            ? applyMasks(item, maskOption)
            : item
        );
      } else if (typeof data[key] === 'object' && data[key] !== null) {
        newJson[key] = applyMasks(data[key], maskOption);
      } else {
        newJson[key] = data[key];
      }
    }
    return newJson;
  };

  return applyMasks(data, maskOption);
};

export {maskJson};

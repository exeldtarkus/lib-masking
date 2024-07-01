/* eslint-disable @typescript-eslint/no-explicit-any */

const MaskData = require('maskdata');

interface IMaskOptions {
  cardMask?: Array<any>;
  emailMask?: Array<any>;
  passwordMask?: Array<any>;
  phoneMask?: Array<any>;
  stringMask?: Array<any>;
  uuidMask?: Array<any>;
}

const emailMaskOptions = {
  maskWith: '*',
  unmaskedStartCharactersBeforeAt: 3,
  unmaskedEndCharactersAfterAt: 2,
  maskAtTheRate: false,
};

const phoneMaskOptions = {
  maskWith: '*',
  unmaskedStartDigits: 4,
  unmaskedEndDigits: 3,
};

const cardMaskOptions = {
  maskWith: 'X',
  unmaskedStartDigits: 2,
  unmaskedEndDigits: 4,
};

const passwordMaskOptions = {
  maskWith: '*',
  maxMaskedCharacters: 10,
  unmaskedStartCharacters: 0,
  unmaskedEndCharacters: 0,
};

const stringMaskOptions = {
  maskWith: '*',
  maskOnlyFirstOccurance: false,
  values: [],
  maskAll: true,
  maskSpace: false,
};

const uuidMaskOptions = {
  maskWith: '*',
  unmaskedStartCharacters: 4,
  unmaskedEndCharacters: 2,
};

const jsonMaskOption = (maskField: IMaskOptions) => {
  return {
    // Card
    cardMaskOptions,
    cardFields: maskField.cardMask ? maskField.cardMask : [],

    // Email
    emailMaskOptions,
    emailFields: maskField.emailMask ? maskField.emailMask : [],

    // Password
    passwordMaskOptions,
    passwordFields: maskField.passwordMask ? maskField.passwordMask : [],

    // Phone
    phoneMaskOptions,
    phoneFields: maskField.phoneMask ? maskField.phoneMask : [],

    // String
    stringMaskOptions,
    stringFields: maskField.stringMask ? maskField.stringMask : [],

    // UUID
    uuidMaskOptions,
    uuidFields: maskField.uuidMask ? maskField.uuidMask : [],
  };
};

const maskEmail = (email: string): string => {
  return MaskData.maskEmail2(email, emailMaskOptions);
};

const maskPhoneNumber = (phoneNumber: string): string => {
  return MaskData.maskPhone(phoneNumber, phoneMaskOptions);
};

const maskJson = (data: object, maskOptions: IMaskOptions): object => {
  return MaskData.maskJSON2(data, jsonMaskOption(maskOptions));
};

export {maskEmail, maskPhoneNumber, maskJson};
export {
  emailMaskOptions,
  phoneMaskOptions,
  cardMaskOptions,
  passwordMaskOptions,
  jsonMaskOption,
  stringMaskOptions,
  uuidMaskOptions,
  IMaskOptions,
};

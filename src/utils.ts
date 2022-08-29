import { formatUnits, parseUnits } from '@ethersproject/units';
import { fileToBuffer } from './components/CropDialog/cropImage';
/**
 * small to Account
 * @returns 0xffff...xxxx
 */
export function toSmallAddr(str: string, start: number = 6, end: number = 4) {
  if (str.length <= 10) return str;
  return `${str?.substr(0, start)}...${str?.substr(str?.length - end, end)}`;
}

/**
 * Valid Address
 */
export const TokenRegExp = /^0x[a-z0-9]{40}$/i;
export function validAddress(address: string) {
  return TokenRegExp.test(address);
}

export function toThousands(num: number | string): string {
  return Number(num)?.toLocaleString('en');
}

/**
 * value / decimals
 */
export const fromWei = (value?: string | number, decimals: number = 18) => {
  if (!value) return '';
  return formatUnits(value, decimals);
};

/**
 * value * decimals
 */
export const toWei = (value?: string | number, decimals: number = 18) => {
  if (!value) return '';
  return parseUnits(value.toString(), decimals);
};

export function getQueryVariable(variable: string) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}

interface UploadResult {
  url: string;
}
export const uploadFileToService = async (_file: File) => {
  try {
    const f = await fileToBuffer(_file);
    if (!f) {
      return;
    }
    const avatarBuffer = Buffer.from(f as ArrayBuffer);
    const uploadFile = await fetch('https://uploadcare-microservice-production.up.railway.app/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        buffer: avatarBuffer,
        contentType: _file.type,
      }),
    });
    const uploadResult: UploadResult = await uploadFile.json();
    const avatarUrl = uploadResult.url;
    console.log('avatarUrl', avatarUrl);
    return { url: avatarUrl };
  } catch (error) {
    console.log('error--->', error);
  }
  return;
};

export const ReaderFile = (file: any): Promise<Buffer> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      return resolve(Buffer.from(reader.result as ArrayBuffer));
    };
    reader.readAsArrayBuffer(file);
  });
};

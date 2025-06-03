/* @flow */

import escape from 'lodash/escape';

export type Value = string | {__html: string};

export function autoHtml(templateParts: string[], ...values: Value[]): string {
  const parts: string[] = new Array(templateParts.length*2-1);
  parts[0] = templateParts[0];
  for (let i=0, len=values.length; i<len; i++) {
    const value = values[i];
    parts[2*i+1] = value && Object.prototype.hasOwnProperty.call(value, '__html') ? (value:any).__html : escape(value);
    parts[2*i+2] = templateParts[i+1];
  }
  return parts.join('');
}

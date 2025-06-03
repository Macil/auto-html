export type Value = string | {__html: string};

export function autoHtml(templateParts: TemplateStringsArray, ...values: Value[]): string;

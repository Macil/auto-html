export type Value = string | {__html: string};

export default function autoHtml(templateParts: TemplateStringsArray, ...values: Value[]): string;

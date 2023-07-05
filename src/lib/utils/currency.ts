interface ICurrencyFormatterProps {
	value: number;
	locale: string;
	options: Intl.NumberFormatOptions;
}

export const currencyFormatter = ({ value, locale, options }: ICurrencyFormatterProps) =>
	new Intl.NumberFormat(locale, { ...options, style: 'currency' }).format(value);

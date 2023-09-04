interface ICurrencyFormatterProps {
	value: number;
	locale?: string;
	options?: Intl.NumberFormatOptions;
}

export const currencyFormatter = ({
	value = 0,
	locale = 'en-US',
	options = { currency: 'USD' }
}: ICurrencyFormatterProps) =>
	new Intl.NumberFormat(locale, { ...options, style: 'currency' }).format(value);

interface AnimatedPriceProps {
  price: string;
}

export const AnimatedPrice = ({ price }: AnimatedPriceProps) => {
  const value = parseFloat(price.replace(",", "."));
  const formatted = new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  }).format(value);

  return <>{formatted}</>;
};

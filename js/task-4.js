function getShippingCost(country) {
  let price1 = 100;
  let price2 = 250;
  let price3 = 170;
  let price4 = 120;

  switch (country) {
    case "China":
      return `Shipping to ${country} will cost ${price1} credits`;

    case "Chile":
      return `Shipping to ${country} will cost ${price2} credits`;

    case "Australia":
      return `Shipping to ${country} will cost ${price3} credits`;

    case "Jamaica":
      return `Shipping to ${country} will cost ${price4} credits`;

    default:
      return "Sorry, there is no delivery to your country";
  }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

export class Drink {
  id: number;
  name: string;
  image: string;
  price: number;
  brand: string;

  constructor(
    id: number,
    name: string,
    image: string,
    price: number,
    brand: string
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.brand = brand;
  }
}

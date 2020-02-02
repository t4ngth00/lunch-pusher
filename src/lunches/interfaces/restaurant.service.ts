interface IRestaurantService {
  getRestaurantName(): string;
  getMenuString(): Promise<string>;
}

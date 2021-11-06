export class Recipe {
  public id: string;
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(
    id: string,
    name: string,
    description: string,
    imagePath: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}

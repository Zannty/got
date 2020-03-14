export default class DataService {
  async getData() {
    const response = await JSON.stringify(this.data);
    let data = await JSON.parse(response);
    return data;
  }

  data = [
    {
      name: "Smith",
      descrip: "Blonde, black",
      reasonDeath: "head",
      killer: "Arnold",
      weapon: "Mace"
    },
    {
      name: "Bohn",
      descrip: "Blonde, white",
      reasonDeath: "head",
      killer: "Simon",
      weapon: "Sword"
    },
    {
      name: "Cohn",
      descrip: "Blonde",
      reasonDeath: "head",
      killer: "Fiona",
      weapon: "Axe"
    },
    {
      name: "Aohn",
      descrip: "Blonde",
      reasonDeath: "head",
      killer: "Arnold",
      weapon: "Mace"
    }
  ];
}

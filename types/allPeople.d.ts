type AllPeopleNodeType = {
  node: {
    id: string;
    name: string;
  }
}

type AllPeopleType = {
  allPeople: {
    edges: AllPeopleNodeType[];
  }
}

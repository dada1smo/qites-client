export default interface GroupModel {
  name: string;
  participants: [] | any[];
}

export const DefaultGroup = {
  name: '',
  participants: [],
};

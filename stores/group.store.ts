import GroupModel, { DefaultGroup } from '@/models/group.model';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface GroupState {
  group: GroupModel;
  create: (newGroup: GroupModel) => void;
}

const useGroupStore = create<GroupState>((set) => ({
  group: DefaultGroup,
  create: (newGroup) =>
    set((state) => ({ group: { ...state.group, ...newGroup } })),
}));

export default useGroupStore;

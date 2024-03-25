import {Leaves} from '../types';

export const Icons = {
  star: require('../assets/icons/star.png'),
  search: require('../assets/icons/search.png'),
  close: require('../assets/icons/close.png'),
  loading: require('../assets/icons/loading.png'),
  arrow: require('../assets/icons/arrow.png'),
};

export type IIcons = Leaves<typeof Icons>;

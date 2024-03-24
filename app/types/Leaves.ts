import Join from './Join.ts';

type Leaves<T> = T extends object
  ? {[K in keyof T]-?: Join<K, Leaves<T[K]>>}[keyof T]
  : '';

export default Leaves;

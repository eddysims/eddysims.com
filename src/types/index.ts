export type ResponsiveProp<T> = T | NormalizedResponsiveProp<T>;

export interface NormalizedResponsiveProp<T> {
  mobile?: T;
  tablet?: T;
  desktop?: T;
}

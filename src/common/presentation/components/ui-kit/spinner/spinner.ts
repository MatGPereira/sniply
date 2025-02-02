interface ISpinnerProps {
  size?: 'sm' | 'md' | 'lg';
}

type TKeysToOmit = 'c-spinner--undefined';
type TSpinnerClasses = Omit<
  `c-spinner--${ISpinnerProps[keyof Omit<ISpinnerProps, TKeysToOmit>]}`,
  'c-spinner--undefined'
>;

export type { ISpinnerProps, TSpinnerClasses };

interface IButtonProps {
  size?: 'sm' | 'md' | 'lg' | 'full' | 'pill';
  variant?: 'primary' | 'secondary' | 'transparent';
  loading?: boolean;
}

type TKeysToOmit = 'loading';
type TButtonClasses = Omit<
  `c-button--${IButtonProps[keyof Omit<IButtonProps, TKeysToOmit>]}`,
  'c-button--undefined'
>;

export type { IButtonProps, TButtonClasses };

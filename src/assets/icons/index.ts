interface SvgParams {
  width: number;
  height?: number;
  color?: string;
}

export interface IAppIcons {
  commons: {
    [key: string]: any;
  };
  svgs: {
    [key: string]: (params: SvgParams) => JSX.Element;
  };
}

export const icons: IAppIcons = {
  commons: {},
  svgs: {},
};

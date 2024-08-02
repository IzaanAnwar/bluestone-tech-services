export type Service = {
  id: number;
  icon: JSX.Element;
  title: string;
  paragraph: string;
  subServices: SubService[];
};

type SubService = {
  id: number;
  icon: JSX.Element;
  title: string;
  paragraph: string;
};

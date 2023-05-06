export enum SelectedPage {
  Accueil= "accueil",
  Avantages= "avantages",
  NosCours= "noscours",
  NousContacter= "nouscontacter", 
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
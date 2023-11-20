interface INavigationBar {
  cloud: string;
  datacenter: string;
  company: string;
  blog: string;
}

interface ICardDetails {
  title: string;
  subTitle: string;
  buttonText: string;
}

interface IHomepageCover {
  title: string;
  subTitle: string;
  description: string;
  buttonText: string;
}

interface IFooter {
  companyName: string;
  operation: string;
  copyright: string;
  contactUs: string;
  joinUs: string;
  businessCooperationEmail: string;
  businessCooperationEmailValue: string;
  resumeSubmissionEmail: string;
  resumeSubmissionEmailValue: string;
  companyAddress: string;
  companyAddressValue: string;
}

export interface IWebsiteConfig {
  locale: string;
  localeText: string;
  webTitle: string;
  headerBanner: string;
  navigationBar: INavigationBar;
  homepageCover: IHomepageCover;
  separatorText: string;
  footer: IFooter;
  price: IPriceItem[];
}

export interface IPriceItem {
  title: string;
  price: string;
  unit: string;
  description: string;
  btnText: string;
  tip: string;
  featureList: string[];
}

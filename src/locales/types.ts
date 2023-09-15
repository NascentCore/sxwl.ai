interface INavigationBar {
  cloud: string;
  datacenter: string;
  company: string;
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
  headerBanner: string;
  navigationBar: INavigationBar;
  homepageCover: IHomepageCover;
  separatorText: string;
  footer: IFooter;
}

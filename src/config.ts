import { FormioAppConfig } from 'angular-formio';
import { FormioAuthConfig } from 'angular-formio/auth';

export const AppConfig: FormioAppConfig = {
  // here in appUrl, you need to get the url from form.io website (Resource > Book > Live Project Url > https://GET_THIS_CODE.form.io;
  appUrl: 'https://INFORM_YOUR_CODE.form.io',
  apiUrl: 'https://api.form.io',
  icons: 'fontawesome'
};

export const AuthConfig: FormioAuthConfig = {
  login: {
    form: 'user/login'
  },
  register: {
    form: 'user/register'
  }
};
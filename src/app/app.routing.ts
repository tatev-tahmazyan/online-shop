import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BodyComponent } from './body/body.component';
import { NewComponent } from './new/new.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const appRoutes: Routes = [
  { path: 'login',
    component: LoginComponent
  },
  { path: 'home',
    component: BodyComponent
  },
  { path: 'new',
    component: NewComponent
  },
  { path: 'contact-us',
    component: ContactUsComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
export default appRoutes;

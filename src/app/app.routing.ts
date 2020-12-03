import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BodyComponent } from './body/body.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ClothingComponent } from './clothing/clothing.component';
import { ShoesComponent } from './shoes/shoes.component';

const appRoutes: Routes = [
  { path: 'login',
    component: LoginComponent
  },
  { path: 'home',
    component: BodyComponent
  },
  { path: 'contact-us',
    component: ContactUsComponent
  },
  { path: 'clothing',
    component: ClothingComponent
  },
  { path: 'shoes',
    component: ShoesComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
export default appRoutes;

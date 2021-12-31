import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: 'complains',
  //   loadChildren: () => import('./pages/complains/complains.module').then( m => m.ComplainsPageModule)
  // },
  {
    path: 'create-complains',
    loadChildren: () => import('./pages/create-complains/create-complains.module').then( m => m.CreateComplainsPageModule)
  },
  {
    path: 'view-complain',
    loadChildren: () => import('./pages/view-complain/view-complain.module').then( m => m.ViewComplainPageModule)
  },
  {
    path: 'home-user',
    loadChildren: () => import('./pages/home-user/home-user.module').then( m => m.HomeUserPageModule)
  },
  {
    path: 'photo-upload',
    loadChildren: () => import('./pages/photo-upload/photo-upload.module').then( m => m.PhotoUploadPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'get-otp',
    loadChildren: () => import('./get-otp/get-otp.module').then( m => m.GetOtpPageModule)
  },
  {
    path: 'user-register',
    loadChildren: () => import('./user-register/user-register.module').then( m => m.UserRegisterPageModule)
  },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  microfrontends: {
    dashboard: {
      remoteEntry: 'http://localhost:4204/remoteEntry.js',
      remoteName: 'dashboard',
      exposedModule: ['DashboardModule'],
    },
    detailsPage: {
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'details',
      exposedModule: ['DetailsPageModule'],
    },
    registerPage : {
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      remoteName: 'register',
      exposedModule: ['RegisterPageModule'],
    },
    orderPage: {
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      remoteName: 'orderPage',
      exposedModule: ['OrderPageModule'],
    },
    layout: {
      remoteEntry: 'http://localhost:4205/remoteEntry.js',
      remoteName: 'layout',
      exposedModule: ['Header', 'Footer', 'LayoutModule'],
    }
  }
};

export const environment = {
  production: true,

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

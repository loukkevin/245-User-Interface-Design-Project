angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  
      
        
    .state('kinderCare', {
      url: '/landingCare',
      templateUrl: 'templates/kinderCare.html'
    })
        
      
    
      
        
    .state('managerLogin', {
      url: '/managerLogin',
      templateUrl: 'templates/managerLogin.html'
    })
        
      
    
      
        
    .state('staffLogin', {
      url: '/staffLogin',
      templateUrl: 'templates/staffLogin.html'
    })
        
      
    
      
        
    .state('parentGuardianLogin', {
      url: '/parentLogin',
      templateUrl: 'templates/parentGuardianLogin.html'
    })
        
      
    
      
    .state('managerMenu', {
      url: '/side-menu21',
      abstract:true,
      templateUrl: 'templates/managerMenu.html'
    })
      
    
      
        
    .state('managerMenu.managerHome', {
      url: '/managerHome',
      views: {
        'side-menu21': {
          templateUrl: 'templates/managerHome.html'
        }
      }
    })
        
      
    
      
        
    .state('staffMenu.staffHome', {
      url: '/staffHome',
      views: {
        'side-menu23': {
          templateUrl: 'templates/staffHome.html'
        }
      }
    })
        
      
    
      
        
    .state('parentMenu.parentHome', {
      url: '/parentHome',
      views: {
        'side-menu24': {
          templateUrl: 'templates/parentHome.html'
        }
      }
    })
        
      
    
      
    .state('staffMenu', {
      url: '/side-menu23',
      abstract:true,
      templateUrl: 'templates/staffMenu.html'
    })
      
    
      
    .state('parentMenu', {
      url: '/side-menu24',
      abstract:true,
      templateUrl: 'templates/parentMenu.html'
    })
      
    
      
        
    .state('parentGuardianSignup', {
      url: '/page10',
      templateUrl: 'templates/parentGuardianSignup.html'
    })
        
      
    
      
        
    .state('parentMenu.confirm', {
      url: '/page11',
      views: {
        'side-menu24': {
          templateUrl: 'templates/confirm.html'
        }
      }
    })
        
      
    
      
        
    .state('parentMenu.accountInformation', {
      url: '/parentAccountInfo',
      views: {
        'side-menu24': {
          templateUrl: 'templates/accountInformation.html'
        }
      }
    })
        
      
    
      
        
    .state('parentMenu.billing', {
      url: '/parentAccountBilling',
      views: {
        'side-menu24': {
          templateUrl: 'templates/billing.html'
        }
      }
    })
        
      
    
      
        
    .state('parentMenu.children', {
      url: '/parentAccountChildren',
      views: {
        'side-menu24': {
          templateUrl: 'templates/children.html'
        }
      }
    })
        
      
    
      
        
    .state('autoPaySetup', {
      url: '/autoPay',
      templateUrl: 'templates/autoPaySetup.html'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/landingCare');
  

  

});
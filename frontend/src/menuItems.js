export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About Us',
    url: '/about',
    submenu: [
      {
        title: 'Overview',
        url: '#overview',
      },
      {
        title: 'Vision and Mission',
        url: '#vision-and-mission',
      },
      {
        title: 'Milestones and Rewards',
        url: '#milestones-and-rewards',
      },
      {
        title: 'Our Team',
        url:'#our-team'
      },
      {
        title:'Legal Status & Empanelments',
        url:'#legal-status-and-empanelments'
      },
    ],
  },
  {
      title: 'What we do',
      url : '/whatwedo',
  },
  {
      title: 'Projects',
      url: '/projects',
  },
  {
      title: 'Events',
      url: '/events',
  },
  {
      title: 'Contact Us',
      url:'/contactus',
  },
  {
      title: 'Donate',
      url: '/donate',
  },
  {
    title: 'Faucet',
    url: '/faucet',
  },
  {
    title: 'Login',
    url: '/loginasuser',
    submenu: [
      {
        title:'Login as User',
        url:'/loginasuser',
      },

      {
        title:'Login as Committee members',
        url:'/loginascommitteemember',
      },

      {
        title:'Login as Admin',
        url:'/loginasadmin',
      },
      
      {
        title:'Login as Government',
        url:'/loginasgovernment',
      }
    ]
  }
    // {
    //     title: 'Login',
    //     url: '/login',
    // },
    // {
    //   title: 'Forgot Password',
    //   url: '/forgotpassword',
    // },
    // {
    //   title: 'SignUp',
    //   url: '/signup',
    // },
    // {
    //     title:'Manan',
    //     url: '/manan',
    // },
    // {
    //    title:'MyComponent',
    //    url: '/mycomponent',
    // },
     
];

export const menuItemsAdmin = [
  {
    title: 'Home', 
    url: '/'
  },
  {
    title: 'About Us',
    url: '/about'
  },
  {
    title: 'Projects',
    url: '/projects'
  },
  {
    title: 'Send Approval',
    url: '/send-approval'
  },
  {
    title: 'View Donations',
    url: '/view-donations'
  },
  {
    title: 'Accept Proposals',
    url: '/accept-proposals'
  }
];

export const menuItemsCommittee = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'About Us', 
    url: '/about'
  },
  {
    title: 'Propose Idea',
    url: '/propose-idea'
  },
  {
    title: 'Create Event',
    url: '/create-event'
  },
  {
    title: 'View Donations',
    url: '/view-donations'
  },
  {
    title: 'Mining Pool',
    url: '/mining-pool'
  },
  {
    title: 'Attend Meetings',
    url: '/attend-meetings'
  }
];

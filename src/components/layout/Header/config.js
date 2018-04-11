export default (props) => ({
    items: [
        { 
            route: '/',
            name: 'Home'
        },
        { 
            route: '/jewels',
            name: 'Jewels' 
        },
        { 
            route: '/about',
            name: 'About' 
        },
        { 
            route: '/contact',
            name: 'Contact' 
        },
        {  
            route: '/',
            name: 'Sign out',
            onClick: props.handleSignout,
            visible: props.authenticated
        },
        {  
            route: '/signin',
            name: 'Sign in',
            visible: !props.authenticated
        }
    ]
});
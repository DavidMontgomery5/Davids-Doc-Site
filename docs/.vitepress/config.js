const ourStorySidebar = [{text: 'Our Story' , link: '/about/our/story'}]



module.exports = {
    title: 'Davids Vite Press Site' , 
    themeConfig: {
        nav: [
            {text: 'Home' , link: '/'},
            {text: 'About' , link: '/about/'},
            {text: 'Contact' , link: '/Contact/'},
        ],
        sidebar: {
            '/about/': ourStorySidebar,
            '/Contact/': ourStorySidebar,

        
    },
}
}

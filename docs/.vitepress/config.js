const primarySidebar = [
    { text: "CVI", link: "/cvi/" }, 
    { text: "Briif", link:"/cvi/briif"},
    { text: "Moodboard", link: "/cvi/moodboard"}
];
const blogiSidebar = [
    {text: "Blogi", link:"/blogi/"},
    {text: "Font märgiks", link:"/blogi/01_font_margiks"}
];

module.exports = {
    title: "Minu veebileht", // appended to all page titles
    themeConfig: {
        nav: [
            {text:"Esileht", link:"/"},
            {text:"Minust", link:"/minust/"},
            {text:"CVI", link:"/cvi/"},
            {text:"Blogi", link:"/blogi/"},
            
            
        ],
        sidebar: {
                "/cvi/":primarySidebar,
                "/cvi/briif":primarySidebar,
                "/cvi/moodboard":primarySidebar,
                "/blogi/":blogiSidebar,
                "/blogi/01_font_margiks/":blogiSidebar
            }
      },
    }
const primarySidebar = [
    { text: "CVI", link: "/cvi/" }, 
    { text: "Briif", link:"/cvi/briif"},
    { text: "Moodboard", link: "/cvi/moodboard"}
];

module.exports = {
    title: "Minu veebileht", // appended to all page titles
    themeConfig: {
        nav: [
            {text:"Esileht", link:"/"},
            {text:"Minust", link:"/minust/"},
            {text:"CVI", link:"/cvi/"},
            {text:"CVI-Doku", link:"/cvi-doku/"},
            
        ],
        sidebar: {
            "/cvi/":primarySidebar,
            "/cvi/briif":primarySidebar,
            "/cvi/moodboard":primarySidebar
        }
      },
    }
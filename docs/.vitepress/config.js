const primarySidebar = [
    { text: "CVI", link: "/cvi/" }, 
    { text: "Briif", link:"/cvi/briif"},
    { text: "Moodboard", link: "/cvi/moodboard"}
];
const blogiSidebar = [
    {text: "Blogi", link:"/blogi/"},
    {text: "Font märgiks", link:"/blogi/01_font_margiks"},
    {text: "Ruudud ja joonis", link:"/blogi/02_ruududjajoonis"},
    {text: "Kiire Looming", link:"/blogi/03_kiirelooming"},
    {text: "Referentspildid piltide järgi kujundamine", link:"/blogi/04_rfpildid"},
    {text: "Referentspildid piltide järgi kujundamine 2", link:"/blogi/05_rfpildid2"},
    {text: "Referentspildid piltide järgi kujundamine 3", link:"/blogi/06_rfpildid3"}
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
                "/blogi/01_font_margiks/":blogiSidebar,
                "/blogi/02_ruududjajoonis/":blogiSidebar,
                "/blogi/03_kiirelooming/":blogiSidebar,
                "/blogi/04_rfpildid/":blogiSidebar,
                "/blogi/05_rfpildid2/":blogiSidebar,
                "/blogi/06_rfpildid3/":blogiSidebar
            }
      },
    }
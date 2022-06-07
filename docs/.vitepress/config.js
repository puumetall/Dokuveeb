const primarySidebar = [
    { text: "CVI", link: "/cvi/" }, 
    { text: "Briif", link:"/cvi/briif"},
    { text: "Moodboard", link: "/cvi/moodboard"},
    { text: "MM20 Logo", link:"/cvi/MM20_Logo"},
    { text: "Alternatiivid", link:"/cvi/MM20_LogoAlternatiivid"},
    { text: "Visandid", link:"/cvi/MM20_LogoVisandid"},
    { text: "Kirjatüübid", link:"/cvi/fonts"},
    { text: "Värvid", link:"/cvi/colors"},
    { text: "Turvaruum", link:"/cvi/turvaruum"},
    { text: "Mockup'id ja andmekandjad", link:"/cvi/MM20_LogoMockup"},
];
const blogiSidebar = [
    {text: "Blogi", link:"/blogi/"},
    {text: "Font märgiks", link:"/blogi/01_font_margiks"},
    {text: "Ruudud ja joonis", link:"/blogi/02_ruududjajoonis"},
    {text: "Kiire Looming", link:"/blogi/03_kiirelooming"},
    {text: "Referentspildid piltide järgi kujundamine", link:"/blogi/04_rfpildid"},
    {text: "Referentspildid piltide järgi kujundamine 2", link:"/blogi/05_rfpildid2"},
    {text: "Referentspildid piltide järgi kujundamine 3", link:"/blogi/06_rfpildid3"},
    {text: "Negatiivne ruum", link:"/blogi/07_negatruum"}
];
module.exports = {
    title: "Minu veebileht", // appended to all page titles
    base: "/dokuveeb/",
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
                "/cvi/MM20_Logo/":primarySidebar,
                "/cvi/MM20_LogoAlternatiivid/":primarySidebar,
                "/cvi/MM20_LogoVisandid":primarySidebar,
                "/cvi/fonts":primarySidebar,
                "/cvi/colors":primarySidebar,
                "/cvi/turvaruum":primarySidebar,
                "/cvi/MM20_LogoMockup":primarySidebar,
                "/blogi/":blogiSidebar,
                "/blogi/01_font_margiks/":blogiSidebar,
                "/blogi/02_ruududjajoonis/":blogiSidebar,
                "/blogi/03_kiirelooming/":blogiSidebar,
                "/blogi/04_rfpildid/":blogiSidebar,
                "/blogi/05_rfpildid2/":blogiSidebar,
                "/blogi/06_rfpildid3/":blogiSidebar,
            }
      },
    }
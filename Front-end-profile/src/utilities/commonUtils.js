import Home from '../PortfolioContainer/Home/Home';
import AboutMe from '../PortfolioContainer/AboutMe/AboutMe';
import Resume from '../PortfolioContainer/Resume/Resume';
import Projects from '../PortfolioContainer/Testimonial/Testimonial';

export const TOTAL_SCREEN = [
    {
        screen_name: "Home",
        component: Home,
    },
    {
        screen_name: "AboutMe",
        component: AboutMe,
    },
    {
        screen_name: "Resume",
        component: Resume,
    },
    {
        screen_name: "Projects",
        component: Projects,
    },
]

export const GET_SCREEN_INDEX = (screen_name) => {
    if(!screen_name) return -1
    for(let i = 0; i <TOTAL_SCREEN.length; i++){
        if(TOTAL_SCREEN[i].screen_name === screen_name) return i
    }
    return -1;
}
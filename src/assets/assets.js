import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import profile_imnage from "./IMG_2221.png"
import it_project from "./consult.jpg"
import it_consult from './it-man-icon.jpg'

export const assets = {
    user_image,
    code_icon,
    it_project,
    it_consult,
    profile_imnage,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Frontend Project',
        description: 'NordaTech site',
        url:"https://nordatech.com.ng",
        bgImage: '/pink-ban.png',
    },
    {
        title: 'Full Stack e-commerce project',
        description: 'Bata Nigeria site',
        url:"https://batanigeria.com",
        bgImage: '/bata-shot.png',
    },
    {
        title: 'Process Automation Project',
        description: 'eFCAS site',
        url:"https://efcas.ng",
        bgImage: '/fcas-shot.png',
    },
    {
        title: 'Fund Raising NGO Project',
        description: 'Esi Foundation site',
        url:"https://esi.com.ng",
        bgImage: '/esi-shot.png',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web development', description: 'Building modern, responsive, and scalable web solutions.', link: '#contact' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Creating intuitive, high-performance, and scalable mobile applications.', link: '#contact' },
    { icon: assets.it_project, title: 'IT Project Management', description: 'Efficient planning, execution, and delivery of IT projects.', link: '#contact' },
    { icon: assets.it_consult, title: 'IT Consulting', description: 'Expert guidance on technology choices/strategies and solutions. ', link: '#contact' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript, React Js, Next Js, Express js, Node.js, Mongodb, Posgre Sql, mySql, Vue,js ' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Sc in Software Engineering' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.mongodb, assets.figma, assets.git
];
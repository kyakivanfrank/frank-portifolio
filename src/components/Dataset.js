// these are code Projects Pictures
import LivewireUganda from "../img/projectFiles/SoftwareProjectsImages/LivewireUganda.png";
import frankportifoliowebsite from "../img/projectFiles/SoftwareProjectsImages/kyakusseFrankPortifolio.png";
import gladstepwebsitepic from "../img/projectFiles/SoftwareProjectsImages/Gladstepwebsite.png";

// these are art Projects Pictures
import bengalTiger from "../img/projectFiles/ArtProjectsImages/BengalTiger.JPEG";
import africanElephant from "../img/projectFiles/ArtProjectsImages/africanElephant.jpg";
import batikart from "../img/projectFiles/ArtProjectsImages/batik art.jpg";
import goldentempleAmritsar from "../img/projectFiles/ArtProjectsImages/goldentempleAmritsar.JPG";
// import myPortrait from "../img/projectFiles/ArtProjectsImages/myPortrait.jpg";
import RunningtoSurvive from "../img/projectFiles/ArtProjectsImages/RunningtoSurvive.jpg";
import StreetStunts from "../img/projectFiles/ArtProjectsImages/Street Stunts.jpg";

//these ar tool icons
import wixIcon from "../img/projectFiles/toolsIcons/wix.png";
import reactIcon from "../img/projectFiles/toolsIcons/react.png";
import firebaseIcon from "../img/projectFiles/toolsIcons/firebase.png";
import html from "../img/projectFiles/toolsIcons/html.png";
import csS from "../img/projectFiles/toolsIcons/csS.png";

const Dataset = {

    SoftWareDevelopmentDataset: [
	{ 
        projectTitle: "Livewire Uganda Website",
        projectDescription: "This is an Information Technology and Electrical engineering institution’s website that I was deployed to design. And manage as am working at Livewire Uganda as a web and graphics design.",
        projectImage:LivewireUganda,
        projectcontributors: ["Solo"],
        projectSkillsUsed: [ wixIcon] ,

        projectDate: "14/11/2019" ,
        link2project:"https://www.livewireuganda.com"

    },
    
    {
        projectTitle: "Kyakusse Frank Ivan Portifolio",
        projectDescription: "Of course, the reason why you've managed to see all this is because you're possibly hosted on Kyakusse frank's portfolio Website which is exactly this.  One of my projects I made so I could be able to manifest my works to my employers or any other one who'd be interested in my works. chek through it. ",
        projectImage:frankportifoliowebsite,
        projectcontributors: ["Solo"],
        projectSkillsUsed: [html ,csS ,reactIcon, firebaseIcon],
        projectDate: "25/11/2019",
        link2project:"http://frank-portifolio.herokuapp.com/"
    },
    { 
        projectTitle: "Gladstep School Website",
        projectDescription: "Gladstep is a local Primary School in kawempe, which i offered to create a website for as one of my the treats to raise my skills in simple html, css, and javascript fundementals of web development. eventhough this project is still in the making due to some issues with the school.",
        projectImage:gladstepwebsitepic,
        projectcontributors: ["Solo"],
        projectSkillsUsed: [html , csS],
        projectDate: "03/03/2019",
        link2project:"kyakivanfrank.github.io"
    }

    ],
    ArtDevelopementDataset: [
        { 
            projectTitle: "The Bengal Tiger",
            projectDescription: "this is the project description",
            projectImage:bengalTiger,
            projectcontributors: ["Solo"],
            projectSkillsUsed: ["react", "node"],
            projectDate: "this is the project date",
            link2project:"this is the project link"
        },
        
        { 
            projectTitle: "The Golden temple of amritsar",
            projectDescription: "this is the project description",
            projectImage:goldentempleAmritsar,
            projectcontributors: ["Solo"],
            projectSkillsUsed: ["react", "node"],
            projectDate: "this is the project date",
            link2project:"Kept at PCTE college Ludhiana India"
        },
        { 
            projectTitle: "The Lioness",
            projectDescription: "this is the project description",
            projectImage:bengalTiger,
            projectcontributors: ["my self 100%"],
            projectSkillsUsed: ["react", "node"],
            projectDate: "this is the project date",
            link2project:"this is the project link"
        }, { 
            projectTitle: "The African bull elephant",
            projectDescription: "this is the project description",
            projectImage:africanElephant,
            projectcontributors: ["my self 100%"],
            projectSkillsUsed: ["react", "node"],
            projectDate: "this is the project date",
            link2project:"this is the project link"
        },
        
        { 
            projectTitle: "Running to Survive",
            projectDescription: "this is the project description",
            projectImage:RunningtoSurvive,
            projectcontributors: ["my self 100%"],
            projectSkillsUsed: ["react", "node"],
            projectDate: "this is the project date",
            link2project:"this is the project link"
        },
        { 
            projectTitle: "Street Stunts",
            projectDescription: "this is the project description",
            projectImage:StreetStunts,
            projectcontributors: ["my self 100%"],
            projectSkillsUsed: ["react", "node"],
            projectDate: "this is the project date",
            link2project:"this is the project link"
        },
        { 
            projectTitle: "African Batik Art",
            projectDescription: "this is the project description",
            projectImage:batikart,
            projectcontributors: ["my self 100%"],
            projectSkillsUsed: ["react", "node"],
            projectDate: "this is the project date",
            link2project:"this is the project link"
        }
    
    ]
};
export default Dataset;
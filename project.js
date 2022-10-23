
let tech_stacks=[
  {
    "teck_name": "React",
    "img_link":"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
  },
  {
    "teck_name": "nodeJS",
    "img_link":"https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
  },
  {
    "teck_name": "Python",
    "img_link":"https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
  },
  {
    "teck_name": "MySQL",
    "img_link":"./Images/mysql_logo.png"
  },
  {
    "teck_name": "MongoDB",
    "img_link":"https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
  },
  {
    "teck_name": "JavaScript",
    "img_link":"https://drive.google.com/uc?export=view&id=1PAdZ31CeY83OFFT-MSACi9bOT6DUfFnY"
  },
  {
    "teck_name": "CSS",
    "img_link":"https://drive.google.com/uc?export=view&id=1csttg5pfFGGt7yE4A1YC2VxNpOPg43DG"
  },
  {
    "teck_name": "HTML",
    "img_link":"https://drive.google.com/uc?export=view&id=1OM8fgg4s361EblZU6k4i4DdUQ3sZxUDC"
  },
  {
    "teck_name": "GitHub",
    "img_link":"https://cdn-icons-png.flaticon.com/512/25/25231.png"
  },
  {
    "teck_name": "VS code",
    "img_link":"https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png"
  }    

]

let techStackDiv = document.getElementById("tech");

tech_stacks.forEach(tech=>{


  let comp = document.createElement("div");

  let img = document.createElement("img");
  img.src = tech.img_link;
  img.alt= tech.teck_name;
  let name = document.createElement("p");
  name.innerText=tech.teck_name;

  comp.append(img,name);

  techStackDiv.append(comp);  
})

let project_details = [
    {"project_name": "Nykaa.com Clone",
     "details": "The project was a collaborative project done by 6 people altogether within 5 days. My task was to build the Hotels list page and provide different functionalities like sorting and filtering.",
    "tech_stack":"HTML, CSS, JavaScript, github",
    "data_base": "Json server",
    "banner":"https://drive.google.com/uc?export=view&id=1CI0jNP5IlvWxT_hcPYVN_Poy0XQJthx_",
    "deployed": "https://expedia-clone-developer.herokuapp.com/",
    "gitlink": ""},

    {"project_name": "Expedia.com Clone",
     "details": "A collaborative project completed within 5 days with 4 other colleagues. I've built the Hotel page which includes hotel booking functionality",
    "tech_stack":"HTML, CSS, JavaScript, github",
    "data_base": "local storage",
    "banner":"https://drive.google.com/uc?export=view&id=1CI0jNP5IlvWxT_hcPYVN_Poy0XQJthx_",
    "deployed": "https://adorable-fairy-910347.netlify.app/",
    "gitlink": "https://github.com/sukhendu32/constructProject1"},
];


project_details.forEach(project=>{

    let Projects_Div = document.getElementById("projects_div");

    let Maindiv= document.createElement("div");
    Maindiv.className="main"

    let pictureDiv = document.createElement("div");
    pictureDiv.className="picture";

    let laptopDiv = document.createElement("div");
    let screenDiv = document.createElement("div");
    let img=document.createElement("img");
    img.src = project.banner;
    screenDiv.append(img);
    laptopDiv.append(screenDiv);
    let base = document.createElement("div");
    let lower_base =document.createElement("div");

    pictureDiv.append(laptopDiv,base,lower_base);

    let descriptionDiv =document.createElement("div");
    descriptionDiv.className ="project_description";

    let nameDiv=document.createElement("div");
    nameDiv.innerText=project.project_name;
    let projectDetails = document.createElement("div");
    projectDetails.innerHTML =`<p>${project.details}</p><p>Tech Stack : ${project.tech_stack}</p><p>Database : ${project.data_base}</p>`;
    let buttonsDiv = document.createElement("div");
    let deployedBtn = document.createElement("button");
    deployedBtn.innerText = "Deployed";

    deployedBtn.onclick=()=>{
        window.open(project.deployed, "_blank");
    }

    let gitBtn = document.createElement("button");
    gitBtn.innerText = "GitHub";
    gitBtn.onclick=()=>{
        window.open(project.gitlink, "_blank");
    }

    buttonsDiv.append(deployedBtn,gitBtn);
    descriptionDiv.append(nameDiv,projectDetails,buttonsDiv);

    Maindiv.append(pictureDiv,descriptionDiv);
    Projects_Div.append(Maindiv);
});

// Mobile view tabs.........


let content=document.getElementById("content");
let bars = document.querySelector("#bar");
let cross = document.getElementById("cross");
bars.onclick=()=>{
  content.style.display="flex";    
  cross.style.display="flex";
  bars.style.display="none";  
}

cross.onclick=()=>{
  closedFun();
}

let contentDiv = document.querySelectorAll("#content>a");
contentDiv.forEach(ele=>{
    ele.onclick=()=>{
      closedFun();
  }
});

document.onscroll=()=>{
  closedFun();
}

let closedFun=()=>{
  content.style.display="none";
  bars.style.display="flex";
  cross.style.display="none";
}


class NavBar extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});

        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }

    build() {
       
        // Declarações dos elementos que serão usados, classes e atributos.

        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "header");

        const logoSpace = document.createElement("div");
        logoSpace.setAttribute("class", "logo");

        const Logo = document.createElement("h2");
        Logo.textContent = "Portal Galaxy.";

        const navBar = document.createElement("nav");
        navBar.setAttribute("class", "navBar");

        const navList = document.createElement("ul");
        navList.setAttribute("class", "navList");

        const listItemHome = document.createElement("a");
        listItemHome.setAttribute("class", "listItem");
        listItemHome.textContent = "Home";
        const listItemNews = document.createElement("a");
        listItemNews.setAttribute("class", "listItem");
        listItemNews.textContent = "News";
        const listItemAbout = document.createElement("a");
        listItemAbout.setAttribute("class", "listItem");
        listItemAbout.textContent = "About";
        const listItemContact = document.createElement("a");
        listItemContact.setAttribute("class", "listItem");
        listItemContact.textContent = "Contact";

        // Montagem do component através da aplicação dos appendChild

        componentRoot.appendChild(logoSpace);
        componentRoot.appendChild(navBar);
        logoSpace.appendChild(Logo);
        navBar.appendChild(navList);
        navList.appendChild(listItemHome);
        navList.appendChild(listItemNews);
        navList.appendChild(listItemAbout);
        navList.appendChild(listItemContact);

        return componentRoot;
    }

    styles() {
        const style =  document.createElement('style');
        style.textContent = `
        .header {
            display: flex;
            position: fixed;
            justify-content: space-between;
            align-items: center;
            top: 0;
            left: 0;
            width: 100%;
            height: 90px;
            background: #000;
        }
        
        .header .logo {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            color: #fff;
        }
        
        .header .navBar {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
        }
        
        .header .navBar .navList {
            display: flex;
            align-items: center;
            justify-content: center;
            list-style: none;
            padding: 20px;
        }
        
        .header .navBar .navList .listItem {
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            padding: 10px;
            cursor: pointer;
            border-radius:1rem;
        }

        .header .navBar .navList .listItem:hover {
            background-color: #666;
            animation: ease-in-out;
            transition: .4s;
        }

        `
        return style;
    }

}

customElements.define('nav-bar', NavBar);
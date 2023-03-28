class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});

        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }
    
    build() {
        
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "container");

        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "cardLeft");

        const profile = document.createElement("div");
        profile.setAttribute("class", "profile");

        const profileImage = document.createElement("img");
        profileImage.setAttribute("class", "profileImage")
        profileImage.src  = this.getAttribute("photo-profile") || "assets/img/photo-default.webp";
        profileImage.alt = "Foto do usuário";

        const autor = document.createElement("span");
        autor.setAttribute("class", "autor");
        autor.textContent = "by " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.setAttribute("class", "linkTitle");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.setAttribute("class", "newsContent");
        newsContent.textContent = this.getAttribute("content");

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "cardRight");

        const newsImage = document.createElement("img");
        newsImage.setAttribute("class", "newsImage")
        newsImage.src  = this.getAttribute("photo") || "assets/img/photo-default.webp";
        newsImage.alt = "Foto da Noticia";

        componentRoot.appendChild(card);
        card.appendChild(cardLeft);
        cardLeft.appendChild(profile);
        profile.appendChild(profileImage);
        profile.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        componentRoot.appendChild(card);
        card.appendChild(cardRight);
        cardRight.appendChild(newsImage);

        return componentRoot;
    }

    styles() {
        const style = document.createElement('style');

        style.textContent = `
        
        .container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        .card {
            display: flex;align-items: center;
            justify-content: space-between;
            width: 1048px;
            margin: 18px;
            border-radius: 1rem;
            box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.7);
            text-align: justify;
        }
        
        .cardLeft {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .cardLeft .profile {
            display: flex;
            align-items: center;
            justify-content: left;
        }
        
        .cardLeft .profile .profileImage {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
        
        .cardLeft .profile .autor {
            padding-left: 10px;
            font-weight: 500;
        }
        
        .cardLeft .linkTitle {
            color: #000;
            margin-top: 15px;
            font-size: 25px;
            text-decoration: none;
        }
        
        .cardLeft .newsContent {
            color: rgb(70, 70, 70);
        }
        
        .cardRight {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .cardRight .newsImage {
            border-top-right-radius: 1rem;
            border-bottom-right-radius: 1rem;
            max-width: 360px;
            height: 100%;
        }
        `

        return style
    }

}

customElements.define("card-news", CardNews);
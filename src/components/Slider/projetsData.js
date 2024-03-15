import BookiImg from "../../assets/images/Slider/Booki-image-slider.webp"
import OhmyfoodImg from "../../assets/images/Slider/ohmyfood-image-slider.webp"
import PrintItImg from "../../assets/images/Slider/printit-image-slider.webp"
import SophiebImg from "../../assets/images/Slider/sophie-bluel-image-slider.webp"
import KasaImg from "../../assets/images/Slider/kasa-image-slider.webp"
import NinacImg from "../../assets/images/Slider/nina-carducci-image-slider.webp"
import DebugImg from "../../assets/images/Slider/debug-image-slider.webp"
import ArgentbImg from "../../assets/images/Slider/argent-bank-image-slider.webp"
import KanxImg from "../../assets/images/Slider/kanx-image-slider.webp"

export const cardList = [
    {
        "title": "Kanx",
        "src": KanxImg,
        "alt": "Image du projet Kanx Sarl",
        "description": "Mise à jour du site Kanx avec Wordpress. Passage d'une one-page à plusieurs pages avec navigation. Mise en avant des projets d'installations photovoltaïques de l'entreprise Kanx spécialisée dans la mise en place de panneaux solaires en Suisse.",
        "technologies": ["Wordpress"],
        "githubLink": null,
        "siteLink": "https://kanx.ch/"
    },
    {
        "title": "Booki",
        "src": BookiImg,
        "alt": "Image du projet booki",
        "description": "Création de la page d'accueil d'une agence de voyage. L’entreprise souhaite développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix. J'ai intégré l'interface du site avec du code HTML et CSS. Pour cela, j'ai travaillé en étroite collaboration avec Sarah, la CTO, et Loïc, l’UI designer.",
        "technologies": ["HTML","CSS"],
        "githubLink":"https://github.com/Tanguy1213/Booki_P3",
        "siteLink": "https://tanguy1213.github.io/Booki_P3/"
    },
    {
        "title": "Ohmyfood",
        "src": OhmyfoodImg,
        "alt": "Image du projet ohmyfood",
        "description": "Développement d'un site en mobile first qui répertorie les menus de restaurants gastronomiques. Réaliser les différentes animations en CSS comme le like, le loader, les sélecteurs de plats etc... Intégration responsive du site à partir de maquettes Figma et organisation du code avec SASS",
        "technologies": ["HTML","SASS","CSS"],
        "githubLink":"https://github.com/Tanguy1213/Projet_4_strub_tanguy",
        "siteLink": "https://tanguy1213.github.io/Projet_4_strub_tanguy/"
    },
    {
        "title": "Print it!",
        "src": PrintItImg,
        "alt": "Image du projet Print it!",
        "description": "Dynamisation d'un site statique d'une petite impremerie familiale. A partir de maquettes Figma, intégration d'un carrousel à défilement infini fléché avec bullet-points ",
        "technologies": ["HTML","Javascript"],
        "githubLink":"https://github.com/Tanguy1213/Project_5_strub_tanguy",
        "siteLink": "https://tanguy1213.github.io/Project_5_strub_tanguy/"
    },
    {
        "title": "Sophie Bluel",
        "src": SophiebImg,
        "alt": "Image du projet de Sophie Bluel",
        "description": "Réalisation du front-end d'un portfolio pour Sophie Bluel. Intégration de la gestion de log-in log-out administrateur, d'une galerie de travaux filtrables par catégories et ajout de modales pour supprimer ou ajouter des travaux à la galerie. Le tout via une API",
        "technologies": ["Javascript","SASS","Swagger"],
        "githubLink":"https://github.com/Tanguy1213/Projet_6_strub_tanguy",
        "siteLink": null
    },
    {
        "title": "Kasa",
        "src": KasaImg,
        "alt": "Image du projet Kasa",
        "description": "Refonte d'un site de location d'appartements. Intégration de React avec des composants et les différentes routes. Création d'animations CSS de menus déroulants. Intégration dynamique des hôtes, description et rating de chaque logements ainsi qu'un slider à partir de données JSON. Site responsive",
        "technologies": ["React","Javascript","SASS"],
        "githubLink":"https://github.com/Tanguy1213/projet_8_strub_tanguy",
        "siteLink": "https://tanguystrub-kasa.netlify.app/"
    },
    {
        "title": "Nina Carducci",
        "src": NinacImg,
        "alt": "Image du projet Nina Carducci",
        "description": "Optimisation du site de Nina Carducci. Optimisation globale tant sur les performances que sur le SEO. Mise en place du référencement local ainsi que des metas données pour les réseaux sociaux. Amélioration de l'accessiblité et production d'un rapport d'optimisation.",
        "technologies": ["HTML","SASS","SEO","Lighthouse", "ShemasOrg"],
        "githubLink":"https://github.com/Tanguy1213/Projet_9_strub_tanguy",
        "siteLink": "https://tanguy1213.github.io/Projet_9_strub_tanguy/"
    },
    {
        "title": "Debug",
        "src": DebugImg,
        "alt": "Image du projet debug 724 Event",
        "description": "Debug du site one page 724 Events. Le site ayant été laissé en plan par l'ancien développeur j'ai debuggé dans le code la gestion des dates, le défilement d'un slider avec bullet-points, une modal de confirmation d'envoie de formulaire, les filtrages par catégories etc... J'ai également édité différents test dans un cahier de recette",
        "technologies": ["Jest", "React","Javascript", "SASS"],
        "githubLink":"https://github.com/Tanguy1213/Projet_10_strub_tanguy",
        "siteLink": "https://tanguystrub-724events.netlify.app/"
    },
    {
        "title": "Argent Bank",
        "src": ArgentbImg,
        "alt": "Image du projet Argent Bank",
        "description": "Développement du front-end d'une nouvelle banque en ligne avec React & Redux. Gestion des connexions utilisateurs et affichages de leurs comptes et transactions ainsi que la possiblité de modifier leur pseudo. Le tout via des appels API. Création de nouvelles routes API pour la gestion des transactions.",
        "technologies": ["React","Javascript","Redux","SASS","Swagger"],
        "githubLink":"https://github.com/Tanguy1213/ArgentBank-website",
        "siteLink": null
    }
]
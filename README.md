[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](http://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/powered-by-coffee.svg)](http://forthebadge.com)

# Hackathon CDS Groupe - Édition 2021

## Présentation du hackathon

Ce [hackathon](https://www.linkedin.com/feed/update/urn:li:activity:6851556355241725952/) a été organisé au salon [IFTM Top resa](https://www.iftm.fr/fr-fr.html) par [CDS Groupe](https://www.cdsgroupe.com/), qui est spécialiste des solutions de réservation et des services liés à l’hôtellerie d'affaires. Le but était de répondre à une problématique concernant le voyageur d'affaires de demain en apportant une solution digitale et en utilisant [l'API officielle de CDS Groupe](https://raw.githubusercontent.com/MiciWeb/Hackathon-CDS/master/src/image/hackhaton-project-screen/Api-Cds.png) en équipe de 5, et pour une durée de [24 heures maximum](https://raw.githubusercontent.com/MiciWeb/Hackathon-CDS/master/src/image/hackhaton-project-screen/screen-time.png). Pour ce hackathon, j'ai été le développeur web et le designer de mon équipe.

## Présentation du projet

Ce site réalisé en [React](https://fr.reactjs.org/) a été conçu dans le but de représenter la fonctionnalité que nous souhaitions proposer à l'API de CDS Groupe durant le hackathon. Cette fonctionnalité consistait à rechercher et filtrer les hôtels par espaces de travail qu'ils contiennent, afin de répondre à la forte demande et à la montée de cette exigence après la crise sanitaire.

Le site se présente tout d'abord avec une page d'accueil qui invite l'utilisateur à rechercher un hôtel de l'API officielle. ![page d'accueil](https://raw.githubusercontent.com/MiciWeb/Hackathon-CDS/master/src/image/hackhaton-project-screen/1-home-page.png) 
Ensuite, il propose une page de recherche  où l'utilisateur peut choisir ses hôtels en fonction des types ou nombres d'espaces de travail disponibles, tout en consultant leurs notes et quelques critères d'intérieur. ![page de recherche](https://raw.githubusercontent.com/MiciWeb/Hackathon-CDS/master/src/image/hackhaton-project-screen/2-search-page.png)

## Lancer le projet

Vous pouvez lancer le projet en le clonant dans un dossier avec la commande "git clone" puis en inscrivant la commande "npm install" suivie de "npm start" dans le terminal du dossier (Assurez-vous d'avoir la dernière version de [nodeJs](https://nodejs.org/en/)), cependant, les résultats de la recherche ne s'afficheront pas car je n'ai plus accès à l'API de CDS Groupe.

## Déroulement

- **14H00** - Début du hackathon, j'ai été mis dans une équipe où il y avait un développeur et 3 étudiants en école de tourisme et d'hôtellerie que je ne connaissais pas. À partir de là, nous avons dû réfléchir à des idées et commencer à monter notre projet. Au même moment, j'ai commencé à chercher des exemples de modèles et sur quel genre de design je voulais réaliser le site web final, et j'ai finalement choisi de le faire dans un style qui se rapproche du [flat design](https://www.usabilis.com/flat-design/), un style épuré, minimaliste et fait de couleurs vives très à la mode.

- **16H00** - Nous avons trouvé une idée qui consistait à répondre à la forte demande et à la montée des espaces de travail après la crise en ajoutant une fonctionnalité à l'API de CDS Groupe qui permette de préciser si un hôtel dispose ou non d'un espace de travail.

- **21H00** - 7 heures après le début, et après avoir exploré plusieurs idées, nous sommes restés sur notre idée principale. J'ai commencé la création du site web en essayant de comprendre et d'interagir avec l'API. Cela a été l'un des plus grands défis pour moi pendant ces 24 heures, car c'était la première fois que j'utilisais une API aussi complète et complexe. De plus, le deuxième développeur de l'équipe n'avait jamais fait de développement web.

- **00H00** - Après plusieurs heures, j'ai réussi à faire mes premières requêtes de test sur l'API. À partir de là, j'ai décidé de construire le projet en utilisant React, une librairie qui facilite la récupération et l'utilisation des requêtes, et qui me permet en plus d'être ultra organisé grâce à son système de composants réutilisables. À cause d'un problème de connexion avec git, j'ai décidé de faire le projet en effectuant des sauvegardes du code sur un système de cloud à part.

- **04H00** - J'ai terminé la première page du site en codant tout le visuel à la main, sans utiliser de librairies tierces telles que [Bootstrap](https://getbootstrap.com/), afin d'avoir une plus grande maîtrise et contrôle sur le visuel.

- **9H00** - Après une nuit très courte où j'ai pu dormir quelques minutes, j'ai fini le code de la deuxième page où j'ai pu traiter et afficher 4 hôtels lyonnais tirés de l'API pour la page de recherche. J'ai également créé des redirections et changé les URL grâce à la librairie très utile [React Router](https://devstory.net/12139/comprendre-le-react-router-avec-un-exemple-basique). À ce moment-là, tous les membres ont pu revenir en présentiel.

- **10H00** - Le deuxième développeur a créé une version mobile du site sur [GoodBarber](https://fr.goodbarber.com/), une plateforme "no-code" qui permet de réaliser des prototypages de site et d'applications sans coder.

- **12H00** - Grâce à un travail d'équipe, nous avons pu affiner le site pour le faire ressembler à ce que nous voulions présenter. À partir de là, j'ai arrêté de coder et j'ai aidé mon équipe à terminer les diapositives pour la présentation orale de 16h00.

- **14H00** - Fin du hackathon.

- **18H00** - Annonce des résultats : parmi les 11 équipes de 5, nous avons été sélectionnés vainqueurs. J'ai vraiment aimé participer à ce hackathon, car j'ai pu travailler en équipe avec d'autres types de profils que des développeurs web, ce qui fut une expérience enrichissante.

## Équipe 4 - BreizhGeek

* [Micipsa Sersour](https://www.linkedin.com/in/micipsa-sersour/) _alias_ [@MiciWeb](https://github.com/MiciWeb).
* [Margot Bruand](https://www.linkedin.com/in/margaux-bruand-pro/)
* [Mickael Ponapin](https://www.linkedin.com/in/mickael-ponapin/)
* [Eugenie Audren](https://www.linkedin.com/in/eug%C3%A9nie-audren-de-kerdrel-453989a7/)
* [Kevin Moirou](https://www.linkedin.com/in/k%C3%A9vin-moirou-25568412b//)

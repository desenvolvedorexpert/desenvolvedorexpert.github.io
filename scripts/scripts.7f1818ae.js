"use strict";angular.module("welcomeApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"}),b.html5Mode(!0)}]),angular.module("welcomeApp").controller("MainCtrl",["auth0",function(a){var b=this;b.login=function(){var b={connections:["facebook","github"],defaultLocation:"BR",callbackURL:"https://github.com/desenvolvedorexpert/desenvolvedorexpert.github.io/tree/develop#welcome",autoclose:!0,focusInput:!1,popup:!1,socialBigButtons:!0,rememberLastLogin:!0,primaryColor:"#fc3",icon:"http://dropbox.desenvolvedor.expert/devexpert.png",dict:{code:{codeInputPlaceholder:"Seu código",footerText:"",headerText:"Um email com o código, foi enviado para {email}.",resendLabel:"Não conseguiu achar o código?"},networkOrEmail:{emailInputPlaceholder:"yours@example.com",footerText:"",headerText:"",separatorText:"você também pode informar apenas o seu email",smallSocialButtonsHeader:"Baixar com"},signedIn:{success:"Thanks for signing in."},title:"desenvolvedor.expert",welcome:"Bem-vindo {name}!"}};a.socialOrEmailcode(b)},b.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("welcomeApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("welcomeApp").factory("auth0",["$window",function(a){var b="VRCKormzUAuTj06ObRh4iHyA1LhXX7NS",c="devexpert.auth0.com";return new a.Auth0LockPasswordless(b,c)}]),function(a){a("a.page-scroll").bind("click",function(b){var c=a(this);a("html, body").stop().animate({scrollTop:a(c.attr("href")).offset().top-50},1250,"easeInOutExpo"),b.preventDefault()}),a("body").scrollspy({target:".navbar-fixed-top",offset:51}),a(".navbar-collapse ul li a:not(.dropdown-toggle)").click(function(){a(".navbar-toggle:visible").click()}),a("h1").fitText(1.2,{minFontSize:"35px",maxFontSize:"65px"}),a("#mainNav").affix({offset:{top:100}}),(new WOW).init()}(jQuery),angular.module("welcomeApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<nav id="mainNav" class="navbar navbar-default navbar-fixed-top"> <div class="container-fluid"> <!-- Brand and toggle get grouped for better mobile display --> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand page-scroll" href="#page-top">{ desenvolvedor.expert(vc); }</a> </div> <!-- Collect the nav links, forms, and other content for toggling --> <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> <ul class="nav navbar-nav navbar-right"> <li> <a class="page-scroll" href="#about">#1 Sacada</a> </li> <li> <a class="page-scroll" href="#services">O que tem aqui?</a> </li> <li> <a class="page-scroll" href="#portfolio">Portfolio</a> </li> <li> <a class="page-scroll" href="#contact">Contato</a> </li> </ul> </div> <!-- /.navbar-collapse --> </div> <!-- /.container-fluid --> </nav> <header> <div class="header-content"> <div class="header-content-inner"> <h1>> ~/welcome/home_</h1> <hr> <blockquote class="text-left"> <p>Estamos descobrindo maneiras melhores de desenvolver software, fazendo-o nós mesmos e ajudando outros a fazerem o mesmo.</p> <footer class="text-right">Manifesto para <cite title="agilemanifesto.org">Desenvolvimento Ágil de Software</cite></footer> </blockquote> <p class="lead">Tudo que eu gostaria que algém tivesse me dito quando eu comecei a programar.</p> <a ng-click="main.login()" class="btn btn-primary btn-xl">Saiba Agora &nbsp;&nbsp;&nbsp;<span class="fa fa-mouse-pointer"></span></a> </div> </div> </header> <section class="bg-primary" id="about"> <div class="container"> <div class="row"> <div class="col-lg-8 col-lg-offset-2 text-center"> <h2 class="section-heading">> hello, world!_</h2> <hr class="light"> <p class="text-faded">A primeira sacada é que aqui tem tudo que você precisa para colocar seu novo website on-line agora mesmo! Todos os templates e temas são de código aberto, gratuito para download e fácil de usar. Sem restrições!</p> <a ng-click="main.login()" class="btn btn-default btn-xl">Comece Agora!</a> </div> </div> </div> </section> <section id="services"> <div class="container"> <div class="row"> <div class="col-lg-12 text-center"> <h2 class="section-heading">O que tem aqui?</h2> <hr class="primary"> </div> </div> </div> <div class="container"> <div class="row"> <div class="col-lg-3 col-md-6 text-center"> <div class="service-box"> <i class="fa fa-4x fa-diamond wow bounceIn text-primary"></i> <h3>Template</h3> <p class="text-muted">Esse template é atualizado regularmente para não quebrar.</p> </div> </div> <div class="col-lg-3 col-md-6 text-center"> <div class="service-box"> <i class="fa fa-4x fa-paper-plane wow bounceIn text-primary" data-wow-delay=".1s"></i> <h3>Pronto para Entregar</h3> <p class="text-muted">Você pode usar esse website como está, ou fazer as suas mudanças!</p> </div> </div> <div class="col-lg-3 col-md-6 text-center"> <div class="service-box"> <i class="fa fa-4x fa-newspaper-o wow bounceIn text-primary" data-wow-delay=".2s"></i> <h3>Atualizado</h3> <p class="text-muted">Atualizado para manter tudo em dia.</p> </div> </div> <div class="col-lg-3 col-md-6 text-center"> <div class="service-box"> <i class="fa fa-4x fa-heart wow bounceIn text-primary" data-wow-delay=".3s"></i> <h3>Feito com Amor</h3> <p class="text-muted">Você deve colocar amor em tudo que faz hoje em dia!</p> </div> </div> </div> </div> </section> <section class="no-padding" id="portfolio"> <div class="container-fluid"> <div class="row no-gutter"> <div class="col-lg-4 col-sm-6"> <a href="#" class="portfolio-box"> <img src="images/portfolio/1.138cfb33.jpg" class="img-responsive" alt=""> <div class="portfolio-box-caption"> <div class="portfolio-box-caption-content"> <div class="project-category text-faded"> Category </div> <div class="project-name"> Project Name </div> </div> </div> </a> </div> <div class="col-lg-4 col-sm-6"> <a href="#" class="portfolio-box"> <img src="images/portfolio/2.294ed565.jpg" class="img-responsive" alt=""> <div class="portfolio-box-caption"> <div class="portfolio-box-caption-content"> <div class="project-category text-faded"> Category </div> <div class="project-name"> Project Name </div> </div> </div> </a> </div> <div class="col-lg-4 col-sm-6"> <a href="#" class="portfolio-box"> <img src="images/portfolio/3.f37bdd6d.jpg" class="img-responsive" alt=""> <div class="portfolio-box-caption"> <div class="portfolio-box-caption-content"> <div class="project-category text-faded"> Category </div> <div class="project-name"> Project Name </div> </div> </div> </a> </div> <div class="col-lg-4 col-sm-6"> <a href="#" class="portfolio-box"> <img src="images/portfolio/4.69f46fba.jpg" class="img-responsive" alt=""> <div class="portfolio-box-caption"> <div class="portfolio-box-caption-content"> <div class="project-category text-faded"> Category </div> <div class="project-name"> Project Name </div> </div> </div> </a> </div> <div class="col-lg-4 col-sm-6"> <a href="#" class="portfolio-box"> <img src="images/portfolio/5.01c1485a.jpg" class="img-responsive" alt=""> <div class="portfolio-box-caption"> <div class="portfolio-box-caption-content"> <div class="project-category text-faded"> Category </div> <div class="project-name"> Project Name </div> </div> </div> </a> </div> <div class="col-lg-4 col-sm-6"> <a href="#" class="portfolio-box"> <img src="images/portfolio/6.4f6abe8d.jpg" class="img-responsive" alt=""> <div class="portfolio-box-caption"> <div class="portfolio-box-caption-content"> <div class="project-category text-faded"> Category </div> <div class="project-name"> Project Name </div> </div> </div> </a> </div> </div> </div> </section> <aside class="bg-dark"> <div class="container text-center"> <div class="call-to-action"> <h2>Download Gratuito basta se inscrever!</h2> <a ng-click="main.login()" class="btn btn-default btn-xl wow tada">Baixe Agora!</a> </div> </div> </aside> <section id="contact"> <div class="container"> <div class="row"> <div class="col-lg-8 col-lg-offset-2 text-center"> <h2 class="section-heading">Let\'s Get In Touch!</h2> <hr class="primary"> <p>Ready to start your next project with us? That\'s great! Give us a call or send us an email and we will get back to you as soon as possible!</p> </div> <div class="col-lg-4 col-lg-offset-2 text-center"> <i class="fa fa-phone fa-3x wow bounceIn"></i> <p>123-456-6789</p> </div> <div class="col-lg-4 text-center"> <i class="fa fa-envelope-o fa-3x wow bounceIn" data-wow-delay=".1s"></i> <p><a href="mailto:your-email@your-domain.com">feedback@startbootstrap.com</a></p> </div> </div> </div> </section> <footer class="footer"> <div class="container"> <p><span class="glyphicon glyphicon-heart"></span> from the Yeoman team</p> </div> </footer> <!-- Custom Theme JavaScript --> <script src="scripts/creative.js"></script>')}]);
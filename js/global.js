$(document).ready(function (){
    $('.navbar-collapse').collapse('hide');
    $("#pageHeader").empty();
    $("#pageHeader").append(addAboutMePageHeader());

    $("#pageContent").empty();
    $("#pageContent").append(addAboutMePageContent());
})

$(".toggle-btn").click(function () {
    let lightColor = '#6edebe';
    let darkColor = '#2f3f5a';
    let lightPageHeader = '#f8f9fa';
    let darkPageColor = '#384458';
    // let darkPageTextColor = 'white';
    let mutedColor = 'rgba(0, 0, 0, 0.1)';
    if (document.body.style.getPropertyValue('--main-color') === darkColor) {
        document.body.style.setProperty('--main-color', lightColor);
        document.body.style.setProperty('--secondary-color', mutedColor);
        document.body.style.setProperty('--page-header-color', lightPageHeader )
        $(".pageHeader").css('color','black');

    } else {
        document.body.style.setProperty('--main-color', darkColor);
        document.body.style.setProperty('--secondary-color', lightColor);
        document.body.style.setProperty('--page-header-color', darkPageColor )
        $(".pageHeader").css('color','white');
    }

    $(this).toggleClass("active")
})

$(this).click(function (){
    $('.navbar-collapse').collapse('hide');
})

$(".showAboutMe").click(function (){
    // $('.navbar-collapse').collapse('hide');

    $("#pageHeader").empty();
    $("#pageHeader").append(addAboutMePageHeader());

    $("#pageContent").empty();
    $("#pageContent").append(addAboutMePageContent());
})

$(".showPortfolio").click(function (){
    // $('.navbar-collapse').collapse('hide');

    $("#pageHeader").empty();
    $("#pageHeader").append(addPortfolioPageHeader());

    $("#pageContent").empty();
    $("#pageContent").append(addPortfolioPageContent());
})

$(".showBlogs").click(function (){
    // $('.navbar-collapse').collapse('hide');

    $("#pageHeader").empty();
    $("#pageHeader").append(addBlogsPageHeader());

    $("#pageContent").empty();
})

$(".showContactMe").click(function (){
    // $('.navbar-collapse').collapse('hide');

    $("#pageHeader").empty();
    $("#pageHeader").append(addContactMePageHeader());

    $("#pageContent").empty();
})

// function addAboutMePage(){
//     let aboutMePage = addAboutMePageHeader() ;
//     return aboutMePage;
// }
function addAboutMePageHeader(){
    let aboutMePageHeader =
        `<div id="aboutMePageHeader" class="pageHeader col-12 px-0">
                <div class="d-inline-block">
                    <div class="p-3 p-sm-5 p-md-5 rounded-3">
                        <div class="container-fluid py-3 text-center">
                            <h4 class="display-5 fw-bold ">Full Stack Developer</h4>
                            <p class=" text-center">I am a software engineer specialised in frontend and backend
                                development for web applications.
                                Want to know how I may help your project? Check out my project portfolio.</p>
                            <a type="button" class="pageHeader-hire-me link-text btn-lg my-3">View Resume</a>
                        </div>
                    </div>
                </div>
            </div>`;
    return aboutMePageHeader;
}
function addAboutMePageContent(){
    let aboutMePageContent =
        `<div id="aboutMePageContent">
                        <div id="whatIDo" class="card border-0 col-12 bg-transparent">
                            <div class="card-body ">
                                <h5 class="card-title">What I do</h5>
                                <p class="card-text">I have more than 6 years' experience building and maintaining
                                    software. Below is overview of my skill sets and technologies I use. Checkout my
                                    <a href="#"> resume</a> and<a href="#"> project portfolio</a>.
                                </p>
                            </div>
                        </div>
                        <div id="skillCardWrapper" class="col-12 row justify-content-center mx-0">
                            <div class="card shadow col-12 col-sm-5 col-md-5 col-lg-3 mx-md-1 bg-transparent mb-2">
                                <div class="card-body cardText px-0 ">
                                    <p><h6>JavaScript</h6><br>
                                    JavaScript, abbreviated JS, is a high-level,
                                    interpreted computer programming language that can be executed within a web browser.
                                    The cool functionality of Dark Mode is in JS.
                                    </p>
                                </div>
                            </div>
                            <div class="card shadow col-12 col-sm-5 col-md-5 col-lg-3 mx-md-1 bg-transparent mb-2">
                                <div class="card-body cardText px-0">
                                    <p><h6>HTML5</h6><br>
                                    HTML5 is a markup language used for structuring and presenting content on the World
                                    Wide Web. It is the fifth and last[3] major HTML version that is a World Wide Web
                                    Consortium (W3C) recommendation.
                                    </p>
                                </div>
                            </div>
                            <div class="card shadow col-12 col-sm-5 col-md-5 col-lg-3 mx-md-1 bg-transparent mb-2">
                                <div class="card-body cardText px-0">
                                    <p><h6>CSS3</h6><br>
                                    CSS describes how HTML elements are to be displayed on screen, paper, or in other
                                    media. This is website uses CSS for all the styling.
                                    </p>
                                </div>
                            </div>
                            <div class="card shadow col-12 col-sm-5 col-md-5 col-lg-3 mx-md-1 bg-transparent mb-2">
                                <div class="card-body cardText px-0">
                                    <p><h6>JAVA</h6><br>
                                    Java is a high-level programming language developed by Sun Microsystems. The Java
                                    syntax is similar to C++, but is strictly an object-oriented programming language.
                                    </p>
                                </div>
                            </div>
                            <div class="card shadow col-12 col-sm-5 col-md-5 col-lg-3 mx-md-1 bg-transparent mb-2">
                                <div class="card-body cardText px-0">
                                    <p><h6>SpringBoot</h6><br>
                                    Spring Boot makes it easy to create stand-alone, production-grade Spring based
                                    Applications that you can "just run".
                                    </p>
                                </div>
                            </div>
                            <div class="card shadow col-12 col-sm-5 col-md-5 col-lg-3 mx-md-1 bg-transparent mb-2">
                                <div class="card-body cardText px-0">
                                    <p><h6>Web Development</h6><br>
                                    Web application development is the creation of application programs that reside on
                                    remote servers and are delivered to the user's device over the Internet.
                                    </p>
                                </div>
                            </div>
                            <div class="card shadow col-12 col-sm-5 col-md-5 col-lg-3 mx-md-1 bg-transparent mb-2">
                                <div class="card-body cardText px-0">
                                    <p><h6>Agile methodology</h6><br>
                                    Agile software development refers to methodologies, where requirements and solutions
                                    evolve through collaboration between self-organizing cross-functional teams.
                                    </p>
                                </div>
                            </div>
                            <div class="card shadow col-12 col-sm-5 col-md-5 col-lg-3 mx-md-1 bg-transparent mb-2">
                                <div class="card-body cardText px-0">
                                    <p><h6>Jira</h6><br>
                                    Plan, track, and manage your agile and software development projects in Jira.
                                    Customize your workflow, collaborate, and release great software.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>`;
    return aboutMePageContent;
}

// function addPortfolioPage(){
//     let portfolioPage = addPortfolioPageHeader();
//     return portfolioPage;
// }
function addPortfolioPageHeader(){
    let portfolioPageHeader =
        `<div id="portfolioPageHeader" class="pageHeader col-12 px-0">
                <div class="d-inline-block">
                    <div class="p-3 p-md-5 mb-4 rounded-3">
                        <div class="container-fluid py-3 text-center">
                            <h4 class="display-5 fw-bold ">Portfolio</h4>
                            <p class=" text-center">Welcome to my online portfolio. Check out my projects.
                                I'm taking on freelance work at the moment. Want some help building new
                                projects?</p>
                            <a type="button" class="pageHeader-hire-me link-text btn-lg my-3">Hire Me!</a>
                        </div>
                    </div>
                </div>
            </div>`;
    return portfolioPageHeader;
}
function addPortfolioPageContent(){
    let portfolioContent =
        `<div id="portfolioPageContent">
                    <div id="filters" class="d-none row mx-0 justify-content-around mb-5">
                        <a href="#">All</a>
                        <a href="#">Frontend</a>
                        <a href="#">Backend</a>
                        <a href="#">External API</a>
                    </div>
                    <div id="projectWrapper" class="col-12 row justify-content-center mx-0">

                        <div class="card shadow col-12 col-sm-5 col-md-5 col-lg-3 mx-sm-1 mx-md-1 bg-transparent mb-2">
                            <img src="assets/images/designProject.jpg" class="card-img-top mt-3" alt="...">
                            <div class="card-body cardText px-0 ">
                                <p><h6>Design Project</h6><br>
                                This is a team design project with Mobile first approach. We used media queries to
                                change the layout based on the screen size.
                                </p>
                                <a href="https://demetrio-corey-prachi.github.io/codeup-design-project/">Demo &rarr;</a><br>
                                <a href="#">Read More &rarr;</a>
                            </div>
                        </div>
                        <div class="card shadow col-12 col-sm-5 col-md-5 col-lg-3 mx-sm-1 mx-md-1 bg-transparent mb-2">
                            <img src="assets/images/coffee.gif" class="card-img-top mt-3" alt="...">
                            <div class="card-body cardText px-0 ">
                                <p><br><br><h6>Coffee Project</h6><br>
                                This is a team project for Busy Beans Coffee company. We provided the
                                functionality to filter, add and remove coffee.
                                </p>
                                <a href="https://christopher-prachi-richard.github.io/coffee-project/">Demo
                                    &rarr;</a><br>
                                <a href="#">Read More &rarr;</a>
                            </div>
                        </div>
                        <div class="card shadow col-12 col-sm-5 col-md-5 col-lg-3 mx-sm-1 mx-md-1 bg-transparent mb-2">
                            <img src="assets/images/movieProject.jpeg" class="card-img-top mt-3" alt="...">
                            <div class="card-body cardText px-0 ">
                                <p><h6>Movie Project</h6><br>
                                This is a single-page application team project. It allows users to add, edit, and
                                delete movies, as well as rate them.
                                </p>
                                <a href="https://diamond-prachi.github.io/movie_project/">Demo &rarr;</a><br>
                                <a href="#">Read More &rarr;</a>
                            </div>
                        </div>
                        <div class="card shadow col-12 col-sm-5 col-md-5 col-lg-3 mx-sm-1 mx-md-1 bg-transparent mb-2">
                            <img src="assets/images/WeatherMapProject.gif" class="card-img-top mt-3" alt="...">
                            <div class="card-body cardText px-0 ">
                                <p><br><h6>Weather Map</h6>
                                This project uses two external APIs - OpenWeatherMap and Mapbox. This application allows
                                user to see weather at any place in the world by just clicking on Map.
                                </p>
                                <a href="#">Demo &rarr;</a><br>
                                <a href="#">Read More &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>`;
    return portfolioContent;
}

// function addBlogsPage(){
//     let blogPage = addBlogsPageHeader();
//     return blogPage;
// }
function addBlogsPageHeader(){
    let blogsPageHeader =
        `<div id="blogPageHeader" class="pageHeader col-12 px-0">
                <div class="d-inline-block">
                    <div class="px-0 py-5 px-sm-3 p-md-5 mb-4  rounded-3">
                        <div class="container-fluid px-0 p-md-1 py-3 text-center">
                            <h4 class="display-5 fw-bold">Becoming Software Developer</h4>
                            <p class=" text-center">Welcome to my blogs. If you are looking for project code,
                                designs,
                                fun challenges, then subscribe and get the latest blogs in your inbox.
                            </p>
                            <p>
                            <form action="">
                                <input class="enterEmailTextBox" type="text" size="30" placeholder="Enter email"
                                       required>
                                <button type="submit" class="pageHeader-hire-me link-text btn my-3">Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>`;
    return blogsPageHeader;
}
function addBlogsPageContent(){}

// function addContactMePage(){
//     let contactMePage = addContactMePageHeader();
//     return contactMePage;
// }
function addContactMePageHeader(){
    let contactMePageHeader =
        `<div id="contactPageHeader" class="pageHeader col-12 px-0">
                <div class="d-inline-block">
                    <div class="p-3 p-md-5 mb-4 rounded-3">
                        <div class="container-fluid py-3 text-center">
                            <h4 class="display-5 fw-bold ">Contact Me</h4>
                            <p class=" text-center">Interested in hiring me for your project or just want to say hi?
                                You
                                can fill in the form below.
                                Follow me on the social channels below.</p>
                            <div id="contactPageHeader-social-container" class="text-center">
                                <i class="bi-github social-icon "></i>
                                <i class="bi-linkedin social-icon "></i>
                                <i class="bi-slack social-icon"></i>
                                <i class="bi-skype social-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    return contactMePageHeader;
}
function addContactMePageContent(){}

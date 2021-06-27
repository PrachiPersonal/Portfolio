$(document).ready(function () {
    $('.navbar-collapse').collapse('hide');
    $("#pageHeader").empty();
    $("#pageHeader").append(addPortfolioPageHeader());

    $("#pageContent").empty();
    $("#pageContent").append(addPortfolioPageContent());
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
        document.body.style.setProperty('--page-header-color', lightPageHeader)
        $(".pageHeader").css('color', 'black');

    } else {
        document.body.style.setProperty('--main-color', darkColor);
        document.body.style.setProperty('--secondary-color', lightColor);
        document.body.style.setProperty('--page-header-color', darkPageColor)
        $(".pageHeader").css('color', 'white');
    }

    $(this).toggleClass("active")
})

$(this).click(function () {
    $('.navbar-collapse').collapse('hide');
})

$(".hire-me").click(function () {
    $("#pageHeader").empty();
    $("#pageHeader").append(addContactMePageHeader());

    $("#pageContent").empty();
    $("#pageContent").append(addContactMePageContent());
})

$(".showAboutMe").click(function () {
    $("#pageHeader").empty();
    $("#pageHeader").append(addAboutMePageHeader());

    $("#pageContent").empty();
    $("#pageContent").append(addAboutMePageContent());
})

$(".showPortfolio").click(function () {
    $("#pageHeader").empty();
    $("#pageHeader").append(addPortfolioPageHeader());

    $("#pageContent").empty();
    $("#pageContent").append(addPortfolioPageContent());
})

$(".showBlogs").click(function () {
    $("#pageHeader").empty();
    $("#pageHeader").append(addBlogsPageHeader());

    $("#pageContent").empty();
    $("#pageContent").append(addBlogsPageContent());

    $("#subscribe").click(function (event) {
        let email = $(".enterEmailTextBox").val();
        const url = `https://formspree.io/f/mwkaqvrp`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(email)
        };
        fetch(url, options)
            .then(response => response.json()
            ).then(data => console.log(data))
            /* Movie was created successfully */
            .catch(error => console.error(error)); /* handle errors */
    })
})

$(".showContactMe").click(function () {
    $("#pageHeader").empty();
    $("#pageHeader").append(addContactMePageHeader());

    $("#pageContent").empty();
    $("#pageContent").append(addContactMePageContent());

    $("#send").click(function (event) {
        let message = {
            name: $(".name").val(),
            email: $(".email").val(),
            message: $(".message").val()
        };
        const url = `https://formspree.io/f/mwkaqvrp`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message)
        };
        fetch(url, options)
            .then(response => response.json()
            ).then(data => console.log(data))
            /* Movie was created successfully */
            .catch(error => console.error(error)); /* handle errors */
    })
})

function addAboutMePageHeader() {
    let aboutMePageHeader =
        `<div id="aboutMePageHeader" class="pageHeader col-12 px-0">
                <div class="d-inline-block">
                    <div class="p-3 p-sm-5 p-md-5 rounded-3">
                        <div class="container-fluid py-3 text-center">
                            <h4 class="display-5 fw-bold ">Full Stack Developer</h4>
                            <p class=" text-center">I am a software engineer specialized in Front-end and Back-end
                                development for web applications.
                                Want to know how I may help your project? Check out my project portfolio.</p>
                            <a type="button" class="pageHeader-hire-me link-text btn-lg my-3">View Resume</a>
                        </div>
                    </div>
                </div>
            </div>`;
    return aboutMePageHeader;
}

function addAboutMePageContent() {
    let aboutMePageContent =
        `<div id="aboutMePageContent">
                        <div id="whatIDo" class="card border-0 col-12 bg-transparent">
                            <div class="card-body ">
                                <h5 class="card-title">What I do</h5>
                                <p class="card-text">I have more than 6 years' experience building and maintaining
                                    software. Below is overview of my skill sets and technologies I use.
                                    <!-- Checkout my-->
                                    <!--<a href="#"> resume</a> and <span id="portfolioLink"> project portfolio</span>.-->
                                </p>
                            </div>
                        </div>
                        <div id="skillCardWrapper" class="col-12 row justify-content-center mx-0">
                            <div class="card shadow col-12 col-sm-5 col-md-5 col-lg-3 mx-md-1 bg-transparent mb-2">
                                <div class="card-body cardText px-0 ">
                                    <img src="assets/images/js.png"  class="img-thumbnail d-inline mb-2">
                                    <h6 class="d-inline">JavaScript</h6>
                                    <p class="d-inline"><br>
                                    JavaScript, abbreviated JS, is a high-level,
                                    interpreted computer programming language that can be executed within a web browser.
                                    The cool functionality of Dark Mode is in JS.
                                    </p>
                                </div>
                            </div>
                            <div class="card shadow col-12 col-sm-5 col-md-5 col-lg-3 mx-md-1 bg-transparent mb-2">
                                <div class="card-body cardText px-0">
                                    <img src="assets/images/HTML5.png"  class="img-thumbnail d-inline mb-2">
                                    <h6 class="d-inline">HTML5</h6>
                                    <p class="d-inline"><br>
                                    HTML5 is a markup language used for structuring and presenting content on the World
                                    Wide Web. It is the fifth and last[3] major HTML version that is a World Wide Web
                                    Consortium (W3C) recommendation.
                                    </p>
                                </div>
                            </div>
                            <div class="card shadow col-12 col-sm-5 col-md-5 col-lg-3 mx-md-1 bg-transparent mb-2">
                                <div class="card-body cardText px-0">
                                    <img src="assets/images/css3.png"  class="img-thumbnail d-inline mb-2">
                                    <h6 class="d-inline">CSS3</h6>
                                    <p class="d-inline"><br>
                                    CSS describes how HTML elements are to be displayed on screen, paper, or in other
                                    media. This is website uses CSS for all the styling.
                                    </p>
                                </div>
                            </div>
                            <div class="card shadow col-12 col-sm-5 col-md-5 col-lg-3 mx-md-1 bg-transparent mb-2">
                                <div class="card-body cardText px-0">
                                    <img src="assets/images/JAVA.png"  class="img-thumbnail d-inline mb-2">
                                    <h6 class="d-inline">JAVA</h6>
                                    <p class="d-inline"><br>
                                    Java is a high-level programming language developed by Sun Microsystems. The Java
                                    syntax is similar to C++, but is strictly an object-oriented programming language.
                                    </p>
                                </div>
                            </div>
                            <div class="card shadow col-12 col-sm-5 col-md-5 col-lg-3 mx-md-1 bg-transparent mb-2">
                                <div class="card-body cardText px-0">
                                    <img src="assets/images/spring.png"  class="img-thumbnail d-inline mb-2">
                                    <h6 class="d-inline">SpringBoot</h6>
                                    <p class="d-inline"><br>
                                    Spring Boot makes it easy to create stand-alone, production-grade Spring based
                                    Applications that you can "just run".
                                    </p>
                                </div>
                            </div>
                            <div class="card shadow col-12 col-sm-5 col-md-5 col-lg-3 mx-md-1 bg-transparent mb-2">
                                <div class="card-body cardText px-0">
                                    <img src="assets/images/webDev.png"  class="img-thumbnail d-inline mb-2">
                                    <h6 class="d-inline">Web Development</h6>
                                    <p class="d-inline"><br>
                                    Web application development is the creation of application programs that reside on
                                    remote servers and are delivered to the user's device over the Internet.
                                    </p>
                                </div>
                            </div>
                            <div class="card shadow col-12 col-sm-5 col-md-5 col-lg-3 mx-md-1 bg-transparent mb-2">
                                <div class="card-body cardText px-0">
                                    <img src="assets/images/agile.jpeg"  class="img-thumbnail d-inline mb-2">
                                    <h6 class="d-inline">Agile methodology</h6>
                                    <p class="d-inline"><br>
                                    Agile software development refers to methodologies, where requirements and solutions
                                    evolve through collaboration between self-organizing cross-functional teams.
                                    </p>
                                </div>
                            </div>
                            <div class="card shadow col-12 col-sm-5 col-md-5 col-lg-3 mx-md-1 bg-transparent mb-2">
                                <div class="card-body cardText px-0">
                                    <img src="assets/images/Jira.jpeg"  class="img-thumbnail d-inline mb-2">
                                    <h6 class="d-inline">Jira</h6>
                                    <p class="d-inline"><br>
                                    Plan, track, and manage your agile and software development projects in Jira.
                                    Customize your workflow, collaborate, and release great software.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>`;
    return aboutMePageContent;
}

function addPortfolioPageHeader() {
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

function addPortfolioPageContent() {
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
                                <p><br><h6>Coffee Project</h6><br>
                                This is a team project for Busy Beans Coffee company. We provided the
                                functionality to filter, add and remove coffee.
                                </p><br>
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
                                </p><br>
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
                                <a href="https://prachiphatak.github.io/Weather-Map/">Demo &rarr;</a><br>
                                <a href="#">Read More &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>`;
    return portfolioContent;
}

function addBlogsPageHeader() {
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
                            <form action="https://formspree.io/f/mwkaqvrp"  method="POST">
                                <input class="enterEmailTextBox" name="subscribeEmail" type="text" size="30" placeholder="Enter email"
                                       required>
                                <button id="subscribe" type="submit" class="pageHeader-hire-me link-text btn my-3">Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>`;
    return blogsPageHeader;
}

function addBlogsPageContent() {
    let blogsContent =
        `<div id="blogsPageContent" class="">
                    <div id="blogsWrapper" class="col-12 row justify-content-center mx-0">
                        <div class="card shadow col-12 col-sm-5 col-md-5 col-lg-3 mx-sm-1 mx-md-1 bg-transparent mb-2">
                            <img src="assets/images/zoomBlog.jpeg" class="card-img-top mt-3" alt="...">
                            <div class="card-body cardText px-0 ">
                                <p><h6>One month @ codeup</h6><br>
                                We finished one at code up. All about the assignment, assessment, team mates.
                                </p>
                                <a href="#">Read More &rarr;</a>
                            </div>
                        </div>
                        <div class="card shadow col-12 col-sm-5 col-md-5 col-lg-3 mx-sm-1 mx-md-1 bg-transparent mb-2">
                            <img src="assets/images/CodingTipsBlog.jpeg" class="card-img-top mt-3" alt="...">
                            <div class="card-body cardText px-0 ">
                                <p><h6>Tips to learn coding!</h6><br>
                                Learn by doing. Always play with the code while learning.
                                </p>
                                <a href="#">Read More &rarr;</a>
                            </div>
                        </div>
                        <div class="card shadow col-12 col-sm-5 col-md-5 col-lg-3 mx-sm-1 mx-md-1 bg-transparent mb-2">
                            <img src="assets/images/languagesBlog.png" class="card-img-top mt-3" alt="...">
                            <div class="card-body cardText px-0 ">
                                <p><h6>Top 5 languages to learn in 2021</h6><br>
                                Here are most popular programming languages 2021 which will help you choose the best
                                language for web and mobile app development.
                                </p>
                                <a href="#">Read More &rarr;</a>
                            </div>
                        </div>
                        <div class="card shadow col-12 col-sm-5 col-md-5 col-lg-3 mx-sm-1 mx-md-1 bg-transparent mb-2">
                            <img src="assets/images/codingChallengesBlog.jpeg" class="card-img-top mt-3" alt="...">
                            <div class="card-body cardText px-0 ">
                                <p><h6>Coding Challenges</h6><br>
                                Practice programming skills with tutorials and practice problems of Basic Programming
                                </p><br><br>
                                <a href="#">Read More &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>`;
    return blogsContent
}

function addContactMePageHeader() {
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
                                <a href="https://github.com/PrachiPhatak" class="bi-github social-icon "></a>
                                <a href="https://www.linkedin.com/in/prachi-phatak-33a99215/" class="bi-linkedin social-icon "></a>
                                <a href="https://a1marketing.slack.com" class="bi-slack social-icon"></a>
                                <a href="skype:prachiphatak?chat" class="bi-skype social-icon"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    return contactMePageHeader;
}

function addContactMePageContent() {
    let contactMePageContent =
        `<div id="contactMePageContent" class="container">
            <div class="card bg-transparent border-0">
                <div class="body">
                    <div class="comment-form ">
                        <form class="row" action="https://formspree.io/f/mwkaqvrp"  method="POST">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <input type="text" name="name" class="name form-control" placeholder="Your Name" required>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <input type="text" name="email" class="email form-control" placeholder="Email Address" required>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <textarea rows="4" name="message" class="message form-control no-resize" placeholder="Message" required></textarea>
                                </div>
                                <button id="send" type="submit" class="btn btn-block hire-me">Send</button>
                            </div>                                
                        </form>
                    </div>
                </div>
            </div>
            </div>`;
    return contactMePageContent;
}

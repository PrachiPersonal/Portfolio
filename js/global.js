$(document).ready(function (){
    $("#pageHeader").empty();
    $('.navbar-collapse').collapse('hide');
    $("#pageHeader").append(addAboutMePage())
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
    $("#pageHeader").empty();
    $('.navbar-collapse').collapse('hide');
    $("#pageHeader").append(addAboutMePage())
})

$(".showPortfolio").click(function (){
    $("#pageHeader").empty();
    $('.navbar-collapse').collapse('hide');
    $("#pageHeader").append(addPortfolioPage())
})

$(".showBlogs").click(function (){
    $("#pageHeader").empty();
    $('.navbar-collapse').collapse('hide');
    $("#pageHeader").append(addBlogsPage())
})

$(".showContactMe").click(function (){
    $("#pageHeader").empty();
    $('.navbar-collapse').collapse('hide');
    $("#pageHeader").append(addContactMePage())
})

function addAboutMePage(){
    let aboutMePage = addAboutMePageHeader();
    return aboutMePage;
}
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
function addAboutMePageContent(){}

function addPortfolioPage(){
    let portfolioPage = addPortfolioPageHeader();
    return portfolioPage;
}
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
function addPortfolioPageContent(){}

function addBlogsPage(){
    let blogPage = addBlogsPageHeader();
    return blogPage;
}
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

function addContactMePage(){
    let contactMePage = addContactMePageHeader();
    return contactMePage;
}
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

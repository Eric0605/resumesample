var bio = {
    name: "Eric Tsang",
    role: "student",
    contacts: {
        moblie: "(415)5331247",
        email: "erictthk@gmail.com",
        github: "https://github.com/Eric0605",
        twitter: "https://twitter.com/Erictsang9?lang=en",
        location: "usa",
    },
    welcomeMessage: "Hi",
    skills: ["teaching ", "programming "],
    biopic: "http://www.polcomm.org/wp-content/uploads/project.jpg",
    display: function() {
        formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);
        formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").append(formattedRole);
        // $("#header").css("background-color", "blue");
        // for (var a in bio.contacts) {
        // var formattedcontactGeneric = HTMLcontactGeneric.replace("%contact%", a);
        // var formattedcontactGeneric2 = formattedcontactGeneric.replace("%data%", bio.contacts[a]);
        // $("#header").append(formattedcontactGeneric2);
        // $("#lets-connect").append(formattedcontactGeneric2);
        // }
        // for (var a = 0; a < bio.contacts.; a++) {
        //     var formattedcontactGeneric = HTMLcontactGeneric.replace("%contact%", a);
        //     var formattedcontactGeneric2 = formattedcontactGeneric.replace("%data%", bio.contacts.a);
        //     $("#header").append(formattedcontactGeneric2);
        //     $("#lets-connect").append(formattedcontactGeneric2);
        //     console.log(a);
        // }
        formattedmobile = HTMLmobile.replace("%contact%", bio.contacts);
        formattedmobile2 = formattedmobile.replace("%data%", bio.contacts.moblie);
        $("#header").append(formattedmobile2);
        $("#lets-connect").append(formattedmobile2);
        formattedemail = HTMLemail.replace("%contact%", bio.contacts);
        formattedemail2 = formattedemail.replace("%data%", bio.contacts.email);
        $("#header").append(formattedemail2);
        $("#lets-connect").append(formattedemail2);
        formattedgithub = HTMLgithub.replace("%contact%", bio.contacts);
        formattedgithub2 = formattedgithub.replace("%data%", bio.contacts.github);
        $("#header").append(formattedgithub2);
        $("#lets-connect").append(formattedgithub2);
        formattedtwitter = HTMLtwitter.replace("%contact%", bio.contacts);
        formattedtwitter2 = formattedtwitter.replace("%data%", bio.contacts.twitter);
        $("#header").append(formattedtwitter2);
        $("#lets-connect").append(formattedtwitter2);
        formattedlocation = HTMLlocation.replace("%contact%", bio.contacts);
        formattedlocation2 = formattedlocation.replace("%data%", bio.contacts.location);
        $("#header").append(formattedlocation2);
        $("#lets-connect").append(formattedlocation2);
        formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedwelcomeMsg);
        if (bio.biopic !== null) {
            formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
            $("#header").append(formattedbiopic);
        }
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};
bio.display();
var work = {
    jobs: [{
            "employer": "volunteer",
            "title": "helper",
            "location": "Hong Kong",
            "dates": "2015",
            "description": "to help to teach some special needed student."
        },
        {
            "employer": "volunteer",
            "title": "food distributor",
            "location": "San Francisco",
            "dates": "2016",
            "description": "to be in the church to distribute and translate if needed."
        }
    ],
    display: function() {
        // for(var i in work.jobs){
        //   $("#workExperience").append(HTMLworkStart);
        //   var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        //   var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        //   var formattedEmployerTitle = formattedEmployer + formattedTitle;
        //   $(".work-entry:last").append(formattedEmployerTitle);
        //   var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        //   $(".work-entry:last").append(formattedDates);
        //   var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        //   $(".work-entry:last").append(formattedDescription);
        // }
        for (var i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            $(".work-entry:last").append(formattedDates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};
work.display();
var projects = {
    projects: [{
            "title": "Mockup to Article",
            "dates": "2017",
            "description": "translating a mockup to HTML",
            "images": ["http://www.polcomm.org/wp-content/uploads/project.jpg", "http://www.polcomm.org/wp-content/uploads/project.jpg"]
        },
        {
            "title": "Animal Trading Cards Overview",
            "dates": "2017",
            "description": "Use what I have learned about CSS to convert a design prototype into a functional webpage",
            "images": ["http://www.polcomm.org/wp-content/uploads/project.jpg", "http://www.polcomm.org/wp-content/uploads/project.jpg"]
        },
        {
            "title": "Project Details",
            "dates": "2017",
            "description": "develop a responsive website that will display images, descriptions and links to each of the portfolio projects",
            "images": ["http://www.polcomm.org/wp-content/uploads/project.jpg", "http://www.polcomm.org/wp-content/uploads/project.jpg"]
        },
        {
            "title": "online resume",
            "dates": "2017",
            "description": "build my resume by writing JavaScript that will combine my personal information with pre-written HTML and CSS templates to generate my resume.",
            "images": ["http://www.polcomm.org/wp-content/uploads/project.jpg", "http://www.polcomm.org/wp-content/uploads/project.jpg"]
        },
        {
            "title": "classic arcade game clone",
            "dates": "2017",
            "description": "add a number of entities to the game including the player characters and enemies to recreate the classic arcade game Frogger",
            "images": ["http://www.polcomm.org/wp-content/uploads/project.jpg", "http://www.polcomm.org/wp-content/uploads/project.jpg"]
        }
    ],
    display: function() {
        for (var x = 0; x < projects.projects.length; x++) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[x].title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[x].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[x].description);
            $(".project-entry:last").append(formattedDescription);
            if (projects.projects[x].images !== null) {
                //  for(var z in projects.projects[x].images) {
                //     var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[x].images[z]);
                //     $(".project-entry:last").append(formattedImages);
                // }
                for (var z = 0; z < projects.projects[x].images.length; z++) {
                    var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[x].images[z]);
                    $(".project-entry:last").append(formattedImages);
                }
            }
        }
    }
};
projects.display();
var education = {
    schools: [{
            name: "Mira Loma",
            location: "Sacarmento",
            degree: "High school",
            majors: ["none", "none"],
            dates: "2016-2019",
            url: "http://www.sanjuan.edu/miraloma"
        },
        {
            name: "KTMC",
            location: "Hong Kong",
            degree: "High school",
            majors: ["none", "none"],
            dates: "2016-2019",
            url: "http://www.ktmc.edu.hk/"
        }
    ],
    onlineCourses: [{
            title: "Front-End Web Developer Nanodegree Program",
            school: "Udacity",
            dates: "2017-now",
            url: "http://udacity.com"
        },
        {
            title: "Web Design for Everybody (Basics of Web Development and Coding)",
            school: "coursera (University of Michigan)",
            dates: "2017-now",
            url: "https://www.coursera.org/"
        }
    ],
    display: function() {
        for (var x = 0; x < education.schools.length; x++) {
            $(".education-entry:last").css("color", "blue");
            $("#education").append(HTMLschoolStart);
            var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[x].name);
            $(".education-entry:last").append(formattedschoolName);
            var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[x].degree);
            $(".education-entry:last").append(formattedschoolDegree);
            var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[x].dates);
            $(".education-entry:last").append(formattedschoolDates);
            var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[x].location);
            $(".education-entry:last").append(formattedschoolLocation);
            var formattedschoolMajors = HTMLschoolMajor.replace("%data%", education.schools[x].majors);
            $(".education-entry:last").append(formattedschoolMajors);
        }
        $(".education-entry:last").append(HTMLonlineClasses);
        for (var y = 0; y < education.onlineCourses.length; y++) {
            $(".education-entry:last").css("color", "blue");
            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[y].title);
            $(".education-entry:last").append(formattedonlineTitle);
            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[y].school);
            $(".education-entry:last").append(formattedonlineSchool);
            var formattedonlineDates = HTMLschoolDates.replace("%data%", education.onlineCourses[y].dates);
            $(".education-entry:last").append(formattedonlineDates);
            var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[y].url);
            $(".education-entry:last").append(formattedonlineURL);
        }
    }
};
education.display();
$("#mapDiv").append(googleMap);

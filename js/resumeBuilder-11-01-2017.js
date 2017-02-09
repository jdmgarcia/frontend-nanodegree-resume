/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name":     "Juanma García",
    "role":     "Web Developer",
    "mobile":   "+34 675 614 642",
    "email":    "jdmgarciamoreno@gmail.com",
    "twitter":  "@jdmgarcia",
    "github":   "jdmgarcia",
    "location": "Granada (Spain)",
    "pic":      "images/avatar-twitter.jpg",
    "msg":      "This is my awesome CV",
    "skills":   [
                    "CSS", "HTML", "JavaScript", "PHP", "Agile Methodologies"
                ]
};

var work = {};
work.employer = "Freelance";
work.title = "Frontend Developer";
work.dates = "1th Octubre 2016 - Actually";
work.location = "Granada (Spain)";
work.description = "Development of websites";

var education = 
    {
        "school": [{
            "name": "Universidad de Granada",
            "degree": "Computer Engineering",
            "dates": "2000-2010",
            "location": "Granada (Spain)"
        }, {
            "name": "Università Degli Studi Di Salerno",
            "degree": "Computer Engineering",
            "dates": "2010-2011",
            "location": "Salerno (Italy)"
        }],
        "online": [{
            "title": "Agile Methodologies",
            "school": "MiríadaX",
            "dates": "2014",
            "url": "html://www.miriadax.com"
        }, {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "2017",
            "url": "html://www.udacity.com"
        }]
    }


var formattedSkills = "";
bio.skills.forEach(function(element) {
    formattedSkills += HTMLskills.replace('%data%', element);
});

// Show information
// 
$('#topContacts').prepend(HTMLmobile.replace('%data%', bio.mobile));
$('#topContacts').prepend(HTMLemail.replace('%data%', bio.email));
$('#topContacts').prepend(HTMLlocation.replace('%data%', bio.location));

$('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
$('#header').prepend(HTMLheaderName.replace('%data%', bio.name));

$('#header').append(HTMLbioPic.replace('%data%', bio.pic));

$('#header').append(HTMLskillsStart);
$('#header').append(HTMLwelcomeMsg.replace('%data%', bio.msg));

$('#skills').append(formattedSkills);

$('#footerContacts').append(HTMLtwitter.replace('%data%', bio.twitter));
$('#footerContacts').append(HTMLgithub.replace('%data%', bio.github));

$('#workExperience').append(HTMLworkStart);
$('#workExperience .work-entry').append(HTMLworkEmployer.replace('%data%', work.employer) + HTMLworkTitle.replace('%data%', work.title));
$('#workExperience .work-entry').append(HTMLworkDates.replace('%data%', work.dates));
$('#workExperience .work-entry').append(HTMLworkLocation.replace('%data%', work.location));
$('#workExperience .work-entry').append(HTMLworkDescription.replace('%data%', work.description));

$('#education').append(HTMLschoolStart);
$('#education .education-entry').append(HTMLschoolName.replace('%data%', education.school[0].name) + HTMLschoolDegree.replace('%data%', education.school[0].degree));
$('#education .education-entry').append(HTMLschoolDates.replace('%data%', education.school[0].dates));
$('#education .education-entry').append(HTMLschoolLocation.replace('%data%', education.school[0].location));

// Replace audacity to Udacity
$('#copy').html($('#copy').html().slice(2)).prepend('U');
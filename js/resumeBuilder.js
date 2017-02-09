/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work = 
{
    "jobs": [{
        "employer": "Freelance",
        "title": "Frontend Developer",
        "dates": "1th Octubre 2016 - Actually",
        "location": "Granada (Spain)",
        "description": "Development of websites"
    },{
        "employer": "Developer",
        "title": "Frontend Developer",
        "dates": "2015-2016",
        "location": "Madrid (Spain)",
        "description": "Development in the digital newspaper El Español"
    }],
    display: function() {
        this.jobs.forEach(function(element) {
            $('#workExperience').append(HTMLworkStart);
            $('.work-entry:last').append(HTMLworkEmployer.replace('%data%', element.employer) + HTMLworkTitle.replace('%data%', element.title));
            $('.work-entry:last').append(HTMLworkDates.replace('%data%', element.dates));
            $('.work-entry:last').append(HTMLworkLocation.replace('%data%', element.location));
            $('.work-entry:last').append(HTMLworkDescription.replace('%data%', element.description));
        });
    }
}

var projects = 
{
    "projects": [{
        "title": "Zero to Infinity",
        "dates": "September 2016",
        "description": "Development of CSS and HTML",
        "images": ["images/project-0.png"]
    },{
        "title": "El Español Home",
        "dates": "2016",
        "description": "CSS, HTML and Twig Template of all possible homes",
        "images": ["images/project-1.png"]
    }],
    display: function() {
        this.projects.forEach(function(element) {
            $('#projects').append(HTMLprojectStart);
            $('.project-entry:last').append(HTMLprojectTitle.replace('%data%', element.title));
            $('.project-entry:last').append(HTMLprojectDates.replace('%data%', element.dates));
            $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', element.description));
            $('.project-entry:last').append(HTMLprojectImage.replace('%data%', element.images[0]));
        });
    }
}

var bio = 
{
    "name": "juanma garcía",
    "role": "Web Developer",
    "welcomeMessage": "This is my awesome CV",
    "biopic": "images/avatar-twitter.jpg",
    "contacts": 
    {
        "mobile": "+34 675 614 642",
        "email": "jdmgarciamoreno@gmail.com",
        "github": "jdmgarcia",
        "twitter": "@jdmgarcia",
        "location": "Granada (Spain)"
    },
    "skills": [ "CSS", "HTML", "JavaScript", "PHP", "Agile Methodologies"],
    display: function() {
        // Show bio skills
        //
        if (this.skills.length > 0) {
            var formattedSkills = "";
            this.skills.forEach(function(element) {
                formattedSkills += HTMLskills.replace('%data%', element);
            });
        }
        // Show information
        // 
        $('#topContacts').prepend(HTMLmobile.replace('%data%', this.contacts.mobile));
        $('#topContacts').prepend(HTMLemail.replace('%data%', this.contacts.email));
        $('#topContacts').prepend(HTMLlocation.replace('%data%', this.contacts.location));

        $('#header').prepend(HTMLheaderRole.replace('%data%', this.role));
        $('#header').prepend(HTMLheaderName.replace('%data%', this.name));

        $('#header').append(HTMLbioPic.replace('%data%', this.biopic));

        $('#header').append(HTMLskillsStart);
        $('#header').append(HTMLwelcomeMsg.replace('%data%', this.welcomeMessage));

        $('#skills').append(formattedSkills);

        $('#footerContacts').append(HTMLtwitter.replace('%data%', this.contacts.twitter));
        $('#footerContacts').append(HTMLgithub.replace('%data%', this.contacts.github));
    }
}

var education = 
{
    "schools": [{
        "name": "Universidad de Granada",
        "degree": "Computer Engineering",
        "dates": "2000-2010",
        "location": "Granada (Spain)",
        "url": "http://www.ugr.es/"
    }, {
        "name": "Università Degli Studi Di Salerno",
        "degree": "Computer Engineering",
        "dates": "2010-2011",
        "location": "Salerno (Italy)",
        "url": "http://www.unisa.it/"
    }],
    "onlineCourses": [{
        "title": "Agile Methodologies",
        "school": "MiríadaX",
        "dates": "2014",
        "url": "html://www.miriadax.com"
    }, {
        "title": "JavaScript Basics",
        "school": "Udacity",
        "dates": "2017",
        "url": "html://www.udacity.com"
    }],
    displaySchools: function() {
        this.schools.forEach(function(element) {
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(HTMLschoolName.replace('%data%', element.name) + HTMLschoolDegree.replace('%data%', element.degree));
            $('.education-entry:last').append(HTMLschoolDates.replace('%data%', element.dates));
            $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', element.location));
            $('.education-entry:last >a').attr('href', element.url);
        });
    },
    displayOnlineCourses: function() {
        $('#education').append(HTMLonlineClasses);
        this.onlineCourses.forEach(function(element) {
            $('#education').append(HTMLonlineTitle.replace('%data%', element.title) + HTMLonlineSchool.replace('%data%', element.school));
            $('#education').append(HTMLonlineDates.replace('%data%', element.dates));
            $('#education').append(HTMLonlineURL.replace('%data%', element.url));
        });
    }
}

// Show bio
//
bio.display();

// Show work and education information
//
work.display();

projects.display();

education.displaySchools();

education.displayOnlineCourses();

// Replace audacity to Udacity
$('#copy').html($('#copy').html().slice(2)).prepend('U');

// Internationalize button
//
var iName = function() {
    var name = bio.name;
    var aName = name.split(' ');
    aName[0] = aName[0].slice(0,1).toUpperCase() + aName[0].slice(1).toLowerCase();
    aName[1] = aName[1].toUpperCase();
    name = aName.join(' ');

    return name;
}

$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);
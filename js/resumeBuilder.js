/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name":"Xu Wu",
    "role":"Web Frontend Developer",
    "contacts":{
        "mobile":"13552351806",
        "email":"1352288123@qq.com",
        "github":"http://www.github.com/wuscier",
        "twitter":"13552351806",
        "blog":"http://www.cnblogs.com/wuscier",
        "location":"Beijing, China"      
    },
    "welcomeMessage":"Let's communicate and be friends!",
    "skills":["programming","fluent English", "basketball"],
    "biopic":"images/wuxu.jpg",
};

bio.display = function()
{
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);


};

var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var education = {
    "schools":[
        {
            "name":"Luoyang Institute of Science and Technology",
            "location":"Luoyang, Henan",
            "degree":"Bachelor",
            "majors":["Principles of Computer Organization", "An Introduction to Database System", "Computer Networks","Operating System","Discrete Mathematics","C Programming","Assembly Language","C# Programming","ASP.NET","Java Programming"],
            "dates":"2009-2013",
            "url":"http://www.lit.edu.cn/"
        },
        {
            "name":"Wuxue Senior High School",
            "location":"Huanggang, Hubei",
            "degree":"Senior High School",
            "majors":["Chinese","Math","English","Physics","Chemistry","Biology"],
            "dates":"2005-2008",
            "url":"http://www.hbswxzx.com"
        }
    ],
    "onlineCourses":[
        {
            "title":"Fluent English Speaker",
            "school":"Wall Street English",
            "dates":"2015-2017",
            "url":"http://www.wsi.com.cn/"
        },
        {
            "title":"Full Stack Web Developer Nanodegree",
            "school":"Udacity",
            "dates":"2017-2018",
            "url":"http://www.udacity.com"
        }
    ],
    "display":function(){}

};

var work = 
{
    "jobs":[
        {
            "employer":"Shengtao Education Technology Co. Ltd.",
            "title":"Senior Software Engineer",
            "location":"Weidi Science and Technology Building 11F, Zhongguancun South Street No. 8, Haidian District, Beijing",
            "dates":"2016.5-now",
            "description":"developing interactive live apps"  
        },
        {
            "employer":"Beyondsoft",
            "title":"Senior Software Engineer",
            "location":"Beyondsoft Headquarters, Bldg. 7, East Zone, Courtyard #10, Xibeiwang East Road, Haidian District, Beijing 100193 P.R.C.",
            "dates":"2015.3-2016.5",
            "description":"developing tools for virus analysis"
        },
        {
            "employer":"Toshiba（China）Co., Ltd.",
            "title":"Software Developer",
            "location":"Room 1401, Tower D1, Liangmaqiao Diplomatic Office Building, Building 5, No.19, Dongfangdonglu, Chaoyang District, Beijing 100600, China",
            "dates":"2014.2-2015.2",
            "description":"developing voice recognition clients"
        },
        {
            "employer":"Guoli Textile dyeing and finishing Co. Ltd.",
            "title":"Software Developer",
            "location":"Wujin District, Changzhou, Jiangsu, China",
            "dates":"2013.2-2014.2",
            "description":"ERP development"
        }
    ],
    "display":function(){}
}

var projects = {
    "projectArr":
    [   
        {
            "title":"Advanced Software Engineer",
            "dates":"2016.5-now",
            "description":"Develop interactive live products that share resources across schools",
            "images":["images/st1.jpg","images/st2.jpg","images/st3.jpg","images/st4.jpg"]
        },
        {
            "title":".NET Engineer",
            "dates":"2015.3-2016.5",
            "description":"Develop a tool to help analyze virus using big data",
            "images":["images/bigdata1.jpg","images/bigdata2.jpg","images/bigdata3.jpg","images/bigdata4.jpg"]
        },

        {
            "title":".NET Engineer",
            "dates":"2014.2-2015.2",
            "description":"A voice recognition client that recognizes spkears' voice and translates into different languages. It can also display all kinds of documents, like ppt and word, etc.",
            "images":["images/voice1.jpg","images/voice2.jpg","images/voice3.jpg","images/voice4.jpg"]
        },

        {
            "title":"Group Leader",
            "dates":"2013.2-2014.2",
            "description":"A product that manages people, production, repertory and finance. It realizes paperless work and shares information across different departments ",
            "images":["images/guoli1.jpg","images/guoli2.jpg","images/guoli3.jpg","images/guoli4.jpg"]
        }
    ]
}

projects.display = function()
{
    this.projectArr.forEach(function(project)
    {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
        var formattedDates = HTMLprojectDates.replace("%data%",project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        project.images.forEach(function(image)
        {
            var formattedPic = HTMLprojectImage.replace("%data%",image);
            $(".project-entry:last").append(formattedPic);
        });
    });

    $("img").css("width",300);
    $("img").css("height",150);
};

projects.display();
/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name":"Xu Wu",
    "role":"Web Frontend Developer",
    "contacts":{
        "mobile":"13552351806",
        "email":"1352288123@qq.com",
        "github":"wuscier",
        "twitter":"",
        "location":"Beijing, China"      
    },
    "welcomeMessage":"Let's communicate and be friends!",
    "skills":["programming","fluent English", "basketball"],
    "biopic":"images/wuxu.jpg",
    "display":function(){}//to be done
};

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
    "projects":
    [   
        {
            "title":"Advanced Software Engineer",
            "dates":"2016.5-now",
            "description":"",
            "images":[]
        },
        {
            "title":".NET Engineer",
            "dates":"2015.3-2016.5",
            "description":"",
            "images":[]
        },

        {
            "title":".NET Engineer",
            "dates":"2014.2-2015.2",
            "description":"A voice recognition client that recognizes spkears' voice and translates into different languages. It can also display all kinds of documents, like ppt and word, etc.",
            "images":[]
        },

        {
            "title":"Group Leader",
            "dates":"2013.2-2014.2",
            "description":"A product that manages people, production, repertory and finance. It realizes paperless work and shares information across different departments ",
            "images":["images/guoli1.jpg","images/guoli2.jpg","images/guoli3.jpg","images/guoli4.jpg","images/guoli5.jpg"]
        }
    ]
}
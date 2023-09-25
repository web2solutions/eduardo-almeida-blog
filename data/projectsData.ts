const projectsData = [
  {
    title: 'Imóvel Manager - 2009',
    description: `Imóvel Manager was a Real Estate ERP software offered by my startup company as SaaS starting in 2009. From client management, up to financial automation, Imóvel Manager supported 2 hundred agencies paying small rates for cloud software.

In 2007 I started to attend several Real Estate agencies looking to develop websites and CRM tools. Then I created a product to attend that niche. At that point of time, the system was a monolithic ASP (my firstly learnt platform) application. Once the acceptance had increased and it required to be backed by better technologies, I decided to migrate it to Perl.

The goal was to decouple front and back end, completely, by creating a RIA application in the front and a REST api in the back end, leveraging things like preforking and event loops. To decrease the time and impact, the VB code was progressively rewrite to Perl, stills yet running on ASP.

In order to move from Windows to Linux, I initially picked Apache::ASP as an interface to run the migrated code, and finally I could have the entire codebase migrated from ASP/IIS to Mojolicious and Starman behind a Nginx.

Skills: Algorithm Design · Front-End Development · Node.js · Javascript · Perl · Test Driven Development · Event Driven Programming · Representational State Transfer (REST) · Microservices · Distributed Systems · Software Engineering · Software Architecture · PostgreSQL · Linux · HTML5 · REST · MongoDB · Git · Redis · RabbitMQ . crawling`,
    imgSrc: '/static/images/cashflow1.png',
    href: 'https://dhtmlx.com/blog/customer-spotlight-dhtmlx-cash-flow/',
  },
  {
    title: 'DHTMLX Perl - 2012',
    description: `The DHTMLX-Perl package is the Perl, open source replacement for the DHTMLX PHP connector (<https://docs.dhtmlx.com/connector__php__index.html#:~:text=DHTMLX%20connector%20is%20a%20helper,%2C%20filtering%2C%20validation%2C%20etc>.)

    The DHTMLX PHP is the backend distribution that powers the version 4 and 5 of the DHTMLX framework (<www.dhtmlx.com>)
    
    I created this package to be able to use all DHTMLX features under the Perl ecosystem.
    
    Skills: Perl, Vanilla Javascript, ES5, PostgreSQL, MS-SQL, MySQL, Oracle, CGI, PSGI, ASP, IIS, Apache, Windows, Linux, Mojolicious`,
    imgSrc: '/static/images/dhx.jpeg',
    href: 'https://github.com/web2solutions/DHTMLX-Perl',
  },
]

export default projectsData

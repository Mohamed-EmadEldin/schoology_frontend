<div align="center">

  ![image](./README_files/logo_word.jpg)

</div>

# Schoology Frontend

Frontend Repo for Schoology project, find Backend at [schoology_backend](https://github.com/Muhammed-Ahmed-Ismail/schoology_backend.git)


## 📝 Table of Contents
- [About](#-about)
- [Getting Started](#-getting-started)
- [hardware Requirements](#hardware-requirements)
- [Usage](#-usage)
- [Code scaffolding](./Angular_README.md#code-scaffolding)
- [Build](./Angular_README.md#build)
- [Running unit tests](./Angular_README.md#running-unit-tests)
- [Running end-to-end tests](./Angular_README.md#running-end-to-end-tests)
- [Further help](./Angular_README.md#further-help)
- [Built Using](#%EF%B8%8F-built-using)
- [Authors](#%EF%B8%8F-authors)

## 🧐 About
Due to the global trend of digitizing education and in the midst of emerging pandemics, a need has arisen for online education and schooling. <br/><br/>
<strong>Goal</strong> <br/>
 - To simulate the real-school daily interaction between student and teacher in the educational process.

 - To make the supervision of the child easier and more efficient .

 - To reduce the wasted days in the event of the need to work from home due to COVID high infection period or any other reason.

 - To make the process of administration easier and more efficient for the school.

<div align="right">
    <b><a href="#top">↥ back to top</a></b>
</div>

## 🏁 Getting Started

1) Clone the project ``` git clone https://github.com/Mohamed-EmadEldin/skoology-LMS.git ```

2) make sure the backend is running [backend getting started](https://github.com/Muhammed-Ahmed-Ismail/schoology_backend/blob/readme/README.md#-getting-started-)

3) run ``` ng serve ```

4) open ``` localhost:4200 ``` in preferred browser - check [hardware requirements](#hardware-requirements) -
 
<div align="right">
    <b><a href="#top">↥ back to top</a></b>
</div>

### Prerequisites

- [npm](https://npmjs.com/)
- [Angular/cli](https://github.com/angular/angular-cli)

## hardware requirements

### Browser compatibility
 - Microsoft Edge
 - Mozilla Firefox 22+
 - Chrome 17+
 - Opera 12+
 - Safari 5+

<div align="right">
    <b><a href="#top">↥ back to top</a></b>
</div>

## 🎈 Usage

### Admin
 - Register users, update their information, and deactivate users 
 - Do crud operations on classes,courses, meetings, and Exams
 - Publish announcement to be shown in the dashboard for all users
 - Update the dashboard gallery slider by adding images with titles and descriptions and remove it

### Teacher
 - Login and be directed to the dashboard to follow up on new announcements
 - List his/her today's meeting-sessions with the classes they are assigned to of the course they are assigned to teach online
 - Create new meeting by choosing the class, period, and date of the meeting and adding a title to it 
 - Create a new exam by providing a google-form link made by his/her google account, and the date,name for the exam, Once it is published it will be available for students to submit their answers to the exam.
 - Submit the exam responses to save students' grades in db
 - Show simple statistics about grades for each exam (max-min) scors, show all students' grades on each exam
 - Upload homework/files for students of classes he/she teaches and specify each file’s targeted class
 - Check new Messages Either from parents or students
 - Send a message to students in his/her classes or to their parents

### Student
 - Login and be directed to the dashboard to follow up on new announcements
 - List his/her today's classes with teachers for his/her class only
 - Submit exam by answering the form that his/her teacher publishes. A student can not submit an exam after the time that the teacher specifies when creating the form 
 - show his/her grades in the exams
 - send/receive messages with his/her teachers 
 - Get notified with new updates like (new meetings,exams, homework, and available grades)
### Parent
 - Login and be directed to the dashboard to follow up on new announcements
 - List his/her  child ‘s today classes with teachers for his/her child class only
 - List his or her child’s exams
 - List his/her child grades
 - Get notified with new available grades of his/her child grades
 - send/receive messages with his/her child’s teacher teachers 

<div align="right">
    <b><a href="#top">↥ back to top</a></b>
</div>


## ⛏️ Built Using
 - [aos](https://michalsnik.github.io/aos/)
 - [primeng](https://primefaces.org/primeng/)
 - [angular material](https://material.angular.io/)
 - [primeflex](https://www.primefaces.org/primeflex/)

<div align="right">
    <b><a href="#top">↥ back to top</a></b>
</div>

## ✍️ Authors

 - [@Mohamed-EmadEldin](https://github.com/Mohamed-EmadEldin)
 - [@Muhammed-Ahmed-Ismail](https://github.com/Muhammed-Ahmed-Ismail)
 - [@AmSaleh21](https://github.com/AmSaleh21)

<div align="right">
    <b><a href="#top">↥ back to top</a></b>
</div>

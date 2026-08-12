// ==========================================
// EVENTS
// ==========================================

let code = document.querySelector("#code");
let mic = document.querySelector("#mic");
let sport = document.querySelector("#sport");
let quiz = document.querySelector("#quiz");

let title = document.querySelector("#title");
let category = document.querySelector("#category");
let date = document.querySelector("#date");
let time = document.querySelector("#time");
let loc = document.querySelector("#loc");
let des = document.querySelector("#des");

let events = [
    {
        id: 1,
        name: "CodeSprint",
        cat: "Technology",
        Date: "18 August 2026",
        Time: "10:00 AM – 1:00 PM",
        Location: "Computer Lab",
        Text: "Put your coding skills to the test in a fast-paced programming challenge. Solve problems, think creatively, and compete with fellow students."
    },

    {
        id: 2,
        name: "QuizQuest",
        cat: "Academic",
        Date: "24 August 2026",
        Time: "11:00 AM – 1:00 PM",
        Location: "Auditorium",
        Text: "Challenge yourself with questions covering science, history, technology, literature, and general knowledge."
    },

    {
        id: 3,
        name: "Open Mic Night",
        cat: "Cultural",
        Date: "28 August 2026",
        Time: "5:00 PM – 7:30 PM",
        Location: "Auditorium",
        Text: "An evening dedicated to student talent. Perform music, poetry, storytelling, stand-up, or simply come along and support your friends."
    },

    {
        id: 4,
        name: "Campus Cup",
        cat: "Sports",
        Date: "30 August 2026",
        Time: "9:00 AM – 1:00 PM",
        Location: "School Ground",
        Text: "A friendly inter-house sports tournament designed to bring students together through teamwork, competition, and sportsmanship."
    }
];


function displayEvent(index) {

    if (!title) return;

    title.innerText = events[index].name;
    category.innerText = events[index].cat;
    date.innerText = events[index].Date;
    time.innerText = events[index].Time;
    loc.innerText = events[index].Location;
    des.innerText = events[index].Text;
}


if (code) {
    code.addEventListener("click", function () {
        displayEvent(0);
    });
}

if (quiz) {
    quiz.addEventListener("click", function () {
        displayEvent(1);
    });
}

if (mic) {
    mic.addEventListener("click", function () {
        displayEvent(2);
    });
}

if (sport) {
    sport.addEventListener("click", function () {
        displayEvent(3);
    });
}


// ==========================================
// REGISTRATION ELEMENTS
// ==========================================

let register1 = document.querySelector("#register1");
let register2 = document.querySelector("#register2");
let register4 = document.querySelector("#register4");

let registrationEvent =
    document.querySelector("#registrationEvent");

let studentName =
    document.querySelector("#studentName");

let studentEmail =
    document.querySelector("#studentEmail");

let registrationStatus =
    document.querySelector("#registrationStatus");

let confirmRegistration =
    document.querySelector("#confirmRegistration");


// ==========================================
// ANNOUNCEMENT DATA
// ==========================================

let announcements = [

    {
        title: "Inter-House Competition Registration",
        text: "Registration is now open for the upcoming inter-house competitions. Students can register through their respective house coordinators and represent their house.",
        date: "09 Aug 2026"
    },

    {
        title: "CodeSprint Registration",
        text: "Registration for CodeSprint is now open. Students interested in programming and problem-solving are encouraged to participate.",
        date: "10 Aug 2026"
    },

    {
        title: "Library Week",
        text: "Library Week begins on 20 August! Take part in reading challenges, book discussions, and special activities throughout the week.",
        date: "12 Aug 2026"
    },

    {
        title: "Cultural Fest Auditions",
        text: "Auditions for music, dance, theatre, and other performances are coming soon. Students interested in participating can register their interest.",
        date: "14 Aug 2026"
    }
];


// ==========================================
// OPEN REGISTRATION
// ==========================================

function openRegistration(index) {

    if (registrationEvent) {
        registrationEvent.innerText =
            announcements[index].title;
    }

    if (registrationStatus) {
        registrationStatus.innerText = "";
        registrationStatus.style.color = "";
    }

    if (studentName) {
        studentName.value = "";
    }

    if (studentEmail) {
        studentEmail.value = "";
    }
}


// ==========================================
// REGISTER BUTTONS
// ==========================================

if (register1) {

    register1.addEventListener("click", function () {
        openRegistration(0);
    });

}

if (register2) {

    register2.addEventListener("click", function () {
        openRegistration(1);
    });

}

if (register4) {

    register4.addEventListener("click", function () {
        openRegistration(3);
    });

}


// ==========================================
// LIBRARY WEEK VIEW
// ==========================================

// Your HTML currently uses register3 for Library Week.
// This prevents the old #view3 error.

let register3 = document.querySelector("#register3");

let announcementTitle =
    document.querySelector("#announcementTitle");

let announcementText =
    document.querySelector("#announcementText");

let announcementDate =
    document.querySelector("#announcementDate");


if (register3) {

    register3.addEventListener("click", function () {

        // If you have an announcement modal,
        // display the Library Week information.

        if (announcementTitle) {
            announcementTitle.innerText =
                announcements[2].title;
        }

        if (announcementText) {
            announcementText.innerText =
                announcements[2].text;
        }

        if (announcementDate) {
            announcementDate.innerText =
                announcements[2].date;
        }

    });

}


// ==========================================
// CONFIRM REGISTRATION
// ==========================================

if (confirmRegistration) {

    confirmRegistration.addEventListener("click", function () {

        let name = studentName
            ? studentName.value.trim()
            : "";

        let email = studentEmail
            ? studentEmail.value.trim()
            : "";


        // Validation

        if (!name || !email) {

            if (registrationStatus) {

                registrationStatus.innerText =
                    "Please fill in all the fields.";

                registrationStatus.style.color =
                    "#ff6b6b";
            }

            return;
        }


        // SUCCESS

        if (registrationStatus) {

            registrationStatus.innerText =
                "✓ Registration successful!";

            registrationStatus.style.color =
                "#FFB22C";
        }

    });

}
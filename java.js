
// declaring the buttons that i would like to be able to use as well as where to put the current date
let button = $(".btn");
let currentDay = $("#currentDay")

// creating an element of time
let time = moment();

// declaring an object for each task to get stored into based on the time value
let schedule = [
    {
        taskNumber: 9,
        taskValue: " ",

    },
    {
        taskNumber: 10,
        taskValue: " ",

    },
    {
        taskNumber: 11,
        taskValue: " ",
    },
    {
        taskNumber: 12,
        taskValue: " ",
    },
    {
        taskNumber: 1,
        taskValue: " ",
    },
    {
        taskNumber: 2,
        taskValue: " ",
    },
    {
        taskNumber: 3,
        taskValue: " ",
    },
    {
        taskNumber: 4,
        taskValue: " ",
    },
    {
        taskNumber: 5,
        taskValue: " ",
    },
]



// this function starts on page load
function init() {
    // this function gets the date and sets it to the current day part of the page
    getTime()

    // this function gets the current time of day and applies colors to each time slot depending on if it is the same, before, or after. 
    getColor()

    // this function takes the tasks stored in local storage and applies them to the corresponding4 textarea
    loadSave()
}


// this function gets the current daye and applies a format to show on the page.
function getTime() {
    currentDay.text(time.format("dddd MMMM Do"))
}


// this function applies the color to each time block based on the current time of day. 
function getColor() {

    // this chunk of code sets each textarea to a uique variable
    let box9 = $("#task9")
    let box10 = $("#task10")
    let box11 = $("#task11")
    let box12 = $("#task12")
    let box1 = $("#task1")
    let box2 = $("#task2")
    let box3 = $("#task3")
    let box4 = $("#task4")
    let box5 = $("#task5")

    // the statements below check the current time and applies a class to the text area based on if it is currently that time, or before, or after.
    if (moment().isBefore(moment("9:00", "hour"))) {
        box9.addClass("future")
    }
    else if (moment().startOf("hour").isSame(moment("09:00", "hour"))) {
        box9.addClass("present")
    } else {
        box9.addClass("past")
    }

    if (moment().isBefore(moment("10:00", "hour"))) {
        box10.addClass("future")
    }
    else if (moment().startOf("hour").isSame(moment("10:00", "hour"))) {
        box10.addClass("present")
    } else {
        box10.addClass("past")
    }

    if (moment().isBefore(moment("11:00", "hour"))) {
        box11.addClass("future")
    }
    else if (moment().startOf("hour").isSame(moment("11:00", "hour"))) {
        box11.addClass("present")
    } else {
        box11.addClass("past")
    }


    if (moment().isBefore(moment("12:00", "hour"))) {
        box12.addClass("future")
    }
    else if (moment().startOf("hour").isSame(moment("12:00", "hour"))) {
        box12.addClass("present")
    } else {
        box12.addClass("past")
    }


    if (moment().isBefore(moment("13:00", "hour"))) {
        box1.addClass("future")
    }
    else if (moment().startOf("hour").isSame(moment("13:00", "hour"))) {
        box1.addClass("present")
    } else {
        box1.addClass("past")
    }


    if (moment().isBefore(moment("14:00", "hour"))) {
        box2.addClass("future")
    }
    else if (moment().startOf("hour").isSame(moment("14:00", "hour"))) {
        box2.addClass("present")
    } else {
        box2.addClass("past")
    }

    if (moment().isBefore(moment("15:00", "hour"))) {
        box3.addClass("future")
    }
    else if (moment().startOf("hour").isSame(moment("15:00", "hour"))) {
        box3.addClass("present")
    } else {
        box3.addClass("past")
    }

    if (moment().isBefore(moment("16:00", "hour"))) {
        box4.addClass("future")
    }
    else if (moment().startOf("hour").isSame(moment("16:00", "hour"))) {
        box4.addClass("present")
    } else {
        box4.addClass("past")
    }

    if (moment().isBefore(moment("17:00", "hour"))) {
        box5.addClass("future")
    }
    else if (moment().startOf("hour").isSame(moment("17:00", "hour"))) {
        box5.addClass("present")
    } else {
        box5.addClass("past")
    }
}


// this function takes the data saved in local storage and sets each textarea to them.
function loadSave() {

    // the following chuck of code sets each textarea to a unique variable
    let box9 = $("#task9")
    let box10 = $("#task10")
    let box11 = $("#task11")
    let box12 = $("#task12")
    let box1 = $("#task1")
    let box2 = $("#task2")
    let box3 = $("#task3")
    let box4 = $("#task4")
    let box5 = $("#task5")

    // the folloowing chunk of code takes the data saved is local storage and sets each textarea's value to the corresponding data 
    box9.val(JSON.parse(localStorage.getItem("9")))
    box10.val(JSON.parse(localStorage.getItem("10")))
    box11.val(JSON.parse(localStorage.getItem("11")))
    box12.val(JSON.parse(localStorage.getItem("12")))
    box1.val(JSON.parse(localStorage.getItem("1")))
    box2.val(JSON.parse(localStorage.getItem("2")))
    box3.val(JSON.parse(localStorage.getItem("3")))
    box4.val(JSON.parse(localStorage.getItem("4")))
    box5.val(JSON.parse(localStorage.getItem("5")))
}

// this function is used to save the input of textareas to local storage
function saveTask(e) {


    // this defines the textarea that we will be saving based off of the save button clicked
    let textBox = $(this).parent(".row").children(".form-inline").children(".form-control-plaintext")

    // this checks the object to see if the task number matches the data id number of the textarea. if it does then the textareas content gets saved into local starage with the task number being the key
    for (let index = 0; index < schedule.length; index++) {
        if (schedule[index].taskNumber == textBox.attr("data-id")) {
            let store = textBox.val().trim()
            localStorage.setItem(schedule[index].taskNumber, JSON.stringify(store));
        }
    }

}

// this calls the saveTask function whenever a button is clicked
button.on("click", saveTask)

// this calls what functions need to be ran on page load
init();



// I when I was pushing up my final version I discovered that my previous pushes had not been working. I tried to make some additional pushes to retell the story of how my program was created, but that is why not much content changed between commits.
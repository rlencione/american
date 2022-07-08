var origDate = new Date ("Jan, 1, 2022, 12:00 AM");
    today = new Date ();
    diff = 0;
    days = 1000*60*60*24;

diff = today - origDate;
console.log(Math.floor(diff / days) + "dirença de dias")   
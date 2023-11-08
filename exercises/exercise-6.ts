// Exercise 6: Write a function that turn each day of an array to its weekday.

function weekDays(dates: Date[]): string[] {
    return dates.map(date => date.toLocaleDateString('en-US', {weekday: 'long'}));
}

module.exports = weekDays;

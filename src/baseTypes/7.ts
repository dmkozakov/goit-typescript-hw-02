/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekend {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = " Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

function isWeekend(day: string): boolean {
  if (day !== Weekend.Saturday && day !== Weekend.Sunday) {
    return false;
  }

  return true;
}

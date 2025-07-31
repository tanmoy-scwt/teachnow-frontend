
export function getDaySuffix(dayNumber: number | string) {
    const day = +dayNumber;
    if (day < 1 || day > 31) return "";
    if (day % 100 >= 11 && day % 100 <= 13) return day + "th";

    switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}

export default function TimeToString(timeInSec) {
    let result = "00:00"
    if (timeInSec <= 0) return result;
    result = [Math.floor(timeInSec / 60), timeInSec % 60].map(a=> a > 9 ? a : `0${a}`).join(":");
    return result;
}

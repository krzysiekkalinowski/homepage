import JSConfetti from 'js-confetti'

export const jsConfetti = new JSConfetti();

export const checkTime = () => {
    const checkedDate = new Date();
    const checkedHour = checkedDate.getHours();
    const checkedMinutes = checkedDate.getMinutes();
    if (checkedHour === checkedMinutes) {
        jsConfetti.addConfetti();
    };
};
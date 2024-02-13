const checkTime = () => {
    const checkedDate = new Date();
    const checkedHour = checkedDate.getHours();
    const checkedMinutes = checkedDate.getMinutes();
    console.log(checkedHour);
    console.log(checkedMinutes);
    if (checkedHour === checkedMinutes) {
        console.log("Tak jest");
    } else {
        console.log("Nie jest");
    };
};
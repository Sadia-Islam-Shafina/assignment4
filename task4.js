function generatePassword(obj) {
    if (!obj || typeof obj !== 'object' || !obj.name || !obj.birthYear || !obj.siteName) {
        return 'invalid';
    }
    else if (typeof obj.birthYear !== 'number' || obj.birthYear.toString().length !== 4) {
        return 'invalid';
    }
    else {
        const siteNameLetter = obj.siteName[0].toUpperCase() + obj.siteName.slice(1).toLowerCase();
        return `${siteNameLetter}#${obj.name}@${obj.birthYear}`;
    }
}
console.log(generatePassword({ name: "kolimuddin" , birthYear: 1999  } ));

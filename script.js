(function () {
    var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }

    console.log("\n=== ДОДАТКОВЕ ЗАВДАННЯ (Селекція за сумою ASCII-кодів літер) ===");
    console.log("Анотація: Обчислюється сума ASCII-кодів усіх символів імені.");
    console.log("Якщо сума > 400 — вважаємо ім'я 'довгим/важким' (Goodbye), інакше — (Hello).\n");

    function getAsciiSum(str) {
        var sum = 0;
        for (var k = 0; k < str.length; k++) {
            sum += str.charCodeAt(k);
        }
        return sum;
    }

    var THRESHOLD = 400; // Поріг значення ASCII

    for (var j = 0; j < names.length; j++) {
        var name = names[j];
        var asciiSum = getAsciiSum(name);

        if (asciiSum > THRESHOLD) {
            console.log("[ASCII sum: " + asciiSum + " > " + THRESHOLD + "]");
            byeSpeaker.speak(name);
        } else {
            console.log("[ASCII sum: " + asciiSum + " <= " + THRESHOLD + "]");
            helloSpeaker.speak(name);
        }
    }
})();

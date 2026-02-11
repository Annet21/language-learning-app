$(document).ready(function () {
            const words = {
                beginner: [
                    { en: "always", ua: "завжди" }, { en: "friend", ua: "друг" }, { en: "hello", ua: "привіт" },
                    { en: "water", ua: "вода" }, { en: "house", ua: "дім" }, { en: "sister", ua: "сестра" }, {en: "food", ua: "їжа"}, {en: "time", ua: "час"}, 
            {en: "ticket", ua: "білет"}, {en: "easy", ua: "легкий"}
                ],
                intermediate: [
					{en: "performance", ua: "вистава"}, {en: "experience", ua: "досвід"}, {en: "opportunity", ua: "можливість"}, {en: "abolish", ua: "скасовувати"}, 
            {en: "anger", ua: "злість"}, {en: "bodyguard", ua: "охоронець"}, 
            {en: "convenient", ua: "зручний"}, {en: "creative", ua: "творчий"}, 
            {en: "depth", ua: "глибина"}
                ],
                advanced: [
                    { en: "conscientiousness", ua: "сумлінність" }, { en: "phenomenon", ua: "явище" },
                    { en: "incomprehensibility", ua: "незрозумілість" }, { en: "augury", ua: "пророцтво" }, {en: "boor", ua: "грубіян"}, {en: "glib", ua: "вільний"}, 
            {en: "untoward", ua: "впертий"}, {en: "visionary", ua: "мрійливий"}, 
            {en: "abjure", ua: "відмовлятися"}, {en: "dormant", ua: "дрімаючий"}
                ]
            };

            let currentLevel = "beginner";
            let correctCount = 0;
            let currentWordIndex = 0;

            function setWord() {
                if (currentWordIndex < words[currentLevel].length) {
                    $('#word-display').text(words[currentLevel][currentWordIndex].en).removeClass('hidden');
                    $('#user-input').val("");
                } else {
                    displayLevel();
                    $('#feedback').text("Гра завершена!");
                    $('#check-btn').prop('disabled', true);
                }
            }

            function displayLevel() {
                let levelText;
                if (correctCount >= 5) {
                    levelText = "Рівень: Advanced";
                } else if (correctCount >= 3) {
                    levelText = "Рівень: Intermediate";
                } else {
                    levelText = "Рівень: Beginner";
                }
                $('#level-display').text(levelText);
            }

            $('#difficulty-select').change(function () {
                currentLevel = $(this).val();
                correctCount = 0;
                currentWordIndex = 0;
                $('#feedback').text('');
                $('#level-display').text('');
                $('#check-btn').prop('disabled', false);
                setWord();
            });

            $('#check-btn').click(function () {
                const userAnswer = $('#user-input').val().trim().toLowerCase();
                const correctAnswer = words[currentLevel][currentWordIndex].ua.toLowerCase();

                if (userAnswer === correctAnswer) {
                    correctCount++;
                    $('#feedback').html('<span style="color: green;">Вірно!</span>');
                } else {
                    $('#feedback').html(`<span style="color: red;">Невірно! Правильна відповідь: ${correctAnswer}</span>`);
                }

                $('#word-display').addClass('hidden');
                currentWordIndex++;
                setTimeout(setWord, 500);
            });

            setWord();
        });


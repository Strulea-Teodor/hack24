let questions = {
    "categories": {
        "general": {
            "1": {
                "text": "Is this person a professor?",
                "weight": 1.0
            },
            "2": {
                "text": "Is this person related to programming?",
                "weight": 1.0
            },
            "3": {
                "text": "Is this person involved in student organizations?",
                "weight": 0.8
            },
            "4": {
                "text": "Is your character female?",
                "weight": 1.0
            },
            "5": {
                "text": "Is your character male?",
                "weight": 1.0
            },
            "6": {
                "text": "Is your character a teacher?",
                "weight": 1.0
            },
            "7": {
                "text": "Is your character a mentor?",
                "weight": 1.0
            },
            "8": {
                "text": "Is your character a student?",
                "weight": 1.0
            }
        },
        "specific": {
            "1": {
                "text": "Does your character wear glasses?",
                "weight": 1.0
            },
            "2": {
                "text": "Is your character associated with mathematics?",
                "weight": 1.0
            },
            "3": {
                "text": "Does your character teach seminars?",
                "weight": 1.0
            },
            "4": {
                "text": "Was your character ever a rector?",
                "weight": 1.0
            },
            "5": {
                "text": "Is your character frequently seen around the library or research labs?",
                "weight": 1.0
            },
            "6": {
                "text": "Does your character hold lectures?",
                "weight": 1.0
            },
            "7": {
                "text": "Is your character associated with programming?",
                "weight": 1.0
            },
            "8": {
                "text": "Is your character professional?",
                "weight": 1.0
            },
            "9": {
                "text": "Is this professor a popular choice for graduation speeches?",
                "weight": 1.0
            },
            "10": {
                "text": "Is your character the dean of a faculty?",
                "weight": 1.0
            },
            "11": {
                "text": "Is your character known for wearing colorful outfits?",
                "weight": 1.0
            },
            "12": {
                "text": "Does your character often come late to classes?",
                "weight": 1.0
            },
            "13": {
                "text": "Is your character associated with gambling?",
                "weight": 1.0
            },
            "14": {
                "text": "Is your character known for excelling in academics?",
                "weight": 1.0
            },
            "15": {
                "text": "Does your character organize school events?",
                "weight": 1.0
            }
        },
        "pointless": {
            "1": {
                "text": "Does your character enjoy attending faculty meetings?",
                "weight": 1.0
            },
            "2": {
                "text": "Does your character always arrive on time to classes?",
                "weight": 1.0
            },
            "3": {
                "text": "Does your character use a MacBook for work?",
                "weight": 1.0
            },
            "4": {
                "text": "Is your character known to drink a lot of coffee during the day?",
                "weight": 1.0
            },
            "5": {
                "text": "Does your character prefer working in their office rather than from home?",
                "weight": 1.0
            },
            "6": {
                "text": "Is your character often seen at the cafeteria?",
                "weight": 1.0
            },
            "7": {
                "text": "Does your character prefer email communication over face-to-face meetings?",
                "weight": 1.0
            },
            "8": {
                "text": "Has your character ever been seen taking long walks around campus?",
                "weight": 1.0
            },
            "9": {
                "text": "Does your character attend campus sports events?",
                "weight": 1.0
            },
            "10": {
                "text": "Does your character own a pet?",
                "weight": 1.0
            }
        }
    }
};


let persons = [
    {
        "id": "1",
        "name": "Elena Gogoi",
        "role": "Professor",
        "department": "English Language",
        "image_url": "/static/images/john_smith.jpg",
        "answers": {
            "general": {
                "1": { "score": 1, "weight": 1.0 },
                "2": { "score": -1, "weight": 1.0 },
                "3": { "score": 0, "weight": 1.0 }
            }
        }
    },
    {
        "id": "2",
        "name": "Viorel Bostan",
        "role": "Professor",
        "department": "",
        "image_url": "/static/images/example_professor.jpg",
        "answers": {
            "general": {
                "1": { "score": 1, "weight": 1.0 },
                "2": { "score": 1, "weight": 1.0 },
                "3": { "score": 1, "weight": 1.0 },
                "4": { "score": 0, "weight": 1.0 },
                "5": { "score": 1, "weight": 1.0 }
            }
        }
    },
    {
        "id": "3",
        "name": "Teodor Strulea",
        "role": "Student",
        "department": "Student Council",
        "image_url": "/static/images/student_representative.jpg",
        "answers": {
            "general": {
                "1": { "score": 0, "weight": 1.0 },
                "2": { "score": 1, "weight": 1.0 },
                "3": { "score": 1, "weight": 1.0 },
                "4": { "score": 1, "weight": 1.0 },
                "5": { "score": 0, "weight": 1.0 }
            }
        }
    },
    {
        "id": "4",
        "name": "Cristofor Fistic",
        "role": "Professor",
        "department": "Mathematics",
        "image_url": "/static/images/viorel_bostan.jpg",
        "answers": {
            "general": {
                "1": { "score": 0, "weight": 1.0 },
                "2": { "score": 100, "weight": 1.0 },
                "3": { "score": 100, "weight": 1.0 },
                "4": { "score": 0, "weight": 1.0 },
                "5": { "score": 0, "weight": 1.0 }
            },
            "specific": {
                "1": { "score": 0 },
                "2": { "score": 1 },
                "3": { "score": 0 },
                "4": { "score": 10 },
                "5": { "score": 0 },
                "6": { "score": 1 },
                "7": { "score": 0 },
                "8": { "score": 1 },
                "9": { "score": 1 },
                "10": { "score": 1 },
                "11": { "score": 0 },
                "12": { "score": 0 },
                "13": { "score": 0 },
                "14": { "score": 1 },
                "15": { "score": 0 }
            },
            "pointless": {
                "1": { "score": 1 },
                "2": { "score": 1 },
                "3": { "score": 1 },
                "4": { "score": 1 },
                "5": { "score": 1 },
                "6": { "score": 0 },
                "7": { "score": 1 },
                "8": { "score": 0 },
                "9": { "score": 0 },
                "10": { "score": 0 }
            }
        }
    },
    {
        "id": "5",
        "name": "Mihai Gaidau",
        "role": "Professor",
        "department": "Computer Science",
        "image_url": "",
        "answers": {
            "general": {
                "1": { "score": 1, "weight": 1.0 },
                "2": { "score": 0, "weight": 1.0 },
                "3": { "score": 1, "weight": 1.0 },
                "4": { "score": 1, "weight": 1.0 },
                "5": { "score": 0, "weight": 1.0 }
            },
            "specific": {
                "1": { "score": 0 },
                "2": { "score": 0 },
                "3": { "score": 1 },
                "4": { "score": 0 },
                "5": { "score": 1 },
                "6": { "score": 1 },
                "7": { "score": 1 },
                "8": { "score": 1 },
                "9": { "score": 0 },
                "10": { "score": 0 },
                "11": { "score": 1 },
                "12": { "score": 0 },
                "13": { "score": 0 },
                "14": { "score": 1 },
                "15": { "score": 1 }
            },
            "pointless": {
                "1": { "score": 0 },
                "2": { "score": 1 },
                "3": { "score": 1 },
                "4": { "score": 1 },
                "5": { "score": 0 },
                "6": { "score": 1 },
                "7": { "score": 0 },
                "8": { "score": 1 },
                "9": { "score": 1 },
                "10": { "score": 1 }
            }
        }
    },
    {
        "id": "6",
        "name": "Elena Cojuhari",
        "role": "Professor",
        "department": "Mathematics",
        "image_url": "",
        "answers": {
            "general": {
                "1": { "score": 0, "weight": 1.0 },
                "2": { "score": 1, "weight": 1.0 },
                "3": { "score": 1, "weight": 1.0 },
                "4": { "score": 0, "weight": 1.0 },
                "5": { "score": 0, "weight": 1.0 }
            },
            "specific": {
                "1": { "score": 1 },
                "2": { "score": 0 },
                "3": { "score": 0 },
                "4": { "score": 0 },
                "5": { "score": 1 },
                "6": { "score": 1 },
                "7": { "score": 1 },
                "8": { "score": 0 },
                "9": { "score": 0 },
                "10": { "score": 0 },
                "11": { "score": 0 },
                "12": { "score": 1 },
                "13": { "score": 1 },
                "14": { "score": 0 },
                "15": { "score": 0 }
            },
            "pointless": {
                "1": { "score": 0 },
                "2": { "score": 0 },
                "3": { "score": 0 },
                "4": { "score": 1 },
                "5": { "score": 0 },
                "6": { "score": 1 },
                "7": { "score": 1 },
                "8": { "score": 0 },
                "9": { "score": 1 },
                "10": { "score": 0 }
            }
        }
    },
    {
        "id": "7",
        "name": "Ernest Bitca",
        "role": "Professor",
        "department": "Computer Science",
        "image_url": "",
        "answers": {
            "general": {
                "1": { "score": 1, "weight": 1.0 },
                "2": { "score": 0, "weight": 1.0 },
                "3": { "score": 0, "weight": 1.0 },
                "4": { "score": 0, "weight": 1.0 },
                "5": { "score": 1, "weight": 1.0 }
            },
            "specific": {
                "1": { "score": 1 },
                "2": { "score": 1 },
                "3": { "score": 0 },
                "4": { "score": 0 },
                "5": { "score": 1 },
                "6": { "score": 0 },
                "7": { "score": 1 },
                "8": { "score": 1 },
                "9": { "score": 0 },
                "10": { "score": 0 },
                "11": { "score": 1 },
                "12": { "score": 0 },
                "13": { "score": 0 },
                "14": { "score": 1 },
                "15": { "score": 1 }
            },
            "pointless": {
                "1": { "score": 0 },
                "2": { "score": 1 },
                "3": { "score": 1 },
                "4": { "score": 0 },
                "5": { "score": 1 },
                "6": { "score": 0 },
                "7": { "score": 1 },
                "8": { "score": 1 },
                "9": { "score": 0 },
                "10": { "score": 1 }
            }
        }
    }
];

// Game state
        let currentQuestionIndex = 0;
        let askedQuestions = [];
        let scores = {};
        let confidence = 0;

        // Initialize game data
        async function initializeGame() {
            try {
                questions = questions.categories;

                // Initialize scores for each person
                persons.forEach(person => {
                    scores[person.id] = 0;
                });
            } catch (error) {
                console.error('Error loading game data:', error);
            }
        }

        // Initialize the game when the page loads
        initializeGame();

        // Get all available questions across categories
        function getAllQuestions() {
            const allQuestions = [];
            Object.keys(questions).forEach(category => {
                Object.keys(questions[category]).forEach(id => {
                    allQuestions.push({
                        id,
                        category,
                        ...questions[category][id]
                    });
                });
            });
            return allQuestions;
        }

        // Select the next best question
        function selectNextQuestion() {
            const allQuestions = getAllQuestions();
            const remainingQuestions = allQuestions.filter(q => !askedQuestions.includes(`${q.category}-${q.id}`));

            if (remainingQuestions.length === 0) return null;

            // For now, just return a random question
            return remainingQuestions[Math.floor(Math.random() * remainingQuestions.length)];
        }

        // Update scores based on answer
        function updateScores(question, answer) {
            persons.forEach(person => {
                const personAnswer = person.answers[question.category]?.[question.id]?.score;
                if (personAnswer !== undefined) {
                    const weight = question.weight || 1;
                    if (answer === 'yes' && personAnswer === 1) {
                        scores[person.id] += 10 * weight;
                    } else if (answer === 'no' && personAnswer === 0) {
                        scores[person.id] += 10 * weight;
                    } else if (answer === 'not_sure') {
                        scores[person.id] += 5 * weight;
                    }
                }
            });
        }

        // Get the best guess based on current scores
        function getBestGuess() {
            let maxScore = -1;
            let bestPerson = null;

            persons.forEach(person => {
                if (scores[person.id] > maxScore) {
                    maxScore = scores[person.id];
                    bestPerson = person;
                }
            });

            return bestPerson;
        }

        // Start the game
        function startGame() {
            document.getElementById('home-page').style.display = 'none';
            document.getElementById('game-page').style.display = 'block';
            document.getElementById('result-section').style.display = 'none';

            // Reset game state
            currentQuestionIndex = 0;
            askedQuestions = [];
            scores = {};
            persons.forEach(person => {
                scores[person.id] = 0;
            });

            showNextQuestion();
        }

        // Show the next question
        function showNextQuestion() {
            const question = selectNextQuestion();

            if (!question || askedQuestions.length >= 10) {
                showResult();
                return;
            }

            document.getElementById('question-text').textContent = question.text;
            currentQuestion = question;
        }

        // Handle answer
        function handleAnswer(answer) {
            if (!currentQuestion) return;

            askedQuestions.push(`${currentQuestion.category}-${currentQuestion.id}`);
            updateScores(currentQuestion, answer);

            // Update confidence based on number of questions asked
            confidence = Math.min(100, (askedQuestions.length / 10) * 100);
            document.getElementById('confidence-value').textContent = `${Math.round(confidence)}%`;

            showNextQuestion();
        }

        // Show result
        function showResult() {
            const bestGuess = getBestGuess();

            document.getElementById('question-section').style.display = 'none';
            document.getElementById('result-section').style.display = 'block';

            if (bestGuess) {
                document.getElementById('guess-name').textContent = bestGuess.name;
                document.getElementById('guess-details').textContent =
                    `${bestGuess.role}${bestGuess.department ? ` - ${bestGuess.department}` : ''}`;
            }
        }

        // Handle end game
        function handleEndGame(correct) {
            if (correct) {
                alert("Yay! I guessed correctly! 🎉");
            } else {
                alert("Oh no! I'll try to do better next time! 😊");
            }
            startGame();
        }

        // KIKI STATES
        const KIKI_STATES = {
            welcoming: { emoji: "1.webp" },
            confused: { emoji: "4.webp" },
            thinking: { emoji: "2.webp" },
            confident: { emoji: "3.webp" }
        };

        function updateKikiState() {
            const kikiImg = document.getElementById('kiki-img');
            if (confidence < 30) {
                kikiImg.src = KIKI_STATES.confused.emoji;
            } else if (confidence < 60) {
                kikiImg.src = KIKI_STATES.thinking.emoji;
            } else {
                kikiImg.src = KIKI_STATES.confident.emoji;
            }
        }
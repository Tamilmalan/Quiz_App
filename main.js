const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Paris', correct: true },
            { text: 'London', correct: false },
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false }
        ]
    },
    {
        question: 'Who is the CEO of Tesla?',
        answers: [
            { text: 'Jeff Bezos', correct: false },
            { text: 'Elon Musk', correct: true },
            { text: 'Bill Gates', correct: false },
            { text: 'Steve Jobs', correct: false }
        ]
    },
    {
        question: 'What is the largest planet in our solar system?',
        answers: [
            { text: 'Earth', correct: false },
            { text: 'Jupiter', correct: true },
            { text: 'Mars', correct: false },
            { text: 'Saturn', correct: false }
        ]
    },
    {
        question: 'What is the boiling point of water?',
        answers: [
            { text: '90°C', correct: false },
            { text: '100°C', correct: true },
            { text: '110°C', correct: false },
            { text: '120°C', correct: false }
        ]
    },
    {
        question: 'Who wrote "To Kill a Mockingbird"?',
        answers: [
            { text: 'Mark Twain', correct: false },
            { text: 'Harper Lee', correct: true },
            { text: 'F. Scott Fitzgerald', correct: false },
            { text: 'Ernest Hemingway', correct: false }
        ]
    },
    {
        question: 'What is the hardest natural substance on Earth?',
        answers: [
            { text: 'Gold', correct: false },
            { text: 'Iron', correct: false },
            { text: 'Diamond', correct: true },
            { text: 'Platinum', correct: false }
        ]
    },
    {
        question: 'What is the longest river in the world?',
        answers: [
            { text: 'Amazon', correct: false },
            { text: 'Nile', correct: true },
            { text: 'Yangtze', correct: false },
            { text: 'Mississippi', correct: false }
        ]
    },
    {
        question: 'What is the smallest country in the world?',
        answers: [
            { text: 'Monaco', correct: false },
            { text: 'Nauru', correct: false },
            { text: 'Vatican City', correct: true },
            { text: 'San Marino', correct: false }
        ]
    },
    {
        question: 'Who developed the theory of relativity?',
        answers: [
            { text: 'Isaac Newton', correct: false },
            { text: 'Albert Einstein', correct: true },
            { text: 'Niels Bohr', correct: false },
            { text: 'Galileo Galilei', correct: false }
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: [
            { text: 'Venus', correct: false },
            { text: 'Mars', correct: true },
            { text: 'Jupiter', correct: false },
            { text: 'Saturn', correct: false }
        ]
    },
    {
        question: 'Who is known as the Father of Computers?',
        answers: [
            { text: 'Alan Turing', correct: false },
            { text: 'Charles Babbage', correct: true },
            { text: 'John von Neumann', correct: false },
            { text: 'Steve Jobs', correct: false }
        ]
    },
    {
        question: 'What is the tallest mountain in the world?',
        answers: [
            { text: 'K2', correct: false },
            { text: 'Kangchenjunga', correct: false },
            { text: 'Mount Everest', correct: true },
            { text: 'Lhotse', correct: false }
        ]
    },
    {
        question: 'Who wrote the play "Romeo and Juliet"?',
        answers: [
            { text: 'William Shakespeare', correct: true },
            { text: 'Christopher Marlowe', correct: false },
            { text: 'Ben Jonson', correct: false },
            { text: 'John Webster', correct: false }
        ]
    },
    {
        question: 'What is the largest ocean on Earth?',
        answers: [
            { text: 'Atlantic Ocean', correct: false },
            { text: 'Indian Ocean', correct: false },
            { text: 'Arctic Ocean', correct: false },
            { text: 'Pacific Ocean', correct: true }
        ]
    },
    {
        question: 'Who was the first President of the United States?',
        answers: [
            { text: 'Thomas Jefferson', correct: false },
            { text: 'Abraham Lincoln', correct: false },
            { text: 'George Washington', correct: true },
            { text: 'John Adams', correct: false }
        ]
    },
    {
        question: 'What is the chemical symbol for gold?',
        answers: [
            { text: 'Ag', correct: false },
            { text: 'Au', correct: true },
            { text: 'Pb', correct: false },
            { text: 'Fe', correct: false }
        ]
    },
    {
        question: 'Which element has the atomic number 1?',
        answers: [
            { text: 'Oxygen', correct: false },
            { text: 'Helium', correct: false },
            { text: 'Hydrogen', correct: true },
            { text: 'Nitrogen', correct: false }
        ]
    },
    {
        question: 'What is the main ingredient in guacamole?',
        answers: [
            { text: 'Tomato', correct: false },
            { text: 'Avocado', correct: true },
            { text: 'Pepper', correct: false },
            { text: 'Onion', correct: false }
        ]
    },
    {
        question: 'Which country is the largest by area?',
        answers: [
            { text: 'Canada', correct: false },
            { text: 'China', correct: false },
            { text: 'United States', correct: false },
            { text: 'Russia', correct: true }
        ]
    },
    {
        question: 'Who invented the telephone?',
        answers: [
            { text: 'Thomas Edison', correct: false },
            { text: 'Alexander Graham Bell', correct: true },
            { text: 'Nikola Tesla', correct: false },
            { text: 'Guglielmo Marconi', correct: false }
        ]
    },
    {
        question: 'What is the capital of Australia?',
        answers: [
            { text: 'Sydney', correct: false },
            { text: 'Melbourne', correct: false },
            { text: 'Canberra', correct: true },
            { text: 'Brisbane', correct: false }
        ]
    },
    {
        question: 'Which planet is known as the Morning Star?',
        answers: [
            { text: 'Venus', correct: true },
            { text: 'Mars', correct: false },
            { text: 'Jupiter', correct: false },
            { text: 'Saturn', correct: false }
        ]
    },
    {
        question: 'What is the primary gas found in the Earth’s atmosphere?',
        answers: [
            { text: 'Oxygen', correct: false },
            { text: 'Hydrogen', correct: false },
            { text: 'Nitrogen', correct: true },
            { text: 'Carbon Dioxide', correct: false }
        ]
    },
    {
        question: 'Which country is known as the Land of the Rising Sun?',
        answers: [
            { text: 'China', correct: false },
            { text: 'Japan', correct: true },
            { text: 'South Korea', correct: false },
            { text: 'Thailand', correct: false }
        ]
    },
    {
        question: 'What is the smallest planet in our solar system?',
        answers: [
            { text: 'Mercury', correct: true },
            { text: 'Mars', correct: false },
            { text: 'Venus', correct: false },
            { text: 'Earth', correct: false }
        ]
    },
    {
        question: 'Which element has the chemical symbol O?',
        answers: [
            { text: 'Oxygen', correct: true },
            { text: 'Gold', correct: false },
            { text: 'Silver', correct: false },
            { text: 'Iron', correct: false }
        ]
    },
    {
        question: 'What is the capital of Canada?',
        answers: [
            { text: 'Toronto', correct: false },
            { text: 'Vancouver', correct: false },
            { text: 'Ottawa', correct: true },
            { text: 'Montreal', correct: false }
        ]
    },
    {
        question: 'Who developed the polio vaccine?',
        answers: [
            { text: 'Albert Sabin', correct: false },
            { text: 'Jonas Salk', correct: true },
            { text: 'Alexander Fleming', correct: false },
            { text: 'Louis Pasteur', correct: false }
        ]
    },
    {
        question: 'What is the main component of the sun?',
        answers: [
            { text: 'Oxygen', correct: false },
            { text: 'Helium', correct: false },
            { text: 'Hydrogen', correct: true },
            { text: 'Carbon', correct: false }
        ]
    },
    {
        question: 'Which country is home to the kangaroo?',
        answers: [
            { text: 'India', correct: false },
            { text: 'Australia', correct: true },
            { text: 'South Africa', correct: false },
            { text: 'New Zealand', correct: false }
        ]
    },
    {
        question: 'What is the hardest rock?',
        answers: [
            { text: 'Granite', correct: false },
            { text: 'Marble', correct: false },
            { text: 'Diamond', correct: true },
            { text: 'Quartz', correct: false }
        ]
    },
    {
        question: 'Who was the first woman to win a Nobel Prize?',
        answers: [
            { text: 'Marie Curie', correct: true },
            { text: 'Mother Teresa', correct: false },
            { text: 'Rosalind Franklin', correct: false },
            { text: 'Jane Goodall', correct: false }
        ]
    },
    {
        question: 'What is the largest desert in the world?',
        answers: [
            { text: 'Sahara Desert', correct: false },
            { text: 'Arabian Desert', correct: false },
            { text: 'Gobi Desert', correct: false },
            { text: 'Antarctic Desert', correct: true }
        ]
    },
    {
        question: 'Who wrote "Pride and Prejudice"?',
        answers: [
            { text: 'Charlotte Bronte', correct: false },
            { text: 'Emily Bronte', correct: false },
            { text: 'Jane Austen', correct: true },
            { text: 'George Eliot', correct: false }
        ]
    },
    {
        question: 'What is the smallest bone in the human body?',
        answers: [
            { text: 'Femur', correct: false },
            { text: 'Stapes', correct: true },
            { text: 'Humerus', correct: false },
            { text: 'Tibia', correct: false }
        ]
    },
    {
        question: 'What is the most widely spoken language in the world?',
        answers: [
            { text: 'Spanish', correct: false },
            { text: 'English', correct: false },
            { text: 'Mandarin Chinese', correct: true },
            { text: 'Hindi', correct: false }
        ]
    },
    {
        question: 'Who discovered penicillin?',
        answers: [
            { text: 'Marie Curie', correct: false },
            { text: 'Albert Einstein', correct: false },
            { text: 'Alexander Fleming', correct: true },
            { text: 'Isaac Newton', correct: false }
        ]
    },
    {
        question: 'What is the capital of Italy?',
        answers: [
            { text: 'Milan', correct: false },
            { text: 'Venice', correct: false },
            { text: 'Rome', correct: true },
            { text: 'Florence', correct: false }
        ]
    },
    {
        question: 'Who was the first man to step on the moon?',
        answers: [
            { text: 'Buzz Aldrin', correct: false },
            { text: 'Yuri Gagarin', correct: false },
            { text: 'Neil Armstrong', correct: true },
            { text: 'Michael Collins', correct: false }
        ]
    },
    {
        question: 'Which planet is closest to the sun?',
        answers: [
            { text: 'Venus', correct: false },
            { text: 'Earth', correct: false },
            { text: 'Mars', correct: false },
            { text: 'Mercury', correct: true }
        ]
    },
    {
        question: 'What is the highest grossing film of all time?',
        answers: [
            { text: 'Avatar', correct: false },
            { text: 'Titanic', correct: false },
            { text: 'Avengers: Endgame', correct: true },
            { text: 'Star Wars: The Force Awakens', correct: false }
        ]
    },
    {
        question: 'Who is known as the King of Pop?',
        answers: [
            { text: 'Elvis Presley', correct: false },
            { text: 'Freddie Mercury', correct: false },
            { text: 'Michael Jackson', correct: true },
            { text: 'Prince', correct: false }
        ]
    },
    {
        question: 'What is the main ingredient in traditional paella?',
        answers: [
            { text: 'Pasta', correct: false },
            { text: 'Potatoes', correct: false },
            { text: 'Rice', correct: true },
            { text: 'Bread', correct: false }
        ]
    },
    {
        question: 'Who invented the World Wide Web?',
        answers: [
            { text: 'Bill Gates', correct: false },
            { text: 'Steve Jobs', correct: false },
            { text: 'Tim Berners-Lee', correct: true },
            { text: 'Mark Zuckerberg', correct: false }
        ]
    },
    {
        question: 'What is the most populous city in the world?',
        answers: [
            { text: 'New York', correct: false },
            { text: 'Tokyo', correct: true },
            { text: 'Shanghai', correct: false },
            { text: 'Mumbai', correct: false }
        ]
    },
    {
        question: 'Which ocean is the smallest?',
        answers: [
            { text: 'Indian Ocean', correct: false },
            { text: 'Atlantic Ocean', correct: false },
            { text: 'Pacific Ocean', correct: false },
            { text: 'Arctic Ocean', correct: true }
        ]
    },
    {
        question: 'Who was the first woman to fly solo across the Atlantic?',
        answers: [
            { text: 'Sally Ride', correct: false },
            { text: 'Amelia Earhart', correct: true },
            { text: 'Bessie Coleman', correct: false },
            { text: 'Harriet Quimby', correct: false }
        ]
    },
    {
        question: 'What is the largest land animal?',
        answers: [
            { text: 'Rhinoceros', correct: false },
            { text: 'Hippopotamus', correct: false },
            { text: 'African Elephant', correct: true },
            { text: 'Giraffe', correct: false }
        ]
    },
    {
        question: 'Who painted the Sistine Chapel ceiling?',
        answers: [
            { text: 'Leonardo da Vinci', correct: false },
            { text: 'Vincent van Gogh', correct: false },
            { text: 'Michelangelo', correct: true },
            { text: 'Raphael', correct: false }
        ]
    },
    {
        question: 'What is the smallest unit of life?',
        answers: [
            { text: 'Atom', correct: false },
            { text: 'Molecule', correct: false },
            { text: 'Cell', correct: true },
            { text: 'Organism', correct: false }
        ]
    },
    {
        question: 'What is the capital of Egypt?',
        answers: [
            { text: 'Cairo', correct: true },
            { text: 'Alexandria', correct: false },
            { text: 'Giza', correct: false },
            { text: 'Luxor', correct: false }
        ]
    },
    {
        question: 'Who wrote the "Iliad"?',
        answers: [
            { text: 'Sophocles', correct: false },
            { text: 'Homer', correct: true },
            { text: 'Virgil', correct: false },
            { text: 'Aristophanes', correct: false }
        ]
    },
    {
        question: 'What is the most abundant gas in the Earth’s atmosphere?',
        answers: [
            { text: 'Oxygen', correct: false },
            { text: 'Carbon Dioxide', correct: false },
            { text: 'Nitrogen', correct: true },
            { text: 'Argon', correct: false }
        ]
    },
    {
        question: 'Which of these planets is known as the “Red Planet”?',
        answers: [
            { text: 'Venus', correct: false },
            { text: 'Mars', correct: true },
            { text: 'Jupiter', correct: false },
            { text: 'Saturn', correct: false }
        ]
    },
    {
        question: 'What is the primary ingredient in guacamole?',
        answers: [
            { text: 'Tomato', correct: false },
            { text: 'Avocado', correct: true },
            { text: 'Cucumber', correct: false },
            { text: 'Pepper', correct: false }
        ]
    },
    {
        question: 'Which element is used in pencils?',
        answers: [
            { text: 'Graphite', correct: true },
            { text: 'Lead', correct: false },
            { text: 'Carbon', correct: false },
            { text: 'Iron', correct: false }
        ]
    },
    {
        question: 'Who was the famous queen of ancient Egypt?',
        answers: [
            { text: 'Cleopatra', correct: true },
            { text: 'Nefertiti', correct: false },
            { text: 'Hatshepsut', correct: false },
            { text: 'Nefertari', correct: false }
        ]
    },
    {
        question: 'What is the capital of Japan?',
        answers: [
            { text: 'Beijing', correct: false },
            { text: 'Seoul', correct: false },
            { text: 'Tokyo', correct: true },
            { text: 'Bangkok', correct: false }
        ]
    },
    // Add more questions here
    {
        question: 'What is the speed of light?',
        answers: [
            { text: '300,000 km/s', correct: true },
            { text: '150,000 km/s', correct: false },
            { text: '450,000 km/s', correct: false },
            { text: '600,000 km/s', correct: false }
        ]
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers: [
            { text: 'Vincent van Gogh', correct: false },
            { text: 'Leonardo da Vinci', correct: true },
            { text: 'Pablo Picasso', correct: false },
            { text: 'Claude Monet', correct: false }
        ]
    }
];
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let currentQuestionIndex = 0;
let userAnswers = [];
let currentQuestions = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getRandomQuestions() {
    const shuffledQuestions = shuffleArray([...questions]);
    return shuffledQuestions.slice(0, 10);
}

function startQuiz() {
    currentQuestions = getRandomQuestions();
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);
    showQuestion(currentQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    userAnswers[currentQuestionIndex] = selectedButton.innerText;
    Array.from(answerButtonsElement.children).forEach(button => {
        button.classList.add('disabled'); // Disable all buttons after an answer is selected
    });
    showCorrectAnswer();

    // Automatically go to the next question after 1 second
    setTimeout(() => {
        if (currentQuestionIndex < currentQuestions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestions[currentQuestionIndex]);
        } else {
            showResults();
        }
    }, 1000); // Adjust the timeout if you want a different delay
}

function showCorrectAnswer() {
    Array.from(answerButtonsElement.children).forEach(button => {
        const isCorrect = button.dataset.correct === 'true';
        if (isCorrect) {
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
        }
    });
}

function showResults() {
    const score = userAnswers.reduce((acc, answer, index) => {
        if (answer && currentQuestions[index].answers.find(a => a.text === answer).correct) {
            return acc + 1;
        }
        return acc;
    }, 0);

    questionElement.innerText = `You scored ${score} out of ${currentQuestions.length}`;
    answerButtonsElement.innerHTML = '';
}

startQuiz();
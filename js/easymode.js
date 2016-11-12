// General Knowledge, Easy Mode, Multiple Questions

(function() {
  var questions = [{
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What&#039;s the name of Batman&#039;s  parents?",
    choices: ["Joey and Jackie", "Jason and Sara", "Todd and Mira", "Thomas and Martha"],
    correctAnswer: "Thomas &amp; Martha"
  }, {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most common surname Wales?",
    choices: ["Williams", "Davies", "Evans", "Jones"],
    correctAnswer: "Jones"
  }, {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What name represents the letter &quot;M&quot; in the NATO phonetic alphabet?",
    correctAnswer: "Mike",
    choices: ["Matthew", "Mark", "Max", "Mike"]
  }, {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What is the first book of the Old Testament?",
    correctAnswer: "Genesis",
    choices: ["Exodus", "Leviticus", "Numbers", "Genesis"]
  }, {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?",
    correctAnswer: "Key",
    choices: ["Sword", "Pen", "Cellphone", "Key"]
  }, {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "Which best selling toy of 1983 caused hysteria, resulting in riots breaking out in stores?",
    correctAnswer: "Cabbage Patch Kids",
    choices: ["Transformers", "Care Bears", "Rubik&rsquo;s Cube", "Cabbage Patch Kids"]
  }, {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "In past times, what would a gentleman keep in his fob pocket?",
    correctAnswer: "Watch",
    choices: ["Money", "Keys", "Notebook", "Watch"]
  }, {
    category: "General Knowledge",
    type: "boolean",
    difficulty: "easy",
    question: "Video streaming website YouTube was purchased in it&#039;s entirety by Facebook for US$1.65 billion in stock.",
    correctAnswer: "False",
    choices: ["True"]
  }, {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "How would one say goodbye in Spanish?",
    correctAnswer: "Adi&oacute;s",
    choices: [" Hola", "Au Revoir", "Salir", "Adi&oacute;s"]
  }, {
    category: "General Knowledge",
    type: "boolean",
    difficulty: "easy",
    question: "French is an official language in Canada.",
    correctAnswer: "True",
    choices: ["False", "True"]
  }, {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "HTML is what type of language?",
    correctAnswer: "Markup Language",
    choices: ["Macro Language", "Programming Language", "Scripting Language", "Markup Language"]
  }, {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "Which sign of the zodiac is represented by the Crab?",
    correctAnswer: "Cancer",
    choices: ["Libra", "Virgo", "Sagittarius", "Cancer"]
  }, {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What does the &#039;S&#039; stand for in the abbreviation SIM, as in SIM card? ",
    correctAnswer: "Subscriber",
    choices: ["Single", "Secure", "Solid", "Subscriber"]
  }, {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What word represents the letter &#039;T&#039; in the NATO phonetic alphabet?",
    correctAnswer: "Tango",
    choices: ["Target", "Taxi", "Turkey", "Tango"]
  }, {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "Which American president appears on a one dollar bill?",
    correctAnswer: "George Washington",
    choices: ["Thomas Jefferson", "Abraham Lincoln", "Benjamin Franklin", "George Washington"]
  }, {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What is the name of the Jewish New Year?",
    correctAnswer: "Rosh Hashanah",
    choices: ["Elul", "New Year", "Succoss", "Rosh Hashanah"]
  }, {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "Which one of the following rhythm games was made by Harmonix?",
    correctAnswer: "Rock Band",
    choices: ["Meat Beat Mania", "Guitar Hero Live", "Dance Dance Revolution", "Rock Band"]
  }, {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What type of animal was Harambe, who was shot after a child fell into it&#039;s enclosure at the Cincinnati Zoo?",
    correctAnswer: "Gorilla",
    choices: ["Tiger", "Panda", "Crocodile", "Gorilla"]
  }, {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "Red Vines is a brand of what type of candy?",
    correctAnswer: "Licorice",
    choices: ["Lollipop", "Chocolate", "Bubblegum", "Licorice"]
  }, {
    category: "General Knowledge",
    type: "boolean",
    difficulty: "easy",
    question: "Bulls are attracted to the color red.",
    correctAnswer: "False",
    choices: ["True", "False"]
  }, {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What is the nickname of the US state of California?",
    correctAnswer: "Golden State",
    choices: ["Sunshine State", "Golden State", "Bay State", "Treasure State"]
  }, {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?",
    correctAnswer: "Spruce Goose",
    choices: ["Noah&#039;s Ark", "Fat Man", "Trojan Horse", "Spruce Goose"]
  }, {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What is the Spanish word for &quot;donkey&quot;?",
    correctAnswer: "Burro",
    choices: ["Caballo", "Burro", "Toro", "Perro"]
  }, {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What is the French word for &quot;hat&quot;?",
    correctAnswer: "Chapeau",
    choices: ["Bonnet", " &Eacute;charpe", "Chapeau", " Casque"]
  }, {
    category: "General Knowledge",
    type: "boolean",
    difficulty: "easy",
    question: "The Sun rises from the North.",
    correctAnswer: "False",
    choices: ["True", "False"]
  }];

  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var firstQuiz = $('#firstQuiz'); //Quiz div object

  // Display initial question
  displayNext();

  // Click handler for the 'next' button
  $('#next').on('click', function(e) {
    e.preventDefault();

    // Suspend click listener during fade animation
    if (firstQuiz.is(':animated')) {
      return false;
    }
    choose();

    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });

  // Click handler for the 'prev' button
  $('#prev').on('click', function(e) {
    e.preventDefault();

    if (firstQuiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });

  // Click handler for the 'Start Over' button
  $('#start').on('click', function(e) {
    e.preventDefault();

    if (firstQuiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });

  // Animates buttons on hover
  $('.button').on('mouseenter', function() {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function() {
    $(this).removeClass('active');
  });

  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });

    var header = $('<h4>Question ' + (index + 1) + ':</h4>');
    qElement.append(header);

    var question = $('<p>').append(questions[index].question);
    qElement.append(question);

    var radioButtons = createRadios(index);
    qElement.append(radioButtons);

    return qElement;
  }

  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }

  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }

  // Displays next requested element
  function displayNext() {
    firstQuiz.fadeOut(function() {
      $('#question').remove();

      if (questionCounter < questions.length) {
        var nextQuestion = createQuestionElement(questionCounter);
        firstQuiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value=' + selections[questionCounter] + ']').prop('checked', true);
        }

        // Controls display of 'prev' button
        if (questionCounter === 1) {
          $('#prev').show();
        } else if (questionCounter === 0) {

          $('#prev').hide();
          $('#next').show();
        }
      } else {
        var scoreElem = displayScore();
        firstQuiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }

  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>', {
      id: 'question'
    });

    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }

    score.append('You got ' + numCorrect + ' questions out of ' +
      questions.length + ' right!!!');
    return score;
  }
})();
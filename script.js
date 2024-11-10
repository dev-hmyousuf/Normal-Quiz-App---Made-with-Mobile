} else {

    questionEl.innerText = "Quiz Completed!";

    optionsEl.innerHTML = '';

    nextBtn.hidden = true;

  }

});

loadQuestion();

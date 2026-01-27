document.addEventListener("DOMContentLoaded", () => {
  const resultContainer = document.getElementById("result-container");
  const storedAnswers = localStorage.getItem("quizAnswers");

  if (!resultContainer) {
    console.error("result-container が見つかりません。HTMLに要素が存在するか確認してください。");
    return;
  }

  if (!storedAnswers) {
    resultContainer.textContent = "結果がありません。";
    return;
  }

  let allAnswers;
  try {
    allAnswers = JSON.parse(storedAnswers);
    if (!Array.isArray(allAnswers)) throw new Error();
  } catch (error) {
    resultContainer.textContent = "結果データが正しくありません。";
    return;
  }

  // 🔁 同じ問題が複数ある場合、最後のものだけ残す
  const latestAnswersMap = new Map();
  for (let i = allAnswers.length - 1; i >= 0; i--) {
    const entry = allAnswers[i];
    if (!latestAnswersMap.has(entry.question)) {
      latestAnswersMap.set(entry.question, entry);
    }
  }
  const userAnswers = Array.from(latestAnswersMap.values()).reverse();

  let correctCount = 0;
  let totalQuestions = userAnswers.length;

  let resultHTML = `
    <h2>結果</h2>
    <table border="1">
      <thead>
        <tr>
          <th>問題</th>
          <th>結果</th>
        </tr>
      </thead>
      <tbody>
  `;

  userAnswers.forEach((answerData, index) => {
    if (!answerData || typeof answerData !== "object") return;
    if (!answerData.correctAnswer || !answerData.userAnswer) return;

    let isCorrect = false;
    const questionText = answerData.question || `問題${index + 1}`;

    if (Array.isArray(answerData.correctAnswer)) {
      const userAnswerArr = Array.isArray(answerData.userAnswer)
        ? answerData.userAnswer.map(ans => ans?.trim() || null)
        : [];
      const correctAnswerArr = answerData.correctAnswer.map(ans => ans?.trim() || null);

      if (
        userAnswerArr.length === correctAnswerArr.length &&
        !userAnswerArr.includes(null) &&
        JSON.stringify(userAnswerArr) === JSON.stringify(correctAnswerArr)
      ) {
        isCorrect = true;
      }

    } else if (typeof answerData.correctAnswer === "object" && answerData.correctAnswer !== null) {
      isCorrect = Object.keys(answerData.correctAnswer).every(group => {
        const userGroupAnswers = Array.isArray(answerData.userAnswer[group])
          ? answerData.userAnswer[group].map(ans => ans?.trim() || null)
          : [];
        const correctGroupAnswers = Array.isArray(answerData.correctAnswer[group])
          ? answerData.correctAnswer[group].map(ans => ans?.trim() || null)
          : [];

        if (
          userGroupAnswers.includes(null) ||
          userGroupAnswers.length !== correctGroupAnswers.length
        ) {
          return false;
        }

        return JSON.stringify([...userGroupAnswers].sort()) === JSON.stringify([...correctGroupAnswers].sort());
      });
    }

    if (isCorrect) correctCount++;

    resultHTML += `
      <tr>
        <td>${questionText}</td>
        <td class="${isCorrect ? 'correct' : 'incorrect'}">${isCorrect ? '正解' : '不正解'}</td>
      </tr>
    `;
  });

  const accuracyRate = totalQuestions > 0
    ? ((correctCount / totalQuestions) * 100).toFixed(2)
    : "0.00";

  resultHTML += `
      </tbody>
    </table>
    <p><strong>正答率：${accuracyRate}%</strong></p>
    <button onclick="location.href='index.html'">ホームに戻る</button>
  `;

  resultContainer.innerHTML = resultHTML;
  // Do NOT remove "quizAnswers" yet if we want to use them for retry? 
  // Actually we need to remove it to clear the session, BUT we need to calculate incorrect questions first.

  // Calculate incorrect indices
  const incorrectIndices = [];
  userAnswers.forEach((answerData) => {
    // Re-verify correctness here or trust previous calc? 
    // Wait, "isCorrect" was calculated inside the loop but not stored. 
    // Let's re-eval or just capture it during the loop if we refactor.
    // For minimal refactor, let's just check the class of the 'td' or re-calculate.
    // Easier: Re-calculate or check the simple condition again.

    // actually, let's look at the result table or just re-run the logic?
    // The logic is complex (groups vs order).
    // Let's add a "review-btn" and calculate on click? 
    // Or better: Modify the loop above to push to incorrectIndices.
  });

  // Re-scanning userAnswers to find incorrect ones using the same logic as above
  userAnswers.forEach((answerData) => {
    if (!answerData || typeof answerData !== "object") return;

    let isCorrect = false;
    if (Array.isArray(answerData.correctAnswer)) {
      const userAnswerArr = Array.isArray(answerData.userAnswer) ? answerData.userAnswer.map(ans => ans?.trim() || null) : [];
      const correctAnswerArr = answerData.correctAnswer.map(ans => ans?.trim() || null);
      if (
        userAnswerArr.length === correctAnswerArr.length &&
        !userAnswerArr.includes(null) &&
        JSON.stringify(userAnswerArr) === JSON.stringify(correctAnswerArr)
      ) { isCorrect = true; }
    } else if (typeof answerData.correctAnswer === "object" && answerData.correctAnswer !== null) {
      isCorrect = Object.keys(answerData.correctAnswer).every(group => {
        const userGroupAnswers = Array.isArray(answerData.userAnswer[group]) ? answerData.userAnswer[group].map(ans => ans?.trim() || null) : [];
        const correctGroupAnswers = Array.isArray(answerData.correctAnswer[group]) ? answerData.correctAnswer[group].map(ans => ans?.trim() || null) : [];
        if (userGroupAnswers.includes(null) || userGroupAnswers.length !== correctGroupAnswers.length) return false;
        return JSON.stringify([...userGroupAnswers].sort()) === JSON.stringify([...correctGroupAnswers].sort());
      });
    }

    if (!isCorrect && answerData.questionIndex !== undefined) {
      incorrectIndices.push(answerData.questionIndex);
    }
  });


  if (incorrectIndices.length > 0) {
    const reviewBtn = document.createElement("button");
    reviewBtn.textContent = "間違えた問題をやり直す";
    reviewBtn.style.marginTop = "20px";
    reviewBtn.style.backgroundColor = "#ffcccc";
    reviewBtn.onclick = () => {
      localStorage.setItem("quizRetryOrder", JSON.stringify(incorrectIndices));
      window.location.href = "quiz.html?mode=retry";
    };
    resultContainer.appendChild(reviewBtn);
  }

  localStorage.removeItem("quizAnswers");
});

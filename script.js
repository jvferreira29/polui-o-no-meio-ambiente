function checkAnswers() {
    const answers = {
        q1: 'b',
        q2: 'b',
        q3: 'b'
    };
    let result = '';
    for (const [question, correctAnswer] of Object.entries(answers)) {
        const selected = document.querySelector(`input[name=${question}]:checked`);
        if (selected) {
            if (selected.value === correctAnswer) {
                result += `Pergunta ${question.charAt(1)}: Correto!<br>`;
            } else {
                result += `Pergunta ${question.charAt(1)}: Incorreto. Resposta correta é ${correctAnswer.toUpperCase()}.<br>`;
            }
        } else {
            result += `Pergunta ${question.charAt(1)}: Nenhuma resposta selecionada.<br>`;
        }
    }
    document.getElementById('result').innerHTML = result;
}

function masuk () {
    window.location.href = "index.html";
}

function adminLogin() {
    var x = document.getElementById("userField").value;
    var y = document.getElementById("passField").value;

    if(x == "hrd@pelitaabadisentosa.co.id" && y == "pas_michael2023") {
        document.getElementById("showAnswer").style.display="flex";
        document.getElementById("showAdmin").style.display="none";
        document.getElementById("block").style.display="none";
    } else {
        alert("Username/Password salah...");
    }
}

// Mekanik PG
document.getElementById('submit').addEventListener('click', function() {
    // Membuat array untuk menyimpan jawaban dari setiap soal
    const answers = [];
  
    for (let i = 1; i <= 5; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedAnswer) {
            answers.push(`Soal ${i}: ${selectedAnswer.value}`);
        }
    }
  
    // Menampilkan hasil secara berurutan di div hasil
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Hasil:<br>' + answers.join('<br>');
});

function showAnswer() {
    document.getElementById("result").style.display="flex";
}

function showAdmin() {
    document.getElementById("block").style.display="flex";
}
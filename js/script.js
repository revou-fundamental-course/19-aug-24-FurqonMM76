document.addEventListener("DOMContentLoaded", function() {
    let username;
    
    while (!username) {
        username = prompt("Siapakah nama Anda?", "");
    }
    
    let welcomeMessage = document.getElementById("pesan-welcome");
    welcomeMessage.textContent = `Selamat Datang ${username}, di website kami`;
});

function submitForm() {

    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("message").value;

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <h2>Hasil Pengisian Form:</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${dob}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;
}

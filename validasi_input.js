const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function(event) {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const nama = document.getElementById("nama").value.trim();
    const tanggalLahir = document.getElementById("tanggalLahir").value;
    const alamat = document.getElementById("alamat").value.trim();
    const telepon = document.getElementById("telepon").value.trim();

    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    const namaError = document.getElementById("namaError");
    const tanggalLahirError = document.getElementById("tanggalLahirError");
    const alamatError = document.getElementById("alamatError");
    const teleponError = document.getElementById("teleponError");

    usernameError.textContent = "";
    passwordError.textContent = "";
    namaError.textContent = "";
    tanggalLahirError.textContent = "";
    alamatError.textContent = "";
    teleponError.textContent = "";

    let valid = true;

    if (username === "") {

        usernameError.textContent = "Username tidak boleh kosong.";
        valid = false;

    } else if (username.length < 3) {

        usernameError.textContent = "Username minimal 3 karakter.";
        valid = false;

    }

    if (password === "") {

        passwordError.textContent = "Password tidak boleh kosong.";
        valid = false;

    } else if (password.length < 8) {

        passwordError.textContent = "Password minimal 8 karakter.";
        valid = false;

    }

    if (nama === "") {

        namaError.textContent = "Nama tidak boleh kosong.";
        valid = false;

    }

    if (tanggalLahir === "") {

        tanggalLahirError.textContent = "Tanggal lahir tidak boleh kosong.";
        valid = false;

    } else {

        const today = new Date();

        const tahun = today.getFullYear();
        const bulan = String(today.getMonth() + 1).padStart(2, "0");
        const tanggal = String(today.getDate()).padStart(2, "0");

        const tanggalHariIni = `${tahun}-${bulan}-${tanggal}`;

        if (tanggalLahir > tanggalHariIni) {

            tanggalLahirError.textContent =
                "Tanggal lahir tidak boleh melebihi tanggal hari ini.";

            valid = false;

        }

    }

    if (alamat === "") {

        alamatError.textContent = "Alamat tidak boleh kosong.";
        valid = false;

    }

    if (telepon === "") {

        teleponError.textContent = "Nomor telepon tidak boleh kosong.";
        valid = false;

    } else if (!telepon.startsWith("62")) {

        teleponError.textContent =
            "Nomor telepon harus berawalan 62.";

        valid = false;

    }

    if (!valid) {

        // Mencegah form menuju dashboard
        event.preventDefault();

    }

});
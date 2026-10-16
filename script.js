// Pencarian di Beranda: arahkan pengguna ke halaman Layanan
var go = document.getElementById("go");
var q = document.getElementById("q");
if (go) go.onclick = function () { location.href = "layanan.html"; };
if (q) q.onkeydown = function (e) { if (e.key === "Enter") location.href = "layanan.html"; };

// Formulir pengaduan: tampilkan pesan berhasil
var send = document.getElementById("send");
if (send) send.onclick = function () { document.getElementById("ok").style.display = "block"; };

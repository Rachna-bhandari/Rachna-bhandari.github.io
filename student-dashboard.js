// ================= STUDENT DASHBOARD =================

window.addEventListener("DOMContentLoaded", () => {

  const storedStudent = localStorage.getItem("student");

  if (!storedStudent) {
    alert("Session expired. Please login again.");
    window.location.href = "login.html";
    return;
  }

  const student = JSON.parse(storedStudent);

  // Fill data
  document.getElementById("studentName").innerText = student.name || "—";
  document.getElementById("studentId").innerText = student.studentId || "—";
  document.getElementById("studentClass").innerText = student.course || "—";
  document.getElementById("studentEmail").innerText = student.email || "—";

  // Book seat
  document.getElementById("bookSeatBtn").addEventListener("click", () => {
    window.location.href = "book-seat.html";
  });

});

// Logout
function logout() {
  localStorage.removeItem("student");
  window.location.href = "login.html";
}

const remove = document.querySelectorAll(".remove");

Array.from(remove).forEach(function(element) {
  element.addEventListener("click", function() {
    console.log(element);
    const pros_review = this.parentNode.querySelector(".proThing").innerText;
    const cons_review = this.parentNode.querySelector(".conThing").innerText;
    const userId = this.parentNode.querySelector("#userId").innerText;
    const schoolId = this.parentNode.querySelector("#schoolId").innerText;
    fetch("/userReview", {
      method: "delete",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        pros_review: pros_review,
        cons_review: cons_review,
        userId: userId,
        schoolId: schoolId
      })
    }).then(function(response) {
      console.log(response);
      window.location.reload();
    });
  });
});

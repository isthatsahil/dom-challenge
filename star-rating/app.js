/*
 * Creates star rating functionality
 * @param el DOM Element
 * @param count Number of stars
 * @param callback Returns selected star count to callback
 */
function Star(el, count, callback) {
  const starContainer = document.querySelector(el);
  for (let i = 0; i < count; i++) {
    let tempStarNode = createIcon();
    hover(tempStarNode, enter, leave);
    click(tempStarNode, callback);
    starContainer.appendChild(tempStarNode);
  }
}
function createIcon() {
  const i = document.createElement("i");
  i.classList.add("fa");
  i.classList.add("fa-star-o");
  return i;
}

function hover(el, enter, leave) {
  el.addEventListener("mouseenter", () => enter(el));
  el.addEventListener("mouseleave", () => leave(el));
}

function enter(el) {
  if (el.classList.contains("fa-star")) return;
  el.classList.remove("fa-star-o");
  el.classList.add("fa-star");
  const index = Array.from(el.parentElement.children).indexOf(el);
  for (let i = 0; i < index; i++) {
    Array.from(el.parentElement.children)[i].classList.remove("fa-star-o");
    Array.from(el.parentElement.children)[i].classList.add("fa-star");
  }
}

function leave(el) {
  if (el.classList.contains("fa-star-o")) return;
  el.classList.remove("fa-star");
  el.classList.add("fa-star-o");
  Array.from(el.parentElement.children).map((childNode) => {
    childNode.classList.remove("fa-star");
    childNode.classList.add("fa-star-o");
  });
}

function click(el, callback) {
  el.addEventListener("click", () =>
    callback(Array.from(el.parentElement.children).indexOf(el) + 1)
  );
}

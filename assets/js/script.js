const containers = document.querySelectorAll(".image-container");
containers.forEach((container) => {
  container.addEventListener("click", () => {
    const img = container.querySelector("img");

    const clone = img.cloneNode();
    clone.style.width = "100%";
    clone.style.height = "100%";
    clone.style.objectFit = "cover";
    const parentDiv = document.createElement("div");
    parentDiv.style.position = "fixed";
    parentDiv.style.top = "0";
    parentDiv.style.left = "0";
    parentDiv.style.width = "100vw";
    parentDiv.style.height = "100vh";
    parentDiv.style.display = "flex";
    parentDiv.style.justifyContent = "center";
    parentDiv.style.alignItems = "center";
    parentDiv.style.backdropFilter = "blur(10px)";
    parentDiv.style.zIndex = "1000";
    const closeIcon = document.createElement("span");
    closeIcon.innerHTML = "&#10005;";
    closeIcon.style.position = "absolute";
    closeIcon.style.top = "20px";
    closeIcon.style.right = "20px";
    closeIcon.style.cursor = "pointer";
    closeIcon.style.color = "#00dbff";
    closeIcon.addEventListener("click", () => {
      document.body.removeChild(parentDiv);
    });
    parentDiv.appendChild(closeIcon);
    const childDiv = document.createElement("div");
    childDiv.style.width = window.innerWidth > 895 ? "25vw" : "50vw";
    childDiv.style.height = window.innerWidth > 895 ? "90vh" : "50vh";
    childDiv.appendChild(clone);
    parentDiv.appendChild(childDiv);
    document.body.appendChild(parentDiv);
  });
});

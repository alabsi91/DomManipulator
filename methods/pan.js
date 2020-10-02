/**
 * enable pan navigation on a container.
 */
export function pan() {
  const that = this;
  const onMove = (e) => {
    this.element[0].scrollTo({ left: container.scrollLeft - e.movementX, top: container.scrollTop - e.movementY });
  };
  this.on("mousedown", (e) => {
    this.on("mousemove", onMove);
    container.style.cursor = "grabbing";
    this.css({ cursor: "grabbing" });
  });
  this.on("mouseup", (e) => {
    this.off("mousemove", onMove);
    this.css({ cursor: "grab" });
  });
  this.on("mouseleave", (e) => {
    this.off("mousemove", onMove);
    this.css({ cursor: "grab" });
  });
  // touch
  let preX, preY;
  const onTouch = (e) => {
    e.preventDefault();
    const movmentX = e.changedTouches[0].screenX - preX;
    const movmentY = e.changedTouches[0].screenY - preY;
    this.element[0].scrollTo({ left: this.element[0].scrollLeft - movmentX, top: this.element[0].scrollTop - movmentY });
    preX = e.changedTouches[0].screenX;
    preY = e.changedTouches[0].screenY;
  };
  this.on("touchstart", function (e) {
    preX = e.changedTouches[0].screenX;
    preY = e.changedTouches[0].screenY;
    that.on("touchmove", onTouch);
  });
  this.on("touchend", (e) => {
    that.off("touchmove", onTouch);
  });
}

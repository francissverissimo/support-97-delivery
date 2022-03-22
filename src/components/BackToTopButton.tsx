export function backToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

export function BackToTopButton() {
  return (
    <div onClick={backToTop}>
      <a>
        <i className="fa fa-arrow-up"></i>
      </a>
    </div>
  );
}

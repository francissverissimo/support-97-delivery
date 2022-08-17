export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function treatKeyWords(keyWords: string) {
  return keyWords
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remover acentos
    .replace(/([^\w]+|\s+)/g, " ") // remover caracteres especiais
    .split(" ")
    .filter((e) => {
      return e.length > 3;
    });
}

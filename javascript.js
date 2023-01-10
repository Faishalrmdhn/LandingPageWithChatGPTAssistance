function scrollToOptions(id) {
    // ambil elemen yang ingin dituju
    const element = document.querySelector(id);

    // scroll ke elemen tersebut dengan transisi
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
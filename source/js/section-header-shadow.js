const headers = document.querySelectorAll('.section-header');

const setHeadersShadow = () => {
  headers.forEach((header) => {
    header.setAttribute('value', `${header.textContent}`);
  });
};

export {setHeadersShadow};

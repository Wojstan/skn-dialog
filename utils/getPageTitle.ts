const getPageTitle = (route: string) => {
  switch (route) {
    case "/":
      return "Strona główna";
    case "/about":
      return "Kim jesteśmy?";
    case "/join":
      return "Dołącz do nas!";
    case "/posts":
      return "Publikacje";
  }

  return "";
};

export default getPageTitle;

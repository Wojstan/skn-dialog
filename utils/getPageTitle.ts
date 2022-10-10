const getPageTitle = (route: string) => {
  switch (route) {
    case "/":
      return "Strona główna";
    case "/kim-jestesmy":
      return "Kim jesteśmy?";
    case "/dolacz-do-nas":
      return "Dołącz do nas!";
  }

  return "";
};

export default getPageTitle;

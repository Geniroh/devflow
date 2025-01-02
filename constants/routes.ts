interface Routes {
  HOME: string;
  SIGN_IN: string;
  SIGN_UP: string;
  ASK_QUESTION: string;
  PROFILE: <T extends string | number>(id: T) => string;
  TAGS: <T extends string | number>(id: T) => string;
}

const ROUTES: Routes = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  ASK_QUESTION: "/ask-question",
  PROFILE: (id) => `/profile/${id}`,
  TAGS: (id) => `/tags/${id}`,
};

export default ROUTES;

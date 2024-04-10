import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";

import moment from "moment";
import "moment/dist/locale/pt-br";

moment.locale("pt-br");

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

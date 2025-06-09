import { Route, Switch } from "react-router-dom";

import Index from "../containers/index";
import Tree from "../containers/tree";
import Heart from "../containers/heart";
import { _route } from "./router";

function CommonRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path={_route.tree} component={Tree} />
      <Route exact path={_route.heart} component={Heart} />
    </Switch>
  );
}

export default CommonRouter;

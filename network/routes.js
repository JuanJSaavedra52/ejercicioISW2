import { router } from "../components/user/network.js";

const user = router

export const routes = (server) => {
    server.use('/user', user);
};

// export {routes}

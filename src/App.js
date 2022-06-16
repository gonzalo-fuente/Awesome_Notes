import { motion, AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";

import CircleLoader from "./components/CircleLoader/CircleLoader";
import Archived from "./pages/Archived/Archived";
import Login from "./pages/Login/Login";
import MyNotes from "./pages/MyNotes/MyNotes";
import RequireAuth from "./components/RequireAuth/RequireAuth";

/* Lazy Import */
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const pageTransition = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

function App() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <CssBaseline>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <RequireAuth>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={pageTransition}
                >
                  <MyNotes />
                </motion.div>
              </RequireAuth>
            }
          />
          <Route
            path="/archived"
            element={
              <RequireAuth>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={pageTransition}
                >
                  <Archived />
                </motion.div>
              </RequireAuth>
            }
          />
          <Route
            path="/login"
            element={
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={pageTransition}
              >
                <Login />
              </motion.div>
            }
          />
          <Route
            path="*"
            element={
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={pageTransition}
              >
                <Suspense fallback={<CircleLoader />}>
                  <NotFound />
                </Suspense>
              </motion.div>
            }
          />
        </Routes>
      </CssBaseline>
    </AnimatePresence>
  );
}

export default App;

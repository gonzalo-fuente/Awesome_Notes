import { motion, AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import CircleLoader from "./components/CircleLoader/CircleLoader";
import Archived from "./pages/Login/Archived/Archived";
import Login from "./pages/Login/Login";
import MyNotes from "./pages/MyNotes/MyNotes";

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
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            // <RequireAuth>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={pageTransition}
            >
              <MyNotes />
            </motion.div>
            // </RequireAuth>
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
          path="/archived"
          element={
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={pageTransition}
            >
              <Archived />
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
    </AnimatePresence>
  );
}

export default App;

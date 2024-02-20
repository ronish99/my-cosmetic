import "./App.css";
import AppRouter from "./components/AppRouter";
import { createContext, useContext, useState } from "react";
import "./styles.css";
import ProductPage from "./components/Callback";
import { createTodos } from "./components/ForMemo";
import TodoList from "./UseMemo";
import Uselayout from "./components/Uselayout/Uselayout";
import Portal from "./components/portalexample/Portal";
import { Greeting } from "./components/proptype/PropType";
import Uncontrolled from "./components/Uncontrolled component";
import BlogPost from "./components/post";
import Counter from "./components/counter";
import Form from "./components/redux form";
import Jpt from "./components/jpt";
// const ThemeContext = createContext(null);

// const todos = createTodos();
function App() {
  const [theme, setTheme] = useState("light");
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <AppRouter />
      <Portal />
      <Greeting name="Sara" />
      <BlogPost />
      <Counter />
      <Form />
      <Jpt />
      {/* <Uncontrolled /> */}
      {/* <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <ProductPage
        referrerId="wizard_of_oz"
        productId={123}
        theme={isDark ? "dark" : "light"}
      /> */}
    </>
  );
}

//     <div>
//       <ThemeContext.Provider value={theme}>
//         <Panel title="Welcome">
//           <AppRouter />
//         </Panel>

//         <Button
//           onClick={() => {
//             setTheme(theme === "dark" ? "light" : "dark");
//           }}
//         >
//           Toggle theme
//         </Button>
//       </ThemeContext.Provider>
//     </div>
//   );
//   function Panel({ title, children }) {
//     const theme = useContext(ThemeContext);
//     const className = "panel-" + theme;
//     return (
//       <section className={className}>
//         <h1>{title}</h1>
//         {children}
//       </section>
//     );
//   }
// }
// function Button({ children, onClick }) {
//   const theme = useContext(ThemeContext);
//   const className = "button-" + theme;
//   return (
//     <button className={className} onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// const [tab, setTab] = useState('all');
// const [isDark, setIsDark] = useState(false);
// return (
//   <>
//     <button onClick={() => setTab('all')}>
//       All
//     </button>
//     <button onClick={() => setTab('active')}>
//       Active
//     </button>
//     <button onClick={() => setTab('completed')}>
//       Completed
//     </button>
//     <br />
//     <label>
//       <input
//         type="checkbox"
//         checked={isDark}
//         onChange={e => setIsDark(e.target.checked)}
//       />
//       Dark mode
//     </label>
//     <hr />
//     <TodoList
//       todos={todos}
//       tab={tab}
//       theme={isDark ? 'dark' : 'light'}
//     />
//   </>
// );

export default App;

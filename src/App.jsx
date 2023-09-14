import { NavBar, Welcome, Footer, Transactions } from "./components"

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <NavBar />
        <Welcome />
      </div>
      <Transactions />
      <Footer />
    </div>
  )
}

export default App

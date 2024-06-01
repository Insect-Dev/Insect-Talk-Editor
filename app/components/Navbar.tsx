export default function Navbar() {
  return (
    <nav className="sticky top-0 flex h-12 w-screen place-items-center justify-between border-b-2 border-primary-800 bg-gradient-to-r from-primary-400/50 to-transparent px-3 backdrop-blur-sm">
      <div>
        <h1 className="text-lg font-extrabold">Insect Talk</h1>
      </div>
      <div className="flex gap-3">
        {/* <ul className="flex flex-row place-items-center gap-3">
          <li>
            <a href="/">Export</a>
          </li>
          <li>
            <a href="/">Import</a>
          </li>
          <li>
            <a href="/">Reset</a>
          </li>
        </ul> */}
      </div>
    </nav>
  )
}

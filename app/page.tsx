import Navbar from './components/Navbar'
import Editor from './editor/Editor'

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col">
      <Navbar />
      <div className="relative min-h-[calc(100dvh-3rem)] pt-12">
        <Editor />
      </div>
    </main>
  )
}

import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { Layout } from "@/components/layout"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/sonner"
import { Routes, Route } from 'react-router-dom'
import { UploadVuln } from "@/pages/upload-vuln"
import { Home } from "@/pages/home"
import { Hackerone } from "@/pages/integrations/hackerone"
import { Jira } from "@/pages/integrations/jira"
import { Slack } from "@/pages/integrations/slack"


function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Toaster />
      <Layout>
          <SidebarTrigger />
          <div className="justify-center w-full">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/upload" element={<UploadVuln/>} />
              <Route path="/integrations/slack" element={<Slack/>} />
              <Route path="/integrations/jira" element={<Jira/>} />
              <Route path="/integrations/hackerone" element={<Hackerone/>} />
            </Routes>
          </div>
      </Layout>
    </ThemeProvider>
  )
}

export default App

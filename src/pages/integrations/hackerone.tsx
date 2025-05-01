import { Input } from "@/components/ui/input"
import { HackeroneCombobox } from "@/components/hackerone-combo"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"


export function Hackerone() {
  return (
    <div className="text-center space-y-8 mx-[10%] text-xl">
        <h1>Configure Hackerone Integration</h1>
        <p>Integrate with Hackerone to automatically provision your vulnerabilities database with new Hackerone reports.</p>
        <Input type="password" placeholder="Hackerone API Key" />
        <Input type="password" placeholder="Hackerone Secret Key" />
        <p>Import vulnerabilities when...</p>
        <HackeroneCombobox /><br/>
        <Button className="text-white" onClick={() => {
            toast("Configuration Saved!")
        }} >Save</Button>
    </div>
  )
}

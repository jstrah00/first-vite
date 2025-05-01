import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"


export function Jira() {
  return (
    <div className="text-center space-y-8 mx-[10%] text-xl">
        <h1>Configure Jira Integration</h1>
        <p>Integrate with Jira to keep track of each vulnerability</p>
        <Input type="password" placeholder="Jira API Key" />
        <Input type="password" placeholder="Jira Secret Key" />
        <Input type="text" placeholder="Jira Project ID"/>
        <Button className="text-white" onClick={() => {
            toast("Configuration Saved!")
        }} >Save</Button>
    </div>
  )
}

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"


export function Slack() {
  return (
    <div className="text-center space-y-8 mx-[10%] text-xl">
        <h1>Configure Slack Integration</h1>
        <p>Integrate with Slack for custom notifications and reminders!</p>
        <Input type="password" placeholder="Slack API Key" />
        <Input type="password" placeholder="Slack Secret Key" />
        <Input type="text" placeholder="Notifications channel ID"/>
        <Button className="text-white" onClick={() => {
            toast("Configuration Saved!")
        }} >Save</Button>
    </div>
  )
}

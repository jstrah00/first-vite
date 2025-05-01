import { Input } from "@/components/ui/input"
import { SeverityCombobox } from "@/components/severity-combo"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { DatePicker } from "@/components/date-picker"


export function UploadVuln() {
  return (
    <div className="text-center space-y-12 mx-[10%] text-xl">
        <h1>Upload Vulnerability</h1>
        <Input type="text" placeholder="Summary" />
        <SeverityCombobox/>
        <Textarea placeholder="Vulnerability description, steps to reproduce, impact, etc..."/>
        <DatePicker/>
        <Button className="text-white" onClick={() => {
        }} >Generate automatically based on Severity</Button>
        <br/>
        <Button className="text-white" onClick={() => {
            toast("Vulnerability Uploaded!")
        }} >Upload</Button>
    </div>
  )
}

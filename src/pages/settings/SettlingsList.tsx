
import { Separator } from "@/components/ui/separator";


function SettingsList() {
    return (
        <div>
            <h1>Settings List</h1>

            <div>

            <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Summarize AI Slop</h4>
        <p className="text-muted-foreground text-sm">
          This will summarize the AI slop post
        </p>
      </div>
      <Separator className="my-4" />

      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Comment AI Slop</h4>
        <p className="text-muted-foreground text-sm">
          This will comment on the AI slop post
        </p>
      </div>

            </div>
        </div>
    );
}

export default SettingsList;

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Badge } from "./Badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Switch } from "./ui/switch";

const diagnosis = [
  "F43.22 - Adjustment disorder with anxiety",
  "F42.54 - Anxiety",
  "F21.276 - Disorder",
];

export function NewClient() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex gap-1 w-full">
          <span>+</span>
          <span className="max-sm:hidden">Add new client</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-dialog-content bg-white rounded-lg">
        <DialogHeader>
          <DialogTitle className="grid place-items-center">
            Add new client
          </DialogTitle>
          <DialogDescription className="grid place-items-center text-center">
            This client information is essential for generating detailed client
            documents
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-8 py-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="type" className="text-right flex gap-1">
              <span>Client type</span>
              <span className="text-danger-500">*</span>
            </Label>
            <RadioGroup defaultValue="individual" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="individual" id="individual" />
                <Label htmlFor="individual">
                  <Badge type="individual" />
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value="couple" id="couple" />
                <Label htmlFor="couple">
                  <Badge type="couple" />
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="">
              <span>Name</span>
              <span className="text-danger-500">*</span>
            </Label>
            <Input
              id="name"
              defaultValue=""
              placeholder="Guilherme Paixao"
              className="ring-1 ring-gray-100 rounded-lg border-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="">
              <span>Pronouns</span>
              <span className="text-danger-500">*</span>
            </Label>
            <RadioGroup
              defaultValue="He/Him"
              className="flex space-between items-center  w-full"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="He/Him" id="He" />
                <Label htmlFor="He">
                  <span>He/Him</span>
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value="She/Her" id="She" />
                <Label htmlFor="She">
                  <span>She/Her</span>
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value="They/Them" id="They" />
                <Label htmlFor="They">
                  <span>They/Them</span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="name" className="">
              <span>year of birth</span>
              <span className="text-danger-500">*</span>
            </Label>
            <Input
              id="yob"
              defaultValue=""
              placeholder="1997"
              className="w-ful border-0 ring-1 ring-gray-100 rounded-lg"
            />
          </div>

          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="name" className="">
              <span>Diagnosis</span>
              <span className="text-danger-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full border-0 ring-1 ring-gray-100 rounded-lg">
                <SelectValue placeholder={diagnosis[0]} />
              </SelectTrigger>
              <SelectContent>
                {diagnosis.map((diagnosis) => (
                  <SelectItem key={diagnosis} value={diagnosis}>
                    {diagnosis}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-between items-center w-full">
          <span className="text-label-regular">High risk client</span>
          <Switch id="high-risk" className="bg-gray-500 text-white" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className="">
            <span>Extra notes</span>
          </Label>
          <Input
            id="extra-notes"
            defaultValue=""
            placeholder="Extra information about your client"
            className="w-full border-0 ring-1 ring-gray-100 rounded-lg"
          />
        </div>
        <DialogFooter className="flex justify-end">
          <Button type="submit" variant="default">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

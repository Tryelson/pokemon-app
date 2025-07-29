'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface OrderByStrengthSelectProps {
  value: 'asc' | 'desc';
  onChange: (value: 'asc' | 'desc') => void;
}

export default function OrderByStrengthSelect({ value, onChange }: OrderByStrengthSelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <form>
        <label className="text-sm font-medium">
          Ordenar por força:
        </label>

        <Select value={value} onValueChange={(v) => onChange(v as 'asc' | 'desc')}>
          <SelectTrigger
            className="w-[220px] border border-border bg-muted text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <SelectValue placeholder="Ordenar por força" />
          </SelectTrigger>

          <SelectContent
            className="bg-background text-white border border-border rounded-md shadow-lg"
            sideOffset={4}
          >
            <div className="space-y-1">
              <SelectItem
                value="desc"
                className="cursor-pointer px-3 py-2 rounded-md hover:bg-accent focus:bg-accent outline-none data-[state=checked]:bg-accent data-[state=checked]:font-bold"
              >
                Maior força
              </SelectItem>
              <SelectItem
                value="asc"
                className="cursor-pointer px-3 py-2 rounded-md hover:bg-accent focus:bg-accent outline-none data-[state=checked]:bg-accent data-[state=checked]:font-bold"
              >
                Menor força
              </SelectItem>
            </div>
          </SelectContent>
        </Select>
      </form>
    </div>
  );
}

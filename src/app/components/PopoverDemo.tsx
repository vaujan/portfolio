import * as React from "react";
import { Popover } from "radix-ui";
export default function PopoverDemo() {
	return (
		<Popover.Root>
			<Popover.Trigger className="bg-slate-500 rounded-lg border border-slate-600 text-white px-4 py-2 hover:bg-slate-600 transition-all ease-out">
				More info
			</Popover.Trigger>
			<Popover.Portal>
				<Popover.Content>
					Some more info…
					<Popover.Arrow />
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
	);
}

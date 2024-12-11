import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
      <Link href="/dashboard/product">
        <Button>Home</Button>
      </Link>
    </div>
  );
}

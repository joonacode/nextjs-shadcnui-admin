import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
      <Link href="/dashboard/product/slug">
        <Button>detail product</Button>
      </Link>
    </div>
  );
}

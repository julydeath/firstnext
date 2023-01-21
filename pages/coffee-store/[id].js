import Link from "next/link";
import { useRouter } from "next/router";

const coffee = () => {
  const router = useRouter();
  return (
    <div>
      Coffee store {router.query.id}
      <Link href="/" scroll="true">
        Back To Home
      </Link>
    </div>
  );
};

export default coffee;

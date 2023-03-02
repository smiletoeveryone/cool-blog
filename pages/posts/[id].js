import { useRouter } from "next/router";

export default function PostDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <h1>Post Detail - {id}</h1>
  );
}
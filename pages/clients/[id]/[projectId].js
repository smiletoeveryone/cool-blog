import { useRouter } from "next/router";

export default function ProjctDetailPage() {
  const router = useRouter();
  console.log(router.query);

  const clientId = router.query.id;
  const projectId = router.query.projectId;

  return (
    <h1>Project {projectId} of {clientId}</h1>
  );
}
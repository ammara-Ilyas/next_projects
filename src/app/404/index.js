// import { useRouter } from "next/router"
import { useRouter } from "next/navigation";
export default function Index() {
  const route = useRouter();
  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>Page is not found</h1>
      <button onClick={() => route.push("/")}>Back to home</button>
    </div>
  );
}

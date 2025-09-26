import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="title py-10 mx-auto text-center">
        <h1>This is a Bilva System for Testing</h1>
        <p>Here I am going to Test and Develop the Reusable Components.</p>
      </section>

      <section className="components container mx-auto">
        <Link href="/button" className="bg-base-200 text-base-700 p-4 rounded-lg">Button Component</Link>
      </section>
    </>
  );
}

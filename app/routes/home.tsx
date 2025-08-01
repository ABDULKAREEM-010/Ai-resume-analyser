import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "constants/index";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg.main.svg')] bg-cover">
    <Navbar/>
    <section className="main -section">
      <div className="page-heading py-16">
        <h1>Track Your Appication & Resume Rating</h1>
        <h2>Review your submission and check AI-powered feedback</h2>
      </div>
    {/* Comming from constant */}
    {resumes.length>0 && (
      <div className="resumes-section">
        {resumes.map((resume)=>(
          <ResumeCard key={resume.id} resume={resume}/>
    ))}
      </div>
    )}
    </section>
  </main>
}

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface Course {
  sno: number | null;
  programName: string;
  duration: string;
  discipline: string;
  eligibility: string;
  level?: "UG" | "PG" | "PhD" | "PostDoc" | "Diploma" | "Certificate";
  popular?: boolean;
  highDemand?: boolean;
}

interface Faculty {
  name: string;
  courses: Course[];
}

const FACULTIES: Faculty[] = [
  {
    name: "Commerce & Management",
    courses: [
      {
        sno: 1,
        programName: "Bachelor of Commerce (B.Com)",
        duration: "3 Years (6 Semesters)",
        discipline: "Commerce",
        eligibility: "10+2 from a recognized board",
        level: "UG",
      },
      {
        sno: 2,
        programName: "B.Com (Honors / Honors with Research)",
        duration: "4 Years (8 Semesters)",
        discipline: "Commerce",
        eligibility: "10+2 from a recognized board",
        level: "UG",
      },
      {
        sno: 3,
        programName: "Master of Commerce (M.Com)",
        duration: "2 Years (4 Semesters)",
        discipline: "Commerce",
        eligibility:
          "B.Com/BBA or Graduation with min. 50% in relevant subjects",
        level: "PG",
      },
      {
        sno: 4,
        programName: "Master of Commerce (M.Com) — Lateral Entry",
        duration: "1 Year (2 Semesters)",
        discipline: "Commerce",
        eligibility: "NHEQF Level 6 Certification in Commerce or equivalent",
        level: "PG",
      },
      {
        sno: 5,
        programName: "Master of Business Administration (MBA)",
        duration: "2 Years (4 Semesters)",
        discipline:
          "Marketing, Finance, HR, International Business, Digital Marketing, Supply Chain, E-Commerce, Retail, Hospitality, Tourism, Healthcare, Operations, IT, Sports, Aviation, Agri-Business, Pharmaceutical, Project Mgmt, and 30+ more specialisations",
        eligibility: "Bachelor Degree",
        level: "PG",
        popular: true,
      },
      {
        sno: 6,
        programName: "MBA — Lateral Entry",
        duration: "1 Year (2 Semesters)",
        discipline: "Marketing, Finance, Human Resource Management",
        eligibility: "NHEQF Level 6 / PGDBM or equivalent",
        level: "PG",
      },
      {
        sno: 7,
        programName: "Executive MBA (E-MBA)",
        duration: "1 Year (2 Semesters)",
        discipline:
          "Marketing, Finance, HR, Digital Marketing, Supply Chain, Healthcare, IT, Aviation, and 25+ more specialisations",
        eligibility: "Graduation with 2 Years Work Experience",
        level: "PG",
      },
      {
        sno: 8,
        programName: "Bachelor of Business Administration (BBA)",
        duration: "3 Years (6 Semesters)",
        discipline: "General",
        eligibility: "XII from recognized board",
        level: "UG",
        popular: true,
      },
      {
        sno: 9,
        programName: "BBA (Honors / Honors with Research)",
        duration: "4 Years (8 Semesters)",
        discipline: "General",
        eligibility: "XII from recognized board",
        level: "UG",
      },
      {
        sno: 10,
        programName: "BBA — with Specialisation",
        duration: "3 Years (6 Semesters)",
        discipline:
          "Marketing, Finance, HR, Digital Marketing, Supply Chain, Healthcare, IT, Aviation, and 25+ more specialisations",
        eligibility: "XII from recognized board",
        level: "UG",
      },
      {
        sno: 11,
        programName: "PG Diploma in Management",
        duration: "1 Year (2 Semesters)",
        discipline:
          "Marketing, Finance, HR, Digital Marketing, Supply Chain, IT, and 25+ more specialisations",
        eligibility: "Bachelor Degree with min. 45% marks",
        level: "PG",
      },
      {
        sno: 12,
        programName: "Diploma in Management",
        duration: "2 Years (4 Semesters)",
        discipline:
          "Marketing, Finance, HR, Digital Marketing, Supply Chain, IT, and 25+ more specialisations",
        eligibility: "XII from recognized board",
        level: "Diploma",
      },
    ],
  },
  {
    name: "Humanities & Social Science",
    courses: [
      {
        sno: 1,
        programName: "Bachelor of Arts (BA)",
        duration: "3 Years (6 Semesters)",
        discipline: "General",
        eligibility: "10+2 from a recognized board",
        level: "UG",
      },
      {
        sno: 2,
        programName: "BA (Honors / Honors with Research)",
        duration: "4 Years (8 Semesters)",
        discipline:
          "English, Hindi, Sanskrit, Sociology, Music, History, Political Science, Philosophy, Psychology, Economics, Geography, Visual Arts, Fine Arts, Home Science",
        eligibility: "10+2 from a recognized board",
        level: "UG",
      },
      {
        sno: 3,
        programName: "BA — Additional",
        duration: "1 Year (2 Semesters)",
        discipline: "Additional",
        eligibility: "Graduation in relevant discipline with min. 45% marks",
        level: "UG",
      },
      {
        sno: 4,
        programName: "MA (Master of Arts)",
        duration: "2 Years (4 Semesters)",
        discipline:
          "English, Hindi, Sanskrit, Sociology, History, Political Science, Philosophy, Psychology, Economics, Geography, Visual Arts, Dance, Music, Theatre, Performing Arts, Fine Arts, Astrology, Home Science, Mathematics",
        eligibility: "Graduation with relevant or Allied Subject",
        level: "PG",
      },
      {
        sno: 5,
        programName: "MA — Lateral Entry",
        duration: "1 Year (2 Semesters)",
        discipline:
          "English, Hindi, Sanskrit, Sociology, History, Political Science, Philosophy, Psychology, Economics, Geography, Visual Arts, Fine Arts, Home Science",
        eligibility: "NHEQF Level 6 in relevant stream or equivalent",
        level: "PG",
      },
      {
        sno: 6,
        programName: "BSW (Bachelor of Social Work)",
        duration: "3 Years (6 Semesters)",
        discipline: "Social Work",
        eligibility: "10+2 from a recognized board",
        level: "UG",
      },
      {
        sno: 7,
        programName: "BSW (Honors / Honors with Research)",
        duration: "4 Years (8 Semesters)",
        discipline: "Social Work",
        eligibility: "10+2 from a recognized board",
        level: "UG",
      },
      {
        sno: 8,
        programName: "MSW (Master of Social Work)",
        duration: "2 Years (4 Semesters)",
        discipline: "Social Work",
        eligibility: "Graduation with min. 45% marks",
        level: "PG",
      },
      {
        sno: 9,
        programName: "MSW — Lateral Entry",
        duration: "1 Year (2 Semesters)",
        discipline: "Social Work",
        eligibility: "NHEQF Level 6 in relevant stream or equivalent",
        level: "PG",
      },
      {
        sno: 10,
        programName: "PG Diploma in Psychology & Social Work",
        duration: "1 Year (2 Semesters)",
        discipline: "Psychology and Counselling, Social Work",
        eligibility: "Graduation from recognised university",
        level: "PG",
      },
      {
        sno: 11,
        programName: "Diploma in Social & Human Sciences",
        duration: "1 Year (2 Semesters)",
        discipline: "Social Work, Vastu Shastra, Jyothishyam, Human Studies",
        eligibility: "XII with 50% Marks",
        level: "Diploma",
      },
      {
        sno: 12,
        programName: "Certificate in Social Work & Human Studies",
        duration: "1 Year (2 Semesters)",
        discipline: "Social Work, Human Studies",
        eligibility: "X from recognized board",
        level: "Certificate",
      },
    ],
  },
  {
    name: "Science",
    courses: [
      {
        sno: 1,
        programName: "B.Sc.",
        duration: "3 Years (6 Semesters)",
        discipline:
          "Physics, Chemistry, Mathematics (PCM); Zoology, Botany, Chemistry (ZBC)",
        eligibility: "12th with Science from recognized board",
        level: "UG",
      },
      {
        sno: 2,
        programName: "B.Sc. (Honours / Honours with Research)",
        duration: "4 Years (8 Semesters)",
        discipline:
          "Statistics, Electronics, Fire Safety, Automobile, Physics, Mathematics, Environmental Science, Food & Nutrition, Chemistry, Microbiology, Biochemistry, Geology, Botany, Zoology, Bio-Informatics",
        eligibility: "12th with Science from recognized board",
        level: "UG",
      },
      {
        sno: 3,
        programName: "B.Sc. (Honours) — Applied Sciences",
        duration: "3 Years (6 Semesters)",
        discipline:
          "Animation & Multimedia, Jewellery Designing, Textile Designing, Interior Designing, Fashion Technology, Hotel Management, Fire and Safety Management",
        eligibility: "12th with Science from recognized board",
        level: "UG",
      },
      {
        sno: 4,
        programName: "M.Sc.",
        duration: "2 Years (4 Semesters)",
        discipline:
          "Physics, Chemistry, Mathematics, Zoology, Botany, Microbiology, Environmental Science, Yoga, Computer Science, IT, Home Science, Food and Nutrition, Biotechnology, Biochemistry, Statistics",
        eligibility: "Graduation in relevant stream",
        level: "PG",
        highDemand: true,
      },
      {
        sno: 5,
        programName: "M.Sc. — Lateral Entry",
        duration: "1 Year (2 Semesters)",
        discipline:
          "Physics, Chemistry, Mathematics, Zoology, Botany, Microbiology, Environmental Science, Computer Science, IT, Biotechnology, Statistics",
        eligibility: "NHEQF Level 6 in relevant stream or equivalent",
        level: "PG",
      },
      {
        sno: 6,
        programName: "PG Diploma in Applied Sciences",
        duration: "1 Year (2 Semesters)",
        discipline:
          "Dietetics & Applied Nutrition, Food Processing and Preservation, Industry Safety and Fire",
        eligibility: "Graduation with min. 45% marks",
        level: "PG",
      },
      {
        sno: 7,
        programName: "Diploma in Applied Sciences",
        duration: "1 Year (2 Semesters)",
        discipline:
          "Dietetics & Applied Nutrition, Food Processing and Preservation, Industry Safety and Fire",
        eligibility: "XII from recognized board",
        level: "Diploma",
      },
    ],
  },
  {
    name: "Library & Information Science",
    courses: [
      {
        sno: 1,
        programName: "B.LIS. (Bachelor of Library & Information Science)",
        duration: "1 Year (2 Semesters)",
        discipline: "Library and Information Science",
        eligibility: "Graduation",
        level: "UG",
      },
      {
        sno: 2,
        programName: "M.LIS. (Master of Library & Information Science)",
        duration: "1 Year (2 Semesters)",
        discipline: "Library and Information Science",
        eligibility: "B.LIB. / B.LIS.",
        level: "PG",
      },
      {
        sno: 3,
        programName: "D.LIS. (Diploma in Library & Information Science)",
        duration: "1 Year (2 Semesters)",
        discipline: "Library and Information Science",
        eligibility: "12th from recognized board",
        level: "Diploma",
      },
    ],
  },
  {
    name: "Education & Sports",
    courses: [
      {
        sno: 1,
        programName: "BA (Honours / Honours with Research) in Education",
        duration: "4 Years (8 Semesters)",
        discipline: "Education",
        eligibility: "10+2 from a recognized board",
        level: "UG",
      },
      {
        sno: 2,
        programName: "MA in Education",
        duration: "2 Years (4 Semesters)",
        discipline: "Education",
        eligibility: "Graduation with relevant or Allied Subject",
        level: "PG",
      },
      {
        sno: 3,
        programName: "MA in Education — Lateral Entry",
        duration: "1 Year (2 Semesters)",
        discipline: "Education",
        eligibility: "NHEQF Level 6 in Education or equivalent",
        level: "PG",
      },
      {
        sno: 4,
        programName: "B.P.E.S. (Physical Education & Sports)",
        duration: "3 Years (6 Semesters)",
        discipline: "Physical Education and Sports",
        eligibility: "10+2 from a recognized board",
        level: "UG",
      },
      {
        sno: 5,
        programName: "B.P.E.S. (Honours / Honours with Research)",
        duration: "4 Years (8 Semesters)",
        discipline: "Physical Education and Sports",
        eligibility: "10+2 from a recognized board",
        level: "UG",
      },
      {
        sno: 6,
        programName: "M.P.E.S. (Master of Physical Education & Sports)",
        duration: "2 Years (4 Semesters)",
        discipline: "Physical Education and Sports",
        eligibility: "B.PES., B.PED. or Graduation in Sports",
        level: "PG",
      },
      {
        sno: 7,
        programName: "M.P.E.S. — Lateral Entry",
        duration: "1 Year (2 Semesters)",
        discipline: "Physical Education and Sports",
        eligibility: "NHEQF Level 6 in Physical Education or equivalent",
        level: "PG",
      },
      {
        sno: 8,
        programName:
          "PG Diploma in Guidance, Counselling & Early Childhood Care",
        duration: "1 Year (2 Semesters)",
        discipline: "Guidance & Counselling, Early Childhood Care & Education",
        eligibility: "Graduation with min. 45% marks",
        level: "PG",
      },
    ],
  },
  {
    name: "Journalism & Mass Communication",
    courses: [
      {
        sno: 1,
        programName: "BA in Journalism & Mass Communication",
        duration: "3 Years (6 Semesters)",
        discipline: "Journalism and Mass Communication",
        eligibility: "10+2 from a recognized board",
        level: "UG",
      },
      {
        sno: 2,
        programName: "BA (Honours / Honours with Research) in JMC",
        duration: "4 Years (8 Semesters)",
        discipline: "Journalism and Mass Communication",
        eligibility: "10+2 from a recognized board",
        level: "UG",
      },
      {
        sno: 3,
        programName: "MA in Journalism & Mass Communication",
        duration: "2 Years (4 Semesters)",
        discipline: "Journalism and Mass Communication",
        eligibility: "Graduation",
        level: "PG",
      },
      {
        sno: 4,
        programName: "MA in JMC — Lateral Entry",
        duration: "1 Year (2 Semesters)",
        discipline: "Journalism and Mass Communication",
        eligibility: "NHEQF Level 6 in Journalism or equivalent",
        level: "PG",
      },
      {
        sno: 5,
        programName: "PG Diploma in Journalism & Mass Communication",
        duration: "1 Year (2 Semesters)",
        discipline: "Journalism and Mass Communication",
        eligibility: "Graduation",
        level: "PG",
      },
      {
        sno: 6,
        programName: "Diploma in Journalism & Mass Communication",
        duration: "1 Year (2 Semesters)",
        discipline: "Journalism and Mass Communication",
        eligibility: "10+2 from a recognized board",
        level: "Diploma",
      },
    ],
  },
  {
    name: "Engineering & Technology",
    courses: [
      {
        sno: 1,
        programName: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years (6 Semesters)",
        discipline: "General",
        eligibility: "12th from recognized board",
        level: "UG",
      },
      {
        sno: 2,
        programName: "BCA (Honours / Honours with Research)",
        duration: "4 Years (8 Semesters)",
        discipline: "General",
        eligibility: "12th with Maths or Equivalent",
        level: "UG",
      },
      {
        sno: 3,
        programName: "MCA (Master of Computer Applications)",
        duration: "2 Years (4 Semesters)",
        discipline: "General",
        eligibility: "Graduation in relevant stream",
        level: "PG",
        highDemand: true,
      },
      {
        sno: 4,
        programName: "MCA — Lateral Entry",
        duration: "1 Year (2 Semesters)",
        discipline: "General",
        eligibility: "NHEQF Level 6 in Computer Science or equivalent",
        level: "PG",
      },
      {
        sno: 5,
        programName: "B.Sc. in Computer / IT / Biotechnology",
        duration: "3 Years (6 Semesters)",
        discipline:
          "Computer Engineering, IT, Biotechnology, Bio-Chemistry, Computer Application",
        eligibility: "12th with min. 50% marks",
        level: "UG",
      },
      {
        sno: 6,
        programName: "M.Sc. in IT / Biotechnology / Bio-Informatics",
        duration: "2 Years (4 Semesters)",
        discipline:
          "Information Technology, Biotechnology, Bio-Informatics, Bio-Chemistry, Computer Application",
        eligibility: "B.Tech / B.Sc. (IT, CS) / PGDCA",
        level: "PG",
      },
      {
        sno: 7,
        programName: "DCA (Diploma in Computer Applications)",
        duration: "1 Year (2 Semesters)",
        discipline: "General",
        eligibility: "12th with Maths or Equivalent",
        level: "Diploma",
      },
      {
        sno: 8,
        programName: "PGDCA (PG Diploma in Computer Applications)",
        duration: "1 Year (2 Semesters)",
        discipline: "General",
        eligibility: "Graduation with 50% marks",
        level: "PG",
      },
      {
        sno: 9,
        programName: "B.Tech",
        duration: "4 Years (8 Semesters)",
        discipline:
          "CSE, AI & Data Science, Cybersecurity, Mechanical, Civil, Electrical, ECE, Automobile, Aerospace, Biotechnology, Blockchain, Cloud Computing, IoT, Machine Learning, Robotics, Software Engineering, and 80+ more specialisations",
        eligibility: "12th with Science or Equivalent",
        level: "UG",
      },
      {
        sno: 10,
        programName: "B.Tech — Lateral Entry",
        duration: "3 Years (6 Semesters)",
        discipline:
          "CSE, AI, Cybersecurity, Mechanical, Civil, ECE, Automobile, Aerospace, Blockchain, Cloud, IoT, Robotics, and 80+ more specialisations",
        eligibility: "Polytechnic Diploma (3 years after Xth)",
        level: "UG",
      },
      {
        sno: 11,
        programName: "M.Tech",
        duration: "2 Years (4 Semesters)",
        discipline:
          "CSE, AI, Machine Learning, Data Science, Cybersecurity, Cloud, Big Data, VLSI, Signal Processing, Power Systems, Renewable Energy, Robotics, Mechatronics, Thermal, Civil, Structural, Biomedical, Nanotechnology, IoT, Quantum Computing, and 60+ more specialisations",
        eligibility: "B.Tech in relevant stream",
        level: "PG",
      },
      {
        sno: 12,
        programName: "Diploma in Engineering",
        duration: "3 Years (6 Semesters)",
        discipline:
          "Mechanical, CSE, Electrical, Civil, Chemical, ECE, Biotechnology, IT, Environmental, Automobile, Biomedical, Mining, Textile, Structural, Metallurgical, Fire Safety, Industrial, Power Engineering",
        eligibility: "X from recognized board",
        level: "Diploma",
      },
      {
        sno: 13,
        programName: "Diploma in Engineering — Lateral Entry",
        duration: "2 Years (4 Semesters)",
        discipline:
          "Mechanical, CSE, Electrical, Civil, Chemical, ECE, Biotechnology, IT, Automobile, Biomedical, Mining, Textile, Structural, Metallurgical, Fire Safety, Industrial, Power Engineering",
        eligibility: "XII with PCM or Equivalent",
        level: "Diploma",
      },
    ],
  },
  {
    name: "Agriculture Science",
    courses: [
      {
        sno: 1,
        programName: "B.Sc. Agriculture (Honours)",
        duration: "4 Years (8 Semesters)",
        discipline: "Agriculture",
        eligibility: "10+2 with Science from a recognized board",
        level: "UG",
      },
      {
        sno: 2,
        programName: "M.Sc. Agriculture (Agronomy)",
        duration: "2 Years (4 Semesters)",
        discipline: "Agriculture (Agronomy)",
        eligibility: "B.Sc. Agriculture or Equivalent",
        level: "PG",
      },
      {
        sno: 3,
        programName: "Diploma in Agriculture",
        duration: "2 Years (4 Semesters)",
        discipline: "Agriculture",
        eligibility: "10+2 with Science from a recognized board",
        level: "Diploma",
      },
    ],
  },
  {
    name: "Yoga Science",
    courses: [
      {
        sno: 1,
        programName: "Diploma in Yoga",
        duration: "1 Year (2 Semesters)",
        discipline: "Yoga",
        eligibility: "XII from recognized board",
        level: "Diploma",
      },
      {
        sno: 2,
        programName: "BA / B.Sc. in Yoga",
        duration: "3 Years (6 Semesters)",
        discipline: "Yoga",
        eligibility: "XII from recognized board",
        level: "UG",
      },
      {
        sno: 3,
        programName: "BNYS (Bachelor of Naturopathy & Yogic Sciences)",
        duration: "4.5 Years",
        discipline: "General",
        eligibility: "XII with PCB from recognized board",
        level: "UG",
      },
      {
        sno: 4,
        programName: "BNYS — Lateral Entry",
        duration: "3 Years (6 Semesters)",
        discipline: "General",
        eligibility: "DNYS",
        level: "UG",
      },
      {
        sno: 5,
        programName: "DNYS (Diploma of Naturopathy & Yogic Sciences)",
        duration: "2 Years (4 Semesters)",
        discipline: "General",
        eligibility: "XII with Biology",
        level: "Diploma",
      },
      {
        sno: 6,
        programName: "MA / M.Sc. in Yoga",
        duration: "2 Years (4 Semesters)",
        discipline: "Yoga",
        eligibility: "Graduation in any discipline with min. 45%",
        level: "PG",
      },
      {
        sno: 7,
        programName: "PG Diploma in Yoga",
        duration: "1 Year (2 Semesters)",
        discipline: "Yoga",
        eligibility: "Graduation with min. 45% marks",
        level: "PG",
      },
    ],
  },
  {
    name: "Fashion & Animation",
    courses: [
      {
        sno: 1,
        programName: "Diploma in Animation / Design / Fashion",
        duration: "1 Year (2 Semesters)",
        discipline:
          "Animation, Graphic & Web Design, Video Editing & VFX, 3D Animation, Beauty Care, Textile Design, Fashion & Apparel Design",
        eligibility: "XII from recognized board",
        level: "Diploma",
      },
      {
        sno: 2,
        programName: "B.Sc. in Fashion & Animation",
        duration: "3 Years (6 Semesters)",
        discipline:
          "Animation, Graphic & Web Design, VFX, 3D Animation, Beauty Care, Textile Design, Fashion & Apparel Design",
        eligibility: "XII from recognized board",
        level: "UG",
      },
      {
        sno: 3,
        programName: "BA in Animation / Fashion Design",
        duration: "3 Years (6 Semesters)",
        discipline:
          "Animation & Multimedia, Fashion Design, Beauty Care, Textile Design, Fashion & Apparel Design, Fashion Management",
        eligibility: "XII with min. 50% marks",
        level: "UG",
      },
      {
        sno: 4,
        programName: "BFA (Bachelor of Fine Arts)",
        duration: "4 Years (8 Semesters)",
        discipline: "Animation, Graphics, Web Design",
        eligibility: "XII from recognized board",
        level: "UG",
      },
      {
        sno: 5,
        programName: "MFA (Master of Fine Arts)",
        duration: "2 Years (4 Semesters)",
        discipline: "Fine Arts",
        eligibility: "BFA",
        level: "PG",
      },
      {
        sno: 6,
        programName: "MA in Fashion & Textile",
        duration: "2 Years (4 Semesters)",
        discipline:
          "Fashion Accessory Design, Textile Design, Fashion Industry, Fashion Portfolio Development",
        eligibility: "Graduation with min. 45% marks",
        level: "PG",
      },
      {
        sno: 7,
        programName: "M.Sc. in Animation & Fashion",
        duration: "2 Years (4 Semesters)",
        discipline:
          "Animation, Graphic & Web Design, VFX, 3D Animation, Beauty Care, Textile Design, Dramatics, Cinematics",
        eligibility: "Graduation in relevant stream",
        level: "PG",
      },
      {
        sno: 8,
        programName: "B.Des. (Bachelor of Design)",
        duration: "4 Years (8 Semesters)",
        discipline: "Fashion Designing",
        eligibility: "10+2 with Science from a recognized board",
        level: "UG",
      },
      {
        sno: 9,
        programName: "M.Des. (Master of Design)",
        duration: "2 Years (4 Semesters)",
        discipline: "Fashion Designing",
        eligibility: "Graduation in relevant stream",
        level: "PG",
      },
      {
        sno: 10,
        programName: "PG Diploma in Animation / Fashion",
        duration: "1 Year (2 Semesters)",
        discipline:
          "Animation, Graphic & Web Design, VFX, 3D Animation, Beauty Care, Textile Design, Dramatics, Cinematics",
        eligibility: "Graduation in relevant stream",
        level: "PG",
      },
    ],
  },
  {
    name: "Law",
    courses: [
      {
        sno: 1,
        programName: "LL.B. (Bachelor of Law)",
        duration: "3 Years (6 Semesters)",
        discipline: "General",
        eligibility: "Graduation with min. 45% marks",
        level: "UG",
      },
      {
        sno: 2,
        programName: "BA-LL.B. (Integrated Law)",
        duration: "5 Years (10 Semesters)",
        discipline: "General",
        eligibility: "10+2 with min. 45% marks",
        level: "UG",
      },
      {
        sno: 3,
        programName: "LL.M. (Master of Law)",
        duration: "2 Years (4 Semesters)",
        discipline:
          "Criminal Law, Intellectual Property, Commercial Law, Corporate Law, Constitutional Law, International Trade, Tax Law, Cyber Law, Banking Law, Human Rights, Business Law",
        eligibility: "LL.B. or Equivalent",
        level: "PG",
      },
    ],
  },
  {
    name: "Pharmacy",
    courses: [
      {
        sno: 1,
        programName: "D.Pharmacy (Diploma in Pharmacy)",
        duration: "2 Years",
        discipline: "General",
        eligibility: "10+2 with PCM/PCB",
        level: "Diploma",
      },
      {
        sno: 2,
        programName: "B.Pharmacy (Bachelor of Pharmacy)",
        duration: "4 Years (8 Semesters)",
        discipline: "General",
        eligibility: "10+2 with PCM/PCB",
        level: "UG",
      },
      {
        sno: 3,
        programName: "B.Pharmacy — Lateral Entry",
        duration: "3 Years (6 Semesters)",
        discipline: "General",
        eligibility: "D.Pharmacy",
        level: "UG",
      },
    ],
  },
  {
    name: "Paramedical Sciences",
    courses: [
      {
        sno: 1,
        programName: "Certificate in Paramedical",
        duration: "1 Year (2 Semesters)",
        discipline:
          "Medical Dresser, Dental Technician, Dialysis, ECG, MLT, OTT, Optometry, X-Ray, CT Scan, Radiology",
        eligibility: "X from Recognized Board",
        level: "Certificate",
      },
      {
        sno: 2,
        programName: "Diploma in Paramedical",
        duration: "2 Years (4 Semesters)",
        discipline:
          "Physiotherapy, Dental Technician, ECG, MLT, Operation Theater, X-Ray, CT Scan, Radiology, Medical Dresser",
        eligibility: "10+2 with Science from a Recognized Board",
        level: "Diploma",
      },
      {
        sno: 3,
        programName: "Diploma in Community Medical Service",
        duration: "1.5 Years (3 Semesters)",
        discipline: "Community Medical Service and Essential Drugs",
        eligibility: "X from Recognized Board",
        level: "Diploma",
      },
      {
        sno: 4,
        programName: "B.Sc. in Paramedical Sciences",
        duration: "3 Years (6 Semesters)",
        discipline:
          "Dental Technician, ECG, MLT, OTT, X-Ray, CT Scan, Optometry, Radiology",
        eligibility: "10+2 with Science / PCB from a Recognized Board",
        level: "UG",
      },
      {
        sno: 5,
        programName: "BMLT / BRIT",
        duration: "3 Years (6 Semesters)",
        discipline: "Medical Lab Technology / Radiology & Imaging",
        eligibility: "XII with Science from recognized board",
        level: "UG",
      },
      {
        sno: 6,
        programName: "BPT (Bachelor of Physiotherapy)",
        duration: "8 Semesters + 6 Months Internship",
        discipline: "Physiotherapy",
        eligibility: "10+2 with PCB from a Recognized Board",
        level: "UG",
      },
      {
        sno: 7,
        programName: "BPT — Lateral Entry",
        duration: "3 Years (6 Semesters)",
        discipline: "Physiotherapy",
        eligibility: "XII + Diploma in relevant stream",
        level: "UG",
      },
      {
        sno: 8,
        programName: "BPH (Bachelor of Public Health)",
        duration: "4 Years (8 Semesters)",
        discipline: "Public Health",
        eligibility: "10+2 with PCB from a Recognized Board",
        level: "UG",
      },
      {
        sno: 9,
        programName: "M.Sc. in Paramedical Sciences",
        duration: "2 Years (4 Semesters)",
        discipline:
          "Dental Technician, ECG, MLT, OTT, X-Ray, CT Scan, Radiology, Optometry, Dietetics & Applied Nutrition",
        eligibility: "B.Sc. in relevant stream or equivalent",
        level: "PG",
      },
      {
        sno: 10,
        programName: "MPH (Master of Public Health)",
        duration: "2 Years (4 Semesters)",
        discipline: "Public Health",
        eligibility: "BPH / BDS / BPT",
        level: "PG",
      },
      {
        sno: 11,
        programName: "PG Diploma in Paramedical Sciences",
        duration: "1 Year (2 Semesters)",
        discipline:
          "Dental Technician, ECG, MLT, OTT, X-Ray, CT Scan, Radiology",
        eligibility: "Graduation in relevant stream",
        level: "PG",
      },
    ],
  },
  {
    name: "Vocational Education",
    courses: [
      {
        sno: 1,
        programName: "D.Voc (Diploma in Vocation) — General Trades",
        duration: "3 Years (6 Semesters)",
        discipline:
          "Retail Management, IT, Agriculture, Automobile, Beauty & Wellness, Fashion Technology, Health Care, Hotel Management, Banking, Logistics, Solar Technology, Interior Designing, Fashion Designing, Textile Designing, and 60+ vocational trades",
        eligibility: "X from recognized board",
        level: "Diploma",
      },
      {
        sno: 2,
        programName: "D.Voc — Health & Media Trades",
        duration: "3 Years (6 Semesters)",
        discipline:
          "Anaesthesia Technician, Physiotherapy Asst., Blood Bank, Cardiac Care, Dental Asst., MLT, OT Technician, Radiology, Emergency Medical Technician, VFX Editor, Sound Engineer, Camera Operator, and more",
        eligibility: "X from recognized board",
        level: "Diploma",
      },
      {
        sno: 3,
        programName: "Advance Diploma in Vocation — General Trades",
        duration: "2 Years (4 Semesters)",
        discipline:
          "Retail, IT, Agriculture, Automobile, Beauty & Wellness, Fashion Technology, Health Care, Hotel Management, Banking, Logistics, Solar Technology, Interior Designing, Fashion Designing, and 60+ vocational trades",
        eligibility: "XII from recognized board",
        level: "Diploma",
      },
      {
        sno: 4,
        programName: "Advance Diploma in Vocation — Health & Media Trades",
        duration: "2 Years (4 Semesters)",
        discipline:
          "Anaesthesia Technician, Physiotherapy Asst., Blood Bank, Dental Asst., MLT, OT Technician, Radiology, Emergency Medical Technician, VFX Editor, Sound Engineer, Camera Operator, and more",
        eligibility: "XII from recognized board",
        level: "Diploma",
      },
      {
        sno: 5,
        programName: "B.Voc (Bachelor of Vocation) — General Trades",
        duration: "3 Years (6 Semesters)",
        discipline:
          "Retail, IT, Agriculture, Automobile, Beauty & Wellness, Fashion Technology, Health Care, Hotel Management, Banking, Solar Technology, Interior Designing, Fashion Designing, and 60+ vocational trades",
        eligibility: "XII from recognized board",
        level: "UG",
      },
      {
        sno: 6,
        programName: "B.Voc — Health & Media Trades",
        duration: "3 Years (6 Semesters)",
        discipline:
          "Anaesthesia Technician, Physiotherapy Asst., Blood Bank, Dental Asst., MLT, OT Technician, Radiology, Emergency Medical Technician, VFX Editor, Sound Engineer, Camera Operator, and more",
        eligibility: "XII from recognized board",
        level: "UG",
      },
    ],
  },
  {
    name: "Philosophy & Research",
    courses: [
      {
        sno: 1,
        programName: "Ph.D (Doctorate of Philosophy)",
        duration: "3 Years",
        discipline: "All Running Faculties in the University",
        eligibility:
          "Master Degree from recognized university with min. 55% (5% relaxation for reserved categories)",
        level: "PhD",
      },
    ],
  },
];

type LevelFilter = "All" | "UG" | "PG" | "PhD" | "PostDoc";

const LEVEL_FILTERS: LevelFilter[] = ["All", "UG", "PG", "PhD", "PostDoc"];

const DECISION_BUTTONS = [
  {
    label: "I want to do UG",
    tab: "Commerce & Management",
    level: "UG" as LevelFilter,
  },
  {
    label: "I want to do PG",
    tab: "Commerce & Management",
    level: "PG" as LevelFilter,
  },
  {
    label: "I want MBA",
    tab: "Commerce & Management",
    level: "PG" as LevelFilter,
  },
  {
    label: "I want PhD",
    tab: "Philosophy & Research",
    level: "PhD" as LevelFilter,
  },
];

function getBenefit(course: Course): string {
  if (course.programName.includes("MBA"))
    return "30+ Specializations | High ROI";
  if (course.programName.includes("BBA"))
    return "Management Foundation | Career Starter";
  if (
    course.programName.includes("B.Com") ||
    course.programName.includes("M.Com")
  )
    return "Commerce & Finance Focus";
  if (course.programName.includes("MCA") || course.programName.includes("BCA"))
    return "Tech & IT Career | High Demand";
  if (
    course.programName.includes("M.Sc") ||
    course.programName.includes("B.Sc")
  )
    return "Science & Research Path";
  if (course.programName.includes("Ph.D"))
    return "Research Excellence | Academic Growth";
  if (course.discipline.includes("30+") || course.discipline.includes("25+"))
    return "25+ Specializations Available";
  return "UGC-Approved Program";
}

export function CoursesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [levelFilter, setLevelFilter] = useState<LevelFilter>("All");

  function handleEnquire() {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  function handleDecisionClick(tabName: string, level: LevelFilter) {
    const tabIndex = FACULTIES.findIndex((f) => f.name === tabName);
    if (tabIndex >= 0) setActiveTab(tabIndex);
    setLevelFilter(level);
  }

  const faculty = FACULTIES[activeTab];
  const totalCourses = FACULTIES.reduce((sum, f) => sum + f.courses.length, 0);

  const filteredCourses =
    levelFilter === "All"
      ? faculty.courses
      : faculty.courses.filter((c) => {
          if (levelFilter === "PostDoc") return false;
          return c.level === levelFilter;
        });

  return (
    <section
      id="courses"
      className="py-20 lg:py-28 bg-background"
      data-ocid="courses-section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1.5 text-xs font-body font-semibold uppercase tracking-wider mb-4">
            Courses &amp; Programs
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            Explore {totalCourses}+ Programs Across{" "}
            <span className="text-gradient-primary">
              {FACULTIES.length} Faculties
            </span>{" "}
            – Find the Right Degree for Your Career
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            Select your field, compare programs, and find the right degree based
            on your career goals.
          </p>
        </div>

        {/* Decision Guidance strip */}
        <div
          className="mb-8 p-5 bg-muted/40 border border-border rounded-2xl"
          data-ocid="courses.decision-guidance"
        >
          <p className="text-sm font-body font-semibold text-foreground text-center mb-3">
            Not sure where to start?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {DECISION_BUTTONS.map(({ label, tab, level }) => (
              <button
                key={label}
                type="button"
                onClick={() => handleDecisionClick(tab, level)}
                className="px-4 py-2 rounded-full text-sm font-body font-semibold border border-primary/30 text-primary bg-primary/5 hover:bg-primary/10 transition-smooth"
                data-ocid={`courses.decision-button.${label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Level Filters */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-6"
          data-ocid="courses.level-filters"
        >
          {LEVEL_FILTERS.map((lvl) => (
            <button
              key={lvl}
              type="button"
              onClick={() => setLevelFilter(lvl)}
              className={`px-4 py-1.5 rounded-full text-xs font-body font-semibold border transition-smooth ${
                levelFilter === lvl
                  ? "bg-accent text-accent-foreground border-accent shadow-subtle"
                  : "bg-card text-muted-foreground border-border hover:border-accent/50 hover:text-foreground"
              }`}
              data-ocid={`courses.level-filter.${lvl.toLowerCase()}`}
            >
              {lvl}
            </button>
          ))}
        </div>

        {/* Faculty Tab Bar */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-10"
          data-ocid="courses-faculty-tabs"
        >
          {FACULTIES.map((f, i) => (
            <button
              key={f.name}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-full text-xs font-body font-semibold transition-smooth border ${
                activeTab === i
                  ? "bg-primary text-primary-foreground border-primary shadow-subtle"
                  : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              }`}
              data-ocid={`courses-tab-${i}`}
            >
              {f.name}
            </button>
          ))}
        </div>

        {/* Faculty Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 px-1">
          <div>
            <h3 className="font-display font-bold text-xl text-foreground">
              Faculty of {faculty.name}
            </h3>
            <p className="text-xs text-muted-foreground font-body mt-0.5">
              {filteredCourses.length} program
              {filteredCourses.length !== 1 ? "s" : ""} shown
            </p>
          </div>
          <Badge
            variant="secondary"
            className="font-body font-semibold text-xs"
          >
            {faculty.courses.length} Total Courses
          </Badge>
        </div>

        {/* Program Cards Grid */}
        {filteredCourses.length === 0 ? (
          <div
            className="text-center py-16 bg-card border border-border rounded-2xl"
            data-ocid="courses.empty-state"
          >
            <p className="text-muted-foreground font-body text-sm">
              No programs match this filter in this faculty.
            </p>
            <button
              type="button"
              onClick={() => setLevelFilter("All")}
              className="mt-3 text-primary font-body font-semibold text-sm hover:underline"
            >
              Show all programs
            </button>
          </div>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10"
            data-ocid="courses.card-grid"
          >
            {filteredCourses.map((course, idx) => (
              <div
                key={`${faculty.name}-${course.programName}-${idx}`}
                className="bg-card border border-border rounded-xl p-5 shadow-subtle hover:shadow-elevated hover:-translate-y-0.5 transition-smooth flex flex-col"
                data-ocid={`course-card-${idx + 1}`}
              >
                {/* Tags */}
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {course.popular && (
                    <span className="text-[10px] font-body font-bold text-accent border border-accent/30 bg-accent/8 rounded-full px-2 py-0.5 uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}
                  {course.highDemand && (
                    <span className="text-[10px] font-body font-bold text-primary border border-primary/30 bg-primary/8 rounded-full px-2 py-0.5 uppercase tracking-wider">
                      High Demand
                    </span>
                  )}
                  {course.level && (
                    <span className="text-[10px] font-body font-medium text-muted-foreground border border-border rounded-full px-2 py-0.5 uppercase tracking-wider">
                      {course.level}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-foreground text-sm leading-snug mb-1.5 flex-1">
                  {course.programName}
                </h3>
                <p className="text-xs text-accent font-body font-semibold mb-1">
                  {course.duration}
                </p>
                <p className="text-xs text-muted-foreground font-body mb-4 leading-relaxed">
                  {getBenefit(course)}
                </p>

                <div className="flex gap-2 mt-auto">
                  <button
                    type="button"
                    onClick={handleEnquire}
                    className="flex-1 text-xs font-body font-semibold border border-primary/30 text-primary hover:bg-primary/5 rounded-lg py-2 transition-smooth text-center"
                    data-ocid={`course-card-${idx + 1}.view-details`}
                  >
                    View Details
                  </button>
                  <button
                    type="button"
                    onClick={handleEnquire}
                    className="flex-1 flex items-center justify-center gap-1 text-xs font-body font-semibold bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg py-2 transition-smooth"
                    data-ocid={`course-card-${idx + 1}.apply-now`}
                  >
                    Apply Now
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-6 text-center space-y-3">
          <p className="text-muted-foreground font-body text-sm">
            Confused about which program is right for you?{" "}
            <span className="text-foreground font-semibold">
              Talk to an expert in 60 seconds.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              type="button"
              onClick={handleEnquire}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold shadow-subtle hover:shadow-elevated transition-smooth"
              data-ocid="courses-enquire-cta"
            >
              Get Your Personalized Degree Plan
            </Button>
            <button
              type="button"
              onClick={handleEnquire}
              className="text-sm font-body font-semibold text-primary hover:underline underline-offset-2 transition-colors"
              data-ocid="courses.expert-cta"
            >
              Talk to an Academic Expert Today →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

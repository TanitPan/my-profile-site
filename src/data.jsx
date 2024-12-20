import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaPython, FaJava } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { DiRuby } from 'react-icons/di';
import { BiLogoPostgresql } from 'react-icons/bi';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  // { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: 'Proficient in crafting responsive and visually engaging web interfaces using HTML & CSS.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: 'Solid foundation in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: 'Proficient in React, with experience building dynamic, efficient, and interactive front-end applications. Strong focus on component-based architecture and optimizing user interfaces for seamless performance.',
  },
  {
    id: nanoid(),
    title: 'Go',
    icon: <FaGolang className="h-16 w-16 text-emerald-500" />,
    text: 'Skilled in developing applications with Golang.',
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: <FaPython className="h-16 w-16 text-emerald-500" />,
    text: 'Skilled in Python, capable of creating versatile applications.',
  },
  {
    id: nanoid(),
    title: 'Ruby',
    icon: <DiRuby className="h-16 w-16 text-emerald-500" />,
    text: 'Proficient in Ruby and Ruby on Rails framework.',
  },
  {
    id: nanoid(),
    title: 'Java',
    icon: <FaJava className="h-16 w-16 text-emerald-500" />,
    text: 'Skilled in Java and developing applications with focus on object-oriented principles.',
  },
  {
    id: nanoid(),
    title: 'PostgreSQL',
    icon: <BiLogoPostgresql className="h-16 w-16 text-emerald-500" />,
    text: 'Knowledgeable in PostgreSQL, with experience in designing relational databases for efficient and reliable data handling.',
  },
];

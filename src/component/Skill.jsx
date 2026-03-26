import React from 'react'
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import json from '../Data/data.json'


const iconMap = {
  "FaHtml5": FaHtml5,
  "FaCss3": FaCss3,
  "IoLogoJavascript": IoLogoJavascript,
  "FaReact": FaReact,
  "C#": null
};

const Skill = () => {
  return (
    <section id='skill' className="max-w-6xl bg-base-200 min-h-screen mx-auto px-4 py-16 font-sans">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          My <span className="text-orange-600">Expertise</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          I bridge the gap between complex backend logic and pixel-perfect frontend design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillCard json={json} />
      </div>
    </section>
  );
};

export default Skill;

const SkillCard = ({ json }) => {
  return (
    <>
      {
        json.skills.map((item, index) => {

          const Icon = iconMap[item.logo];
          return (
            <div key={index} className="group p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 text-info rounded-lg flex items-center justify-center text-3xl mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">

                {Icon ? <Icon /> : <span>C#</span>}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
              <p className='text-gray-500 text-sm leading-6' >{item.name}</p>

              <progress className="progress progress-primary w-56" value={item.progress} max="100"></progress>

              <p className="text-gray-500 text-sm leading-6">
                {item.keywords.map((keyword, idx) => (
                  <span key={idx}>{keyword}{idx < item.keywords.length - 1 ? ', ' : ''}</span>
                ))}
              </p>
            </div>
          );
        })
      }
    </>
  )

}

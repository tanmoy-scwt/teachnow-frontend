import HtmlRender from '@/components/ui/htmlRender'
import React from 'react'
import style from './style.module.css'
import JobsListingCard from '../JobsListingCard'

const JobDescription = () => {
  const data = `
  <h4>Duration:</h4> <p>3 Months (Training Period), with the possibility of full-time employment upon successful completion.</p>
  <p>Outright Creators is looking for a highly organized and presentable MBA Fresher to join our team as a Coordinator Intern. This role is ideal for someone with excellent communication skills and a desire to grow in a dynamic and creative environment.</p>

  <h4>Key Responsibilities:</h4>
  <ul>
    <li>Coordinate and manage day-to-day operations and activities within the team.</li>
    <li>Assist in project planning, scheduling, and execution.</li>
    <li>Communicate effectively with internal teams and external stakeholders.</li>
    <li>Prepare reports, presentations, and other documentation as needed.</li>
    <li>Ensure smooth coordination between different departments to meet project deadlines.</li>
  </ul>

  <h4>Requirements:</h4>
  <ul>
    <li>MBA Fresher with a strong academic background.</li>
    <li>Excellent verbal and written communication skills.</li>
    <li>Highly presentable and professional demeanor.</li>
    <li>Strong organizational and multitasking abilities.</li>
    <li>Eagerness to learn and adapt in a fast-paced environment.</li>
  </ul>

  <h4>Perks:</h4>
  <ul>
    <li>Comprehensive training over 3 months, with the potential for a full-time position.</li>
    <li>Exposure to various aspects of project coordination and management.</li>
    <li>Opportunity to work with a supportive and experienced team.</li>
    <li>Certificate of Internship on successful completion.</li>
    <li>Kickstart your career with Outright Creators as a Coordinator Intern and pave the way for a full-time role in our growing company!</li>
  </ul>

`
  return (
    <section>
      <div className={style.sectionContent}>
        <h3 className={style.sectionContentH3}>Job Desription</h3>
        <HtmlRender htmlString={data} />
      </div>
      <div className="section">
        <div className={`grid grid-cols-1 gap-6 ${style.sectionContent}`}>
          <h3 className={style.sectionContentH3}>Related Jobs</h3>
          {Array.from({ length: 2 })?.map((_, index) => (<JobsListingCard key={`jobs${index}`} className={style.jobCard} />))}
        </div>
      </div>
    </section>
  )
}

export default JobDescription
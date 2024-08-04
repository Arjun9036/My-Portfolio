import React from 'react'

export default function About() {
    return (
        <>
            <div className="row about m-3 mb-5">
            <div className="d-flex flex-column flex-md-row align-items-start">

                <div className="col-12 col-md-3 m-auto d-flex justify-content-center align-items-center my-5">
                    <img src="https://res.cloudinary.com/djpewxz4d/image/upload/IMG20231111130147_1_mmrimp_ts2nan.jpg" alt="Arjun Goyal" style={{ width: '100%', borderRadius: '50%' }} />
                </div>
                <div className="col-12 col-md-8 mx-auto mb-5">
                    <h1 className='text-center my-5' style={{ color: 'var(--color-6)', fontSize: '55px', fontWeight: '900' }}>My Overview</h1>
                    <p style={{ color: 'var(--color-5)', fontSize: '20px', textAlign: 'justify' }}>
                        I am a aspiring Full Stack/MERN Software Engineer with a strong foundation in computer science and hands-on experience in
                        software development, machine learning, and project management.
                        I am currently pursuing my B.Tech in Computer Science and Engineering with specialisation in AI and ML from Vellore Institute of Technology.
                    </p>
                    <h1 className='text-center my-5' style={{ color: 'var(--color-6)', fontSize: '55px', fontWeight: '900' }}>Experience</h1>
                    <p style={{ color: 'var(--color-5)', fontSize: '20px', textAlign: 'justify' }}>
                        <h3 style={{ color: 'var(--color-6)'}}>Betalectic</h3>
                        <h4 style={{ color: 'var(--color-6)'}}>Software Intern</h4>
                        As a Software Intern at Betalectic, I am actively involved in developing and optimizing software solutions.
Collaborated with a team of 5 developers to design, implement, and test new features using Python and React.js,
resulting in a 20% increase in application performance. I utilize my strong foundation in computer science and my
passion for coding to solve complex problems efficiently. This internship has allowed me to gain hands-on
experience with various programming languages and development tools, further enhancing my technical skills and
understanding of the software development lifecycle.
                    </p>

                    <div className="col-md-12 d-flex justify-content-around edu-hobby mt-5">
                        <div className="col-md-4 p-3" style={{ backgroundColor: 'var(--color-2)', borderRadius: '10px' }}>
                            <h3 className='mb-4 text-center' style={{ color: 'var(--color-6)', fontSize: '35px', fontWeight: '700' }}>Education</h3>
                            <ul>
                                <li className='mb-2' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                                    B.Tech in Computer Science and Engineering from Vellore Institute of Teachnology.
                                </li>
                                <li className='mb-2' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                                    Intermediate from Manas Sthali, Uttar Pradesh.
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4 p-3" style={{ backgroundColor: 'var(--color-2)', borderRadius: '10px' }}>



                            <h3 className='mb-4 text-center' style={{ color: 'var(--color-6)', fontSize: '35px', fontWeight: '700' }}>Hobbies</h3>
                            <ul>

                                <li className='mb-2' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                                    Web Development
                                </li>
                                <li className='mb-2' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                                    Hackathons
                                </li>
                                <li className='mb-2' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                                    Tech Expos
                                </li>
                                <li className='mb-2' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                                Reading Books
                                </li>


                            </ul>
                        </div>
</div>
                        

                    </div>
                </div>
            </div>
        </>
    )
}

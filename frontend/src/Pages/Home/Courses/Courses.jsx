import React, { useState } from 'react'
import '../Landing/Landing.css'
import Footer from '../../Footer/Footer'
import Header from '../Header/Header'

function Courses() {
  const [facList, setFacList] = useState([]);
  const [loading, setLoading] = useState(true);

  const teachersList = async(sub)=>{
    setLoading(true);

    const response = await fetch(`/api/course/${sub}`, {
      method: 'GET',
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      }
    });

    const data = await response.json();
    setFacList(data.data);
    console.log(data.data);
    setLoading(false);
  }

  return (
    <>
    <Header/>
    <div className="courses">
      {/* <p>Faculty List</p> */}
      {/* <hr className="underLine"/> */}
      <div className="subjects">
        <a href="https://www.python.org/">
        <div className="subject" onClick={()=>teachersList("physics")}>
          <img src="image.png" alt="Python" />
          <p>Python</p>
        </div>
        </a>
        <a href="https://www.c-language.org/">
        <div className="subject" onClick={()=>teachersList("c-language")}>
          <img src="" alt="C-language" />
          <p>C-programming</p>
        </div>
        </a>
        <a href="https://www.java.com/en/">
        <div className="subject" onClick={()=>teachersList("java")}>
          <img src="" alt="java" />
          <p>java</p>
        </div>
        </a>
        <a href="https://techdevguide.withgoogle.com/paths/data-structures-and-algorithms/">
        <div className="subject" onClick={()=>teachersList("DSA")}>
          <img src="" alt="Dsa" />
          <p>DSA</p>
        </div>
        </a>
        <a href="https://en.wikipedia.org/wiki/Operating_system/">
        <div className="subject" onClick={()=>teachersList("OS")}>
          <img src="https://www.figma.com/file/6b4R8evBkii6mI53IA4vSS/image/a64c93efe984ab29f1dfb9e8d8accd9ba449f272" alt="os" />
          <p>Operating System</p>
        </div>
        </a>
      </div>

      <div className="flex items-center justify-center gap-10">
        {!loading && facList && (
          facList.map(fac => (
          <div key={fac._id} className="bg-[#99afbc] p-5 rounded-md ">
            <div className="flex gap-3 items-center mb-2 ">
            <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" alt="profile_img" width={50} />
            <div className="flex flex-col justify-center items-start pl-3">
            <p>{fac.enrolledteacher.Firstname} {fac.enrolledteacher.Lastname}</p>
            <h4 className="text-blue-900">{fac.enrolledteacher.Email}</h4>
            </div>
            </div>
            { fac.enrolledteacher.Email === "urttsg@gmail.com" ?
              <h4><span className="font-bold text-brown-800">Education :</span> Post graduate from Calcutta University</h4> 
              : 
              <h4><span className="font-bold text-brown-800">Education :</span> Post graduate from Sister Nivedita university</h4>
            }
            { fac.enrolledteacher.Email === "urttsg@gmail.com" ? <h4>1 years of teaching experience</h4> : <h4>2 years of teaching experience</h4>}
          </div>
        )))}
      </div>

      </div>
    <Footer/>
    </>
  )
}

export default Courses
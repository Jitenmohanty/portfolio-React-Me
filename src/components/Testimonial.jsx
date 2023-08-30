import React from 'react'

const Testimonial = () => {
  return (
    <div id='testimonial'>
        <h2>Testimoial</h2>
        <section>
            <TestimonialCard name={"Jiten"} feedback={"Your ReactJs Knowledge Not Look like a Bignner "}/>
            <TestimonialCard name={"Roxey"} feedback={"I am Using Dummy Testimonial For Looking Cool "}/>
            <TestimonialCard name={"Stiphen"} feedback={"It was also a Dummy Testimonial..Sorry..."}/>
        </section>
      
    </div>
  )
}

const TestimonialCard = ({name , feedback})=>(
    <article>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

export default Testimonial

import React from 'react'

const Experience = () => {
  return (
    <>
      <section id="about" className="bg-[#222831] w-full p-20">
        <div className="container">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="justify-items-center">
                    <img src="/images/webp/why hire me.webp" alt="An icon of a man" className="size-96" />
                </div>
                <div className="">
                    <h2 className="text-3xl md:text-4xl mb-4 max-w-xl font-bold bg-gradient-to-r from-[#E6521F] to-[#EA2F14] bg-clip-text text-transparent">Why hire me for your next project?</h2>
                    <p className="text-white mb-4">Currently, I am a Junior Frontend Developer. I am currently honing my skills in CSS, ReactJS, JavaScript, PHP, and RestAPI. I am partnered with <span className="bg-gradient-to-r from-[#E6521F] to-[#EA2F14] bg-clip-text text-transparent">Frontline Business Solutions</span> as they provide valuable skills for their trainees.</p>
                    <p className="text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam possimus enim rerum aut, numquam, corporis temporibus ducimus blanditiis, quaerat magni consequuntur. Voluptates totam unde provident qui ipsum voluptatum, deleniti ad eveniet laborum maiores veniam blanditiis, fugiat vero tempora aliquid minus labore quidem voluptatibus modi mollitia consectetur eaque, ab dolores? Eos?</p>
                    <p className="italic font-medium bg-gradient-to-r from-[#E6521F] to-[#EA2F14] bg-clip-text text-transparent">"Website without visitors is like a ship lost in the horizon." - Dr. Christopher Dayagdag</p>
                </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#E6521F] to-[#EA2F14] bg-clip-text text-transparent">Projects:</h2>
        </div>
      </section>
    </>
  )
}

export default Experience

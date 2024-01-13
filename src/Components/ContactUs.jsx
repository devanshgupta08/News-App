import React from 'react';

export default function ContactUs() {
  return (
    <section className="bg-light">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-dark">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
        <form action="#" className="space-y-8">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Your email</label>
            <input type="email" id="email" className="form-control" placeholder="name@flowbite.com" required />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" id="subject" className="form-control" placeholder="Let us know how we can help you" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Your message</label>
            <textarea id="message" rows="6" className="form-control" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send message</button>
        </form>
      </div>
    </section>
  );
}

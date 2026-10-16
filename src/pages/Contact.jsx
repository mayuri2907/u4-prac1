import { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
      <div>
        <span className="inline-block px-3 py-1 bg-stone-100 text-stone-700 text-xs font-semibold rounded-full mb-2 border border-stone-200">
          Get in Touch
        </span>
        <h1 className="text-3xl font-bold text-slate-800">Contact Us</h1>
        <p className="mt-2 text-slate-600">
          Have questions regarding React practicals or routing setup? Reach out below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h4 className="text-sm font-semibold text-slate-700">Student Developer</h4>
            <p className="text-sm text-slate-600 mt-1">Mayuri Vaishnav</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h4 className="text-sm font-semibold text-slate-700">Email Address</h4>
            <p className="text-sm text-slate-600 mt-1 font-mono">mayurivaishnav02@gmail.com</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h4 className="text-sm font-semibold text-slate-700">Subject</h4>
            <p className="text-sm text-slate-600 mt-1">React Router Navigation (Unit 4 Practical 1)</p>
          </div>
        </div>

        <div>
          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800">
              <h4 className="font-semibold text-base mb-1">Message Sent Successfully!</h4>
              <p className="text-sm">Thank you for submitting your feedback. Client-side navigation preserved your session state!</p>
              <button
                onClick={() => { setSubmitted(false); setMessage(''); }}
                className="mt-4 px-4 py-2 bg-emerald-700 text-white rounded-md text-sm font-medium hover:bg-emerald-800 transition"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Your Feedback or Inquiry</label>
                <textarea
                  rows="4"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message here..."
                  className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-emerald-700 text-white rounded-md text-sm font-medium hover:bg-emerald-800 transition"
              >
                Submit Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;

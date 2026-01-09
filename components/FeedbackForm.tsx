import React, { useState, FormEvent } from 'react';

// =============================================================================
// GOOGLE FORM CONFIGURATION
// =============================================================================
// To connect this form to Google Forms:
// 1. Create a new Google Form with Name, Email, and Message fields (Short answer/Paragraph).
// 2. Click "Send" (paper plane icon), then the "link" tab to get the form ID, OR better yet:
//    View the live form, inspect the network tab when submitting, or view source to find the action URL.
//    It usually looks like: https://docs.google.com/forms/u/0/d/e/[FORM_ID]/formResponse
// 3. Find the "entry.ID" for each field by inspecting the input elements in the live form.
// =============================================================================

const GOOGLE_FORM_ACTION_URL = ""; // Paste your URL here, e.g., https://docs.google.com/forms/d/e/.../formResponse
const ENTRY_ID_NAME = "entry.1000000"; // Replace with your Name field ID
const ENTRY_ID_EMAIL = "entry.1000001"; // Replace with your Email field ID
const ENTRY_ID_MESSAGE = "entry.1000002"; // Replace with your Message field ID

const FeedbackForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!GOOGLE_FORM_ACTION_URL) {
      // Simulation mode if no URL provided
      console.log("Simulating submission. Configure GOOGLE_FORM_ACTION_URL to save data.");
      console.log({ name, email, message });
      
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }, 1500);
      return;
    }

    // Google Form Submission Logic
    try {
      const formData = new FormData();
      formData.append(ENTRY_ID_NAME, name);
      formData.append(ENTRY_ID_EMAIL, email);
      formData.append(ENTRY_ID_MESSAGE, message);

      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors", // Google Forms does not support CORS, so we use no-cors
        body: formData,
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-[#152a1a] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#8c6b5d]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-primary">Community</span>
          <h2 className="text-3xl font-bold tracking-tight text-[#0d1b10] dark:text-white sm:text-4xl">
            Share Your Experience
          </h2>
          <p className="mx-auto mt-4 text-base text-gray-500 dark:text-gray-400">
            Have you tasted the harmony of Cu Do and Green Tea? We'd love to hear your thoughts on this traditional ritual.
          </p>
        </div>

        <div className="rounded-2xl bg-[#f8fcf9] dark:bg-[#1a3320] p-6 sm:p-10 shadow-xl shadow-gray-200/50 dark:shadow-none border border-[#e7f3e9] dark:border-[#2a452e]">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-in">
              <div className="h-16 w-16 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-3xl">check</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0d1b10] dark:text-white mb-2">Thank You!</h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-md">
                Your thoughts have been sent. We appreciate you taking the time to share your experience with the community.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-primary font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-[#0d1b10] dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-[#102213] px-4 py-3 text-sm focus:border-primary focus:ring-primary dark:text-white transition-shadow"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-[#0d1b10] dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-[#102213] px-4 py-3 text-sm focus:border-primary focus:ring-primary dark:text-white transition-shadow"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-[#0d1b10] dark:text-white">
                  Your Thoughts
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-[#102213] px-4 py-3 text-sm focus:border-primary focus:ring-primary dark:text-white resize-none transition-shadow"
                  placeholder="Tell us about the flavors, the aroma, or how it made you feel..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-primary px-8 py-4 text-base font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                    <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                    </>
                ) : (
                    <>
                    Send Feedback
                    <span className="material-symbols-outlined text-[20px]">send</span>
                    </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
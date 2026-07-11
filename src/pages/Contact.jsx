import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.subject ||
      !form.message
    ) {
      toast.warning("Please fill all fields");
      return;
    }

    toast.success("Message Sent Successfully 🎉");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="min-h-screen bg-gray-100 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-gray-800">
            Contact Us
          </h1>

          <p className="text-gray-500 mt-4">
            We'd love to hear from you. Send us your message.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <h2 className="text-3xl font-bold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-8">

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Phone
                  </h3>

                  <a
  href="tel:+919876543210"
  className="text-gray-500 hover:text-orange-500 transition"
>
  +91 9876543210
</a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Email
                  </h3>

                 <a
  href="mailto:support@travelgo.com"
  className="text-gray-500 hover:text-orange-500 transition"
>
  support@travelgo.com
</a> 
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Address
                  </h3>

                  <a
  href="https://maps.google.com/?q=New+Delhi+India"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-500 hover:text-orange-500 transition"
>
  New Delhi, India
</a>
                </div>
              </div>

            </div>
          </div>

          {/* Right */}

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <h2 className="text-3xl font-bold mb-8">
              Send Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 outline-none focus:border-orange-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 outline-none focus:border-orange-500"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 outline-none focus:border-orange-500"
              />
                            <textarea
                name="message"
                rows="6"
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 outline-none focus:border-orange-500 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold text-lg transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

        {/* Google Map */}

        <div className="mt-16 bg-white rounded-3xl shadow-lg overflow-hidden">

          <iframe
            title="TravelGo Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48177645748!2d76.76356366035426!3d28.52728034379369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d229fffffff%3A0x24d5f0e9d0f3b4b!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>

      </div>
    </section>
  );
}
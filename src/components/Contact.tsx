import { ContactForm } from "./ContactForm";
import { offices, contact } from "@/lib/content";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-paper-warm">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* Left: contact details */}
          <div>
            <p className="type-kicker text-indigo-500">Contact</p>
            <h2 className="mt-3 text-balance type-headline">
              Get in touch with us
            </h2>
            <p className="mt-4 type-body-sm text-ink-soft">
              Whether you have questions, need expert guidance, or want to
              explore our services, our team is here to help.
            </p>

            {/* Contact details list */}
            <dl className="mt-10 flex flex-col divide-y divide-line border-y border-line">
              {offices.map((office) => (
                <div key={office.region} className="flex gap-4 py-5">
                  <dt className="sr-only">{office.region}</dt>
                  <MapPin size={20} className="mt-0.5 shrink-0 text-indigo-700" aria-hidden="true" />
                  <dd>
                    <p className="type-label text-ink">{office.region}</p>
                    <p className="mt-1 type-body-sm text-ink-soft">{office.address}</p>
                  </dd>
                </div>
              ))}
              <div className="flex gap-4 py-5">
                <dt className="sr-only">Email</dt>
                <Mail size={20} className="mt-0.5 shrink-0 text-indigo-700" aria-hidden="true" />
                <dd>
                  <p className="type-label text-ink">Email</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-1 block type-body-sm text-indigo-700 hover:underline"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div className="flex gap-4 py-5">
                <dt className="sr-only">Mobile</dt>
                <Phone size={20} className="mt-0.5 shrink-0 text-indigo-700" aria-hidden="true" />
                <dd>
                  <p className="type-label text-ink">Mobile</p>
                  <a
                    href="tel:+447931937037"
                    className="mt-1 block type-body-sm text-indigo-700 hover:underline"
                  >
                    {contact.mobile}
                  </a>
                </dd>
              </div>
              <div className="flex gap-4 py-5">
                <dt className="sr-only">Telephone</dt>
                <Phone size={20} className="mt-0.5 shrink-0 text-indigo-700" aria-hidden="true" />
                <dd>
                  <p className="type-label text-ink">Telephone</p>
                  <a
                    href="tel:+2348037007802"
                    className="mt-1 block type-body-sm text-indigo-700 hover:underline"
                  >
                    {contact.telephone}
                  </a>
                </dd>
              </div>
            </dl>

            {/* Map */}
            <div className="mt-10 overflow-hidden rounded-2xl border border-line">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17918.257752917907!2d-4.255913000865058!3d55.84909382144958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48884700694df62b%3A0xe15ed9cf1612df53!2sBrook%20Street%20Business%20Hub!5e0!3m2!1sen!2sng!4v1754850908475!5m2!1sen!2sng"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Masarion Energy UK Office"
              />
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl border border-line bg-paper p-6 md:p-10">
            <p className="type-kicker text-indigo-500">Request a consultation</p>
            <h3 className="mt-3 type-subhead text-ink">
              Tell us about your field
            </h3>
            <p className="mt-2 type-body-sm text-ink-soft">
              Fill in the form below and a member of the team will get back to
              you shortly.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

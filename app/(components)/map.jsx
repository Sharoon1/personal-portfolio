import React from "react";

function Map() {
  return (
    <div className="my-16">
      <div className="mx-10 flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12467.599279291595!2d73.06973040103907!3d31.411615313540736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a79fdf865b%3A0x192e1cf2bfa21cd1!2sSaylani%20Welfare%20Trust%20(Zonal%20Office%20FSD)!5e1!3m2!1sen!2s!4v1728495540040!5m2!1sen!2s"
          width="1000"
          height="400"
          className="border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;

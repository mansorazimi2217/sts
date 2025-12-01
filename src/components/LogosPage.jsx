// import { SparklesCore } from "./components/ui/sparkles";
import Particles2 from "../components/Particles ";

export default function Page() {
  return (
    <div className="relative h-[50%] w-full overflow-hidden bg-[#000] pb-50">
      <div className="absolute inset-0">
        <Particles2
          particleColors={["#ffffff", "#3B82F6", "#60A5FA"]}
          particleCount={50}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="mx-auto mt-32 w-screen max-w-2xl">
        <div className="text-center text-3xl text-white">
          <span className="text-rose-200">Trusted by experts.</span>

          <br />

          <span>Used by the leaders.</span>
        </div>

        <div className="mt-14 grid grid-cols-5 gap-8 items-center justify-center">
          {/* Microsoft Azure */}
          <div className="flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png"
              alt="Microsoft Azure"
              className="h-12 w-auto object-contain filter brightness-0 invert"
            />
          </div>

          {/* Cisco */}
          <div className="flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png"
              alt="Cisco"
              className="h-10 w-auto object-contain filter brightness-0 invert"
            />
          </div>

          {/* AWS */}
          <div className="flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png"
              alt="Amazon Web Services"
              className="h-12 w-auto object-contain filter brightness-0 invert"
            />
          </div>

          {/* Google Cloud */}
          <div className="flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/1200px-Google_Cloud_logo.svg.png"
              alt="Google Cloud"
              className="h-10 w-auto object-contain filter brightness-0 invert"
            />
          </div>

          {/* IBM */}
          <div className="flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png"
              alt="IBM"
              className="h-8 w-auto object-contain filter brightness-0 invert"
            />
          </div>
        </div>
      </div>

      {/* <div className="relative -mt-32 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#1e3a8a,transparent_70%)] before:opacity-40 after:absolute after:top-1/2 after:-left-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#37415166] after:bg-zinc-900"></div> */}
    </div>
  );
}

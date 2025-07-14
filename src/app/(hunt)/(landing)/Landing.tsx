"use client";
import { IN_PERSON, REMOTE } from "~/hunt.config";
import Link from "next/link";
import DiamondBackground from "~/app/(hunt)/(landing)/DiamondBackground";

const formatter = new Intl.DateTimeFormat("en-US", {
  year: "2-digit",
  month: "numeric",
  day: "numeric",
});

const shortFormatter = new Intl.DateTimeFormat("en-US", {
  month: "numeric",
  day: "numeric",
});

export default function Landing() {
  return (




    <div className="h-[calc(100vh-32px)]">

    {/* <div className="fixed inset-0 -z-10 overflow-hidden bg-main-bg">
      <div className="relative w-full h-full">

      </div>
    </div> */}

      <DiamondBackground/>

      {/* <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-red-500 opacity-40 blur-sm rotate-45 animate-blink-slow"></div>
      <div className="absolute top-1/2 left-2/3 w-20 h-20 bg-purple-300 opacity-30 blur-sm rotate-45 animate-blink-slower"></div>
      <div className="absolute top-3/4 left-1/4 w-12 h-12 bg-yellow-400 opacity-50 blur-sm rotate-45 animate-blink-fast"></div>
      <div className="absolute top-1/3 left-1/5 w-24 h-24 bg-green-600 opacity-25 blur-sm rotate-45 animate-blink-slower"></div>

      <div className="absolute top-1/4 left-1/3 w-32 h-12 bg-blue-500 opacity-40 rotate-45 blur-sm animate-blink-slow"></div>
      <div className="absolute top-1/2 left-2/3 w-40 h-8 bg-blue-300 opacity-30 rotate-45 blur-sm animate-blink-slower"></div>
      <div className="absolute top-3/4 left-1/4 w-24 h-6 bg-blue-400 opacity-50 rotate-45 blur-sm animate-blink-fast"></div>
      <div className="absolute top-1/3 left-1/5 w-28 h-10 bg-blue-600 opacity-25 rotate-45 blur-sm animate-blink-slower"></div> */}

      <div className="absolute bottom-8 left-1/2 grid w-full -translate-x-1/2 transform grid-cols-3 gap-x-4 gap-y-8 p-4 text-center lg:bottom-16 lg:w-3/4 lg:grid-cols-3 lg:text-lg xl:bottom-32 xl:text-xl">
        <div className="space-y-2">
          <h1 className="text-main-header lg:text-2xl xl:text-3xl">What?</h1>
          <p className="hidden md:block">
            The third annual puzzlehunt by current Brown and RISD students.
          </p>
          <p className="md:hidden">Our third annual puzzlehunt.</p>
          <p>
            <Link href="/register" className="hover:underline" prefetch={false}>
              <i>Click here to register!</i>
            </Link>
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-main-header lg:text-2xl xl:text-3xl">When?</h1>
          <p className="hidden md:block">
            In-Person: {formatter.format(IN_PERSON.START_TIME)} –{" "}
            {formatter.format(IN_PERSON.END_TIME)}
          </p>
          <p className="md:hidden">
            In-Person:
            <br />
            {shortFormatter.format(IN_PERSON.START_TIME)} –{" "}
            {shortFormatter.format(IN_PERSON.END_TIME)}
          </p>
          <p className="hidden md:block">
            Remote: {formatter.format(REMOTE.START_TIME)} –{" "}
            {formatter.format(REMOTE.END_TIME)}
          </p>
          <p className="md:hidden">
            Remote:
            <br />
            {shortFormatter.format(REMOTE.START_TIME)} –{" "}
            {shortFormatter.format(REMOTE.END_TIME)}
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-main-header lg:text-2xl xl:text-3xl">Who?</h1>
          <p>
            Anyone can come to campus.
            <span className="hidden md:inline">
              {" "}
              (Just tell us so we know you're coming!)
            </span>
          </p>
        </div>
      </div>

    </div>
  );
}
